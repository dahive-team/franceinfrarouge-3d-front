import { PositionalAudio } from "@react-three/drei";

export default function Sound({ url, ...props }) {
  return (
    <mesh {...props} visible={false}>
      <PositionalAudio url={url} distance={2} loop autoplay />
    </mesh>
  );
}
