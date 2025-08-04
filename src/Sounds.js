import { useEffect, useRef } from "react";
import { PositionalAudio } from "@react-three/drei";

import { views } from "./content";

export default function Sounds({ muted, ...props }) {
  const audioRefs = useRef([]);

  useEffect(() => {
    if (audioRefs.current) {
      audioRefs.current.forEach((ref) => {
        muted ? ref.stop() : ref.play();
      });
    }
  }, [muted]);

  return (
    <group {...props} dispose={null}>
      {views?.map(({ id, cameraPosition, sound }, i) => {
        if (!sound) return null;
        return (
          <mesh key={`sound-${id}`} position={cameraPosition} visible={false}>
            <PositionalAudio
              ref={(el) => (audioRefs.current[i] = el)}
              url={sound}
              distance={2}
              loop
              autoplay={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}
