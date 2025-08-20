import { useEffect, useMemo, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { AudioLoader, AudioListener, Object3D, PositionalAudio } from "three";

import { views } from "./content";

export default function Sounds({
  muted = true,
  maxActive = 3,
  fadeIn = 0.15,
  fadeOut = 0.9,
}) {
  const { camera } = useThree();
  const groupRef = useRef();
  const listenerRef = useRef();
  const audioNodes = useRef(new Map()); // id -> { audio, obj3d, playing }
  const buffersRef = useRef(new Map()); // id -> AudioBuffer
  const loader = useMemo(() => new AudioLoader(), []);
  const [ready, setReady] = useState(false);
  const MIN = 0.0001;

  // 1) Précharger tous les buffers (une seule fois)
  useEffect(() => {
    let cancelled = false;
    const promises = views
      .filter((v) => v.sound)
      .map(
        (v) =>
          new Promise((resolve, reject) => {
            loader.load(
              v.sound,
              (buf) => resolve([v.id, buf]),
              undefined,
              reject
            );
          })
      );

    Promise.all(promises).then((pairs) => {
      if (cancelled) return;
      pairs.forEach(([id, buf]) => buffersRef.current.set(id, buf));
      setReady(true); // 🔑 déclenche la suite
    });

    return () => {
      cancelled = true;
    };
  }, [loader]);

  // 2) Créer le listener + un PositionalAudio par view (quand ready = true)
  useEffect(() => {
    if (!ready) return;

    const listener = new AudioListener();
    camera.add(listener);
    listenerRef.current = listener;

    views.forEach(({ id, cameraPosition, sound }) => {
      if (!sound || audioNodes.current.has(id)) return;

      const obj = new Object3D();
      obj.position.set(...cameraPosition);

      const audio = new PositionalAudio(listener);
      audio.setLoop(true);
      audio.setRefDistance(2);

      const buf = buffersRef.current.get(id);
      if (buf) audio.setBuffer(buf);

      // 🟢 éviter les pops : gain à MIN au départ
      const g = audio.gain.gain;
      g.setValueAtTime(MIN, audio.context.currentTime);

      obj.add(audio);
      audioNodes.current.set(id, { audio, obj3d: obj, playing: false });
      groupRef.current.add(obj);
    });

    return () => {
      for (const { audio, obj3d } of audioNodes.current.values()) {
        audio.stop();
        obj3d.remove(audio);
      }
      audioNodes.current.clear();
      camera.remove(listener);
    };
  }, [ready, camera]);

  // 3) Mute/unmute global — FADE
  useEffect(() => {
    if (!ready) return;

    for (const node of audioNodes.current.values()) {
      const a = node.audio;
      if (!a.buffer) continue;

      const g = a.gain.gain;
      const now = a.context.currentTime;

      g.cancelScheduledValues(now);
      g.setValueAtTime(Math.max(g.value, MIN), now);

      if (muted) {
        // Fade-out puis stop
        g.exponentialRampToValueAtTime(MIN, now + fadeOut);
        setTimeout(() => a.stop(), (fadeOut + 0.05) * 1000);
        node.playing = false;
      } else {
        // On ne démarre pas tout de suite toutes les sources :
        // la boucle useFrame se charge d’allumer seulement les plus proches.
        // On remet juste le gain à MIN : la lecture démarrera en douceur dans la boucle.
        g.setValueAtTime(MIN, now);
      }
    }
  }, [muted, ready, fadeOut]);

  // 4) Ne garder actifs que les N plus proches (toutes les ~250ms)
  const acc = useRef(0);
  useFrame((_, dt) => {
    if (!ready || muted) return;
    acc.current += dt;
    if (acc.current < 0.25) return;
    acc.current = 0;

    const sorted = views
      .filter((v) => v.sound)
      .map((v) => {
        const node = audioNodes.current.get(v.id);
        return node
          ? {
              id: v.id,
              d2: camera.position.distanceToSquared(node.obj3d.position),
            }
          : null;
      })
      .filter(Boolean)
      .sort((a, b) => a.d2 - b.d2);

    const keep = new Set(sorted.slice(0, maxActive).map((s) => s.id));

    for (const [id, node] of audioNodes.current.entries()) {
      if (!node.audio.buffer) continue;
      const wantPlay = keep.has(id);

      if (wantPlay && !node.playing) {
        // 🔊 start + petit fade-in
        const a = node.audio;
        const g = a.gain.gain;
        const now = a.context.currentTime;

        g.cancelScheduledValues(now);
        g.setValueAtTime(MIN, now);
        a.play();
        g.exponentialRampToValueAtTime(1.0, now + fadeIn);

        node.playing = true;
      } else if (!wantPlay && node.playing) {
        // stop immédiat (on laisse la virtualisation simple comme avant)
        node.audio.stop();
        node.playing = false;
      }
    }
  });

  return <group ref={groupRef} visible={false} />;
}
