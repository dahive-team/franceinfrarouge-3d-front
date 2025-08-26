import { useEffect, useMemo, useRef } from "react";
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
  const audioNodes = useRef(new Map()); // id -> { audio, obj3d, url, playing, loading }
  const loader = useMemo(() => new AudioLoader(), []);
  const MIN = 0.0001;
  const idxById = useRef(new Map(views.map((v) => [v.id, v]))); // pour retrouver url/pos par id

  // 1) Créer listener + un PositionalAudio par view (sans buffer)
  useEffect(() => {
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
      audio.gain.gain.setValueAtTime(MIN, audio.context.currentTime); // éviter pops

      obj.add(audio);
      audioNodes.current.set(id, {
        audio,
        obj3d: obj,
        url: sound,
        playing: false,
        loading: false,
      });
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
  }, [camera]);

  // 2) Mute/unmute global (fade léger)
  useEffect(() => {
    for (const node of audioNodes.current.values()) {
      const a = node.audio;
      const g = a.gain.gain;
      const now = a.context.currentTime;

      g.cancelScheduledValues(now);
      g.setValueAtTime(Math.max(g.value, MIN), now);

      if (muted) {
        g.exponentialRampToValueAtTime(MIN, now + fadeOut);
        setTimeout(() => a.stop(), (fadeOut + 0.05) * 1000);
        node.playing = false;
      } else {
        // on laisse la boucle décider quoi jouer; on met juste le gain bas
        g.setValueAtTime(MIN, now);
      }
    }
  }, [muted, fadeOut]);

  // 3) Virtualisation : activer seulement les N plus proches,
  //    et charger le buffer "à la demande" si nécessaire.
  const acc = useRef(0);
  useFrame((_, dt) => {
    acc.current += dt;
    if (acc.current < 0.25) return;
    acc.current = 0;

    if (muted) return;

    // calcule les distances
    const sorted = views
      .filter((v) => v.sound)
      .map((v) => {
        const n = audioNodes.current.get(v.id);
        return n
          ? {
              id: v.id,
              d2: camera.position.distanceToSquared(n.obj3d.position),
            }
          : null;
      })
      .filter(Boolean)
      .sort((a, b) => a.d2 - b.d2);

    const keep = new Set(sorted.slice(0, maxActive).map((s) => s.id));

    for (const [id, node] of audioNodes.current.entries()) {
      const wantPlay = keep.has(id);
      const a = node.audio;

      if (wantPlay) {
        // Charger à la demande si pas de buffer et pas déjà en cours
        if (!a.buffer && !node.loading) {
          node.loading = true;
          const url = node.url ?? idxById.current.get(id)?.sound;
          if (!url) continue;

          loader.load(url, (buf) => {
            a.setBuffer(buf);
            node.loading = false;

            // si toujours à jouer, on lance avec petit fade-in
            if (!muted && keep.has(id) && !node.playing) {
              const g = a.gain.gain;
              const now = a.context.currentTime;
              g.cancelScheduledValues(now);
              g.setValueAtTime(MIN, now);
              a.play();
              g.exponentialRampToValueAtTime(1.0, now + fadeIn);
              node.playing = true;
            }
          });
        } else if (a.buffer && !node.playing) {
          // buffer déjà prêt : jouer
          const g = a.gain.gain;
          const now = a.context.currentTime;
          g.cancelScheduledValues(now);
          g.setValueAtTime(MIN, now);
          a.play();
          g.exponentialRampToValueAtTime(1.0, now + fadeIn);
          node.playing = true;
        }
      } else {
        // hors top N : stop immédiat (simple)
        if (node.playing) {
          a.stop();
          node.playing = false;
        }
      }
    }
  });

  return <group ref={groupRef} visible={false} />;
}
