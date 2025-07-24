import { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";

import { getView } from "./content";

export default function Factory({ onClickEvent, moveCameraTo, ...props }) {
  const { nodes, materials } = useGLTF("/factory.glb");
  const receptionRef = useRef(null);
  const grayBuildingRef = useRef(null);

  const handleClick = (v) => {
    const view = getView(v);
    const { position, target } = view;
    moveCameraTo({ position, target });
    onClickEvent(v);
  };

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_051055.geometry}
        material={materials["Material.196"]}
        position={[14.172, 0.237, -5.404]}
        rotation={[-Math.PI, 0, 0]}
        scale={[109.999, 0.056, 17.173]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_051056.geometry}
        material={materials["Material.196"]}
        position={[26.967, 0.237, -31.555]}
        rotation={[-Math.PI, 0, 0]}
        scale={[17.952, 0.056, 0.912]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_051057.geometry}
        material={materials["Material.196"]}
        position={[26.967, 0.237, 20.097]}
        rotation={[-Math.PI, 0, 0]}
        scale={[17.952, 0.056, 0.912]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_051058.geometry}
        material={materials["Material.196"]}
        position={[69.004, 0.237, 34.345]}
        rotation={[-Math.PI, 0, 0]}
        scale={[84.999, 0.056, 4.626]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_051059.geometry}
        material={materials["Material.196"]}
        position={[68.81, 0.237, -63.853]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={[45.525, 0.056, 0.912]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_051060.geometry}
        material={materials["Material.196"]}
        position={[26.167, 0.237, -5.209]}
        rotation={[-Math.PI, 0, 0]}
        scale={[9.948, 0.056, 0.912]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_051062.geometry}
        material={materials["Material.198"]}
        position={[-79.195, 0.153, -10.062]}
        rotation={[-Math.PI, 0, 0]}
        scale={[64.84, 0.056, 2.138]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_051063.geometry}
        material={materials["Material.196"]}
        position={[33.778, 0.195, -58.744]}
        rotation={[-Math.PI, 0, 0]}
        scale={[21.929, 0.056, 5.049]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_051064.geometry}
        material={materials["Material.196"]}
        position={[33.778, 0.195, -46.11]}
        rotation={[-Math.PI, 0, 0]}
        scale={[46.997, 0.056, 1.268]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_051066.geometry}
        material={materials["Material.200"]}
        position={[-75.545, 0.237, -62.206]}
        rotation={[0, 0, -Math.PI]}
        scale={[110.498, 0.056, 6.142]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_051067.geometry}
        material={materials["Material.200"]}
        position={[-77.395, 0.119, -32.034]}
        rotation={[0, 0, Math.PI]}
        scale={[128.998, 0.033, 8.725]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_051068.geometry}
        material={materials["Material.201"]}
        position={[-39.215, 0.119, -30.577]}
        rotation={[0, 0, Math.PI]}
        scale={[236.998, 0.033, 16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_051069.geometry}
        material={materials["Material.202"]}
        position={[40.585, 0.195, 35.492]}
        rotation={[-Math.PI, 0, 0]}
        scale={[70.311, 0.056, 2.343]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_050004.geometry}
        material={materials["Material.202"]}
        position={[41.375, 5.036, 34.323]}
        scale={[7.475, 0.055, 0.374]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_034036.geometry}
        material={materials["Material.196"]}
        position={[43.136, 0.119, -31.396]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[95.144, 0.033, 7.987]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_034047.geometry}
        material={materials["Material.196"]}
        position={[43.136, 0.119, -5.151]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[95.144, 0.033, 7.987]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_034048.geometry}
        material={materials["Material.196"]}
        position={[44.189, 0.119, 19.305]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[95.144, 0.033, 7.987]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_034049.geometry}
        material={materials["Material.196"]}
        position={[76.34, 0.119, -6.275]}
        rotation={[0, 0, -Math.PI]}
        scale={[172.296, 0.033, 18.442]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_034050.geometry}
        material={materials["Material.196"]}
        position={[59.092, 0.119, -51.537]}
        rotation={[0, 0, -Math.PI]}
        scale={[192.353, 0.033, 4.654]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_034051.geometry}
        material={materials["Material.196"]}
        position={[91.177, 0.119, -58.192]}
        rotation={[0, 0, -Math.PI]}
        scale={[128.494, 0.033, 4.956]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_034053.geometry}
        material={materials["Material.196"]}
        position={[96.166, 0.119, -31.018]}
        rotation={[0, 0, -Math.PI]}
        scale={[25.963, 0.033, 5.606]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_034054.geometry}
        material={materials["Material.196"]}
        position={[96.166, 0.119, 20.326]}
        rotation={[0, 0, -Math.PI]}
        scale={[25.963, 0.033, 5.606]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_034055.geometry}
        material={materials["Material.196"]}
        position={[98.221, 0.119, -5.346]}
        rotation={[0, 0, -Math.PI]}
        scale={[46.511, 0.033, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_034056.geometry}
        material={materials["Material.199"]}
        position={[-75.009, 0.119, 76.088]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[99.999, 0.033, 10]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_034057.geometry}
        material={materials["Material.199"]}
        position={[-37.841, 0.119, 76.088]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[99.999, 0.033, 8.584]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_011007.geometry}
        material={materials["Material.200"]}
        position={[-76.75, 0.169, -32.662]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[139.735, 1, 5.238]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_001003.geometry}
        material={materials["Material.203"]}
        position={[72.525, 0.049, 27.679]}
        rotation={[0, 0, -Math.PI]}
        scale={[2249.98, 0.033, 187.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_017019.geometry}
        material={materials["Material.202"]}
        position={[47.744, 4.66, 43.21]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_017020.geometry}
        material={materials["Material.202"]}
        position={[43.025, 4.647, 43.21]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_017021.geometry}
        material={materials["Material.202"]}
        position={[38.306, 4.647, 43.21]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_017022.geometry}
        material={materials["Material.202"]}
        position={[33.587, 4.647, 43.21]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_017023.geometry}
        material={materials["Material.202"]}
        position={[47.744, 4.66, 50.313]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_017024.geometry}
        material={materials["Material.202"]}
        position={[43.025, 4.647, 50.313]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_017025.geometry}
        material={materials["Material.202"]}
        position={[38.306, 4.647, 50.313]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_017026.geometry}
        material={materials["Material.202"]}
        position={[33.587, 4.647, 50.313]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_017027.geometry}
        material={materials["Material.202"]}
        position={[31.559, 4.647, 43.21]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_013009.geometry}
        material={materials["Material.202"]}
        position={[48.218, 5.59, 34.464]}
        rotation={[Math.PI, 0, 0]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_013010.geometry}
        material={materials["Material.202"]}
        position={[37.691, 5.59, 37.818]}
        rotation={[0, 0, Math.PI]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_012032.geometry}
        material={materials["Material.202"]}
        position={[51.464, 4.66, 43.21]}
        scale={[2.678, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_012033.geometry}
        material={materials["Material.202"]}
        position={[46.785, 4.66, 43.21]}
        scale={[2.678, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_012034.geometry}
        material={materials["Material.202"]}
        position={[42.106, 4.66, 43.21]}
        scale={[2.678, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_012035.geometry}
        material={materials["Material.202"]}
        position={[37.428, 4.66, 43.21]}
        scale={[2.678, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_012036.geometry}
        material={materials["Material.202"]}
        position={[31.545, 4.66, 49.313]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[5.124, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_012037.geometry}
        material={materials["Material.202"]}
        position={[51.464, 4.66, 50.313]}
        scale={[2.678, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_012038.geometry}
        material={materials["Material.202"]}
        position={[46.785, 4.66, 50.313]}
        scale={[2.678, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_012039.geometry}
        material={materials["Material.202"]}
        position={[42.106, 4.66, 50.313]}
        scale={[2.678, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_012040.geometry}
        material={materials["Material.202"]}
        position={[37.428, 4.66, 50.313]}
        scale={[2.678, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_012041.geometry}
        material={materials["Material.202"]}
        position={[31.568, 2.655, 40.213]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[16.805, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_012042.geometry}
        material={materials["Material.204"]}
        position={[31.568, -0.097, 30.602]}
        rotation={[Math.PI / 2, -1.571, 0]}
        scale={[16.805, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_011025.geometry}
        material={materials["Material.202"]}
        position={[52.464, 3.65, 43.21]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_011026.geometry}
        material={materials["Material.202"]}
        position={[52.464, 3.65, 50.313]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_011027.geometry}
        material={materials["Material.202"]}
        position={[32.545, 4.66, 50.313]}
        rotation={[0, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_011028.geometry}
        material={materials["Material.202"]}
        position={[31.568, 4.66, 42.21]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_011029.geometry}
        material={materials["Material.202"]}
        position={[31.568, 3.66, 41.213]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_011030.geometry}
        material={materials["Material.205"]}
        position={[31.568, 2.634, 31.6]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_008051.geometry}
        material={materials["Material.196"]}
        position={[36.037, 9.573, -45.782]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.844, 0.471, 0.471]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_008052.geometry}
        material={materials["Material.196"]}
        position={[36.037, 9.097, -48.097]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[9.416, 0.471, 0.471]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_008053.geometry}
        material={materials["Material.196"]}
        position={[31.357, 9.573, -45.782]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.844, 0.471, 0.471]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_008054.geometry}
        material={materials["Material.196"]}
        position={[31.357, 9.097, -48.097]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={[9.416, 0.471, 0.471]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_008055.geometry}
        material={materials["Material.202"]}
        position={[49.418, 5.593, 37.828]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_008056.geometry}
        material={materials["Material.202"]}
        position={[48.218, 5.593, 37.229]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[2.165, 0.6, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_008057.geometry}
        material={materials["Material.202"]}
        position={[49.418, 5.593, 34.455]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_008058.geometry}
        material={materials["Material.202"]}
        position={[47.618, 5.593, 34.464]}
        scale={[5.334, 0.6, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_008059.geometry}
        material={materials["Material.202"]}
        position={[36.491, 5.593, 34.454]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_008060.geometry}
        material={materials["Material.202"]}
        position={[37.691, 5.593, 35.053]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[2.165, 0.6, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_008061.geometry}
        material={materials["Material.202"]}
        position={[36.491, 5.593, 37.827]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_008062.geometry}
        material={materials["Material.202"]}
        position={[38.291, 5.593, 37.818]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[2.058, 0.6, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_008063.geometry}
        material={materials["Material.202"]}
        position={[40.95, 5.593, 37.218]}
        rotation={[0, -1.571, 0]}
        scale={[5.001, 0.6, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_008064.geometry}
        material={materials["Material.202"]}
        position={[41.686, 5.593, 33.865]}
        rotation={[0, -1.571, 0]}
        scale={[1.635, 0.6, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_008065.geometry}
        material={materials["Material.202"]}
        position={[41.678, 4.995, 31.63]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[5.249, 0.6, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_008066.geometry}
        material={materials["Material.202"]}
        position={[40.947, 4.995, 31.63]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[5.249, 0.6, 0.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_007042.geometry}
        material={materials["Material.196"]}
        position={[36.037, 9.103, -45.309]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.473}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_007043.geometry}
        material={materials["Material.196"]}
        position={[36.037, 9.57, -47.627]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.473}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_007044.geometry}
        material={materials["Material.196"]}
        position={[31.357, 9.103, -45.309]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.473}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_007045.geometry}
        material={materials["Material.196"]}
        position={[31.357, 9.57, -47.627]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.473}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_007046.geometry}
        material={materials["Material.202"]}
        position={[50.018, 4.995, 37.828]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_007047.geometry}
        material={materials["Material.202"]}
        position={[50.018, 4.995, 34.455]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_007048.geometry}
        material={materials["Material.202"]}
        position={[48.818, 5.595, 37.828]}
        rotation={[0, 0, Math.PI]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_007049.geometry}
        material={materials["Material.202"]}
        position={[35.891, 4.995, 34.454]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_007050.geometry}
        material={materials["Material.202"]}
        position={[35.891, 4.995, 37.827]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_007051.geometry}
        material={materials["Material.202"]}
        position={[37.091, 5.595, 34.454]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_007052.geometry}
        material={materials["Material.202"]}
        position={[42.284, 5.595, 34.465]}
        rotation={[0, 0, Math.PI]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_007053.geometry}
        material={materials["Material.202"]}
        position={[40.349, 5.595, 37.818]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_007054.geometry}
        material={materials["Material.202"]}
        position={[41.678, 5.595, 32.23]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.6}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tube_007055.geometry}
        material={materials["Material.202"]}
        position={[40.947, 5.595, 32.23]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.6}
      />
      <group position={[21.27, 0.21, -74.291]} rotation={[0, -Math.PI / 2, 0]}>
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_001023.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_001023.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_002023.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_002023.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_003023.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_003023.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_004023.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_004023.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_005023.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_005023.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_006023.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_006023.skeleton}
        />
        <primitive object={nodes.Root} />
        <skinnedMesh
          geometry={nodes.Cube14002.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.Cube14002.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube14002_1.geometry}
          material={materials["Emissive.002"]}
          skeleton={nodes.Cube14002_1.skeleton}
        />
      </group>
      <group position={[5.625, 0.203, -33.926]} rotation={[0, 0.004, 0]}>
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_001024.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_001024.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_002024.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_002024.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_003024.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_003024.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_004024.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_004024.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_005024.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_005024.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_006024.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_006024.skeleton}
        />
        <primitive object={nodes.Root_1} />
        <skinnedMesh
          geometry={nodes.Cube14003.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.Cube14003.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube14003_1.geometry}
          material={materials["Emissive.002"]}
          skeleton={nodes.Cube14003_1.skeleton}
        />
      </group>
      <group position={[22.56, 0.203, -31.526]} rotation={[0, -1.567, 0]}>
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_001025.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_001025.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_002025.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_002025.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_003025.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_003025.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_004025.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_004025.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_005025.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_005025.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_006025.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_006025.skeleton}
        />
        <primitive object={nodes.Root_2} />
        <skinnedMesh
          geometry={nodes.Cube14004.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.Cube14004.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube14004_1.geometry}
          material={materials["Emissive.002"]}
          skeleton={nodes.Cube14004_1.skeleton}
        />
      </group>
      <group
        position={[15.082, 0.203, 11.899]}
        rotation={[-Math.PI, -0.329, -Math.PI]}
      >
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_001026.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_001026.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_002026.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_002026.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_003026.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_003026.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_004026.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_004026.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_005026.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_005026.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_006026.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_006026.skeleton}
        />
        <primitive object={nodes.Root_3} />
        <skinnedMesh
          geometry={nodes.Cube14005.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.Cube14005.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube14005_1.geometry}
          material={materials["Emissive.002"]}
          skeleton={nodes.Cube14005_1.skeleton}
        />
      </group>
      <group position={[-6.741, 0.227, 10.811]}>
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_001027.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_001027.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_002027.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_002027.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_003027.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_003027.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_004027.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_004027.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_005027.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_005027.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_006027.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_006027.skeleton}
        />
        <primitive object={nodes.Root_4} />
        <skinnedMesh
          geometry={nodes.Cube14006.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.Cube14006.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube14006_1.geometry}
          material={materials["Emissive.002"]}
          skeleton={nodes.Cube14006_1.skeleton}
        />
      </group>
      <group position={[89.876, 0.21, 58.358]} rotation={[0, -Math.PI / 2, 0]}>
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_001028.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_001028.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_002028.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_002028.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_003028.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_003028.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_004028.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_004028.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_005028.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_005028.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_trailer_wheel_006028.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_trailer_wheel_006028.skeleton}
        />
        <primitive object={nodes.Root_5} />
        <skinnedMesh
          geometry={nodes.Cube14007.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.Cube14007.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube14007_1.geometry}
          material={materials["Emissive.002"]}
          skeleton={nodes.Cube14007_1.skeleton}
        />
      </group>
      <group
        position={[-2.866, 0.21, -31.21]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <skinnedMesh
          geometry={nodes.truck_wheel_019004.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_019004.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_020004.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_020004.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_021004.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_021004.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_022004.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_022004.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_023004.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_023004.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_024004.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_024004.skeleton}
        />
        <primitive object={nodes.Body_6} />
        <skinnedMesh
          geometry={nodes.Cube14008.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.Cube14008.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube14008_1.geometry}
          material={materials["Emissive.002"]}
          skeleton={nodes.Cube14008_1.skeleton}
        />
      </group>
      <group position={[14.283, 0.21, -74.277]} rotation={[0, -Math.PI / 2, 0]}>
        <skinnedMesh
          geometry={nodes.truck_wheel_013008.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_013008.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_014008.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_014008.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_015008.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_015008.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_016008.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_016008.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_017008.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_017008.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_018008.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_018008.skeleton}
        />
        <primitive object={nodes.Body_7} />
        <skinnedMesh
          geometry={nodes.Cube14009.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.Cube14009.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube14009_1.geometry}
          material={materials["Emissive.002"]}
          skeleton={nodes.Cube14009_1.skeleton}
        />
      </group>
      <group position={[15.694, 0.203, -31.245]} rotation={[0, -1.405, 0]}>
        <skinnedMesh
          geometry={nodes.truck_wheel_013009.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_013009.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_014009.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_014009.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_015009.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_015009.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_016009.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_016009.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_017009.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_017009.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_018009.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_018009.skeleton}
        />
        <primitive object={nodes.Body_8} />
        <skinnedMesh
          geometry={nodes.Cube14010.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.Cube14010.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube14010_1.geometry}
          material={materials["Emissive.002"]}
          skeleton={nodes.Cube14010_1.skeleton}
        />
      </group>
      <group position={[82.889, 0.21, 58.372]} rotation={[0, -Math.PI / 2, 0]}>
        <skinnedMesh
          geometry={nodes.truck_wheel_013010.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_013010.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_014010.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_014010.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_015010.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_015010.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_016010.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_016010.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_017010.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_017010.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_018010.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_018010.skeleton}
        />
        <primitive object={nodes.Body_9} />
        <skinnedMesh
          geometry={nodes.Cube14011.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.Cube14011.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube14011_1.geometry}
          material={materials["Emissive.002"]}
          skeleton={nodes.Cube14011_1.skeleton}
        />
      </group>
      <group
        position={[13.106, 0.203, 5.154]}
        rotation={[-Math.PI, -0.133, -Math.PI]}
      >
        <skinnedMesh
          geometry={nodes.truck_wheel_007006.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_007006.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_008006.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_008006.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_009006.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_009006.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_010006.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_010006.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_011006.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_011006.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_012006.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_012006.skeleton}
        />
        <primitive object={nodes.Body_10} />
        <skinnedMesh
          geometry={nodes.Cube14012.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.Cube14012.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube14012_1.geometry}
          material={materials["Emissive.002"]}
          skeleton={nodes.Cube14012_1.skeleton}
        />
      </group>
      <group position={[-6.755, 0.227, 17.749]}>
        <skinnedMesh
          geometry={nodes.truck_wheel_001007.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_001007.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_002007.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_002007.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_003007.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_003007.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_004007.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_004007.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_005007.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_005007.skeleton}
        />
        <skinnedMesh
          geometry={nodes.truck_wheel_006007.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.truck_wheel_006007.skeleton}
        />
        <primitive object={nodes.Body_11} />
        <skinnedMesh
          geometry={nodes.Cube14013.geometry}
          material={materials["Material.196"]}
          skeleton={nodes.Cube14013.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cube14013_1.geometry}
          material={materials["Emissive.002"]}
          skeleton={nodes.Cube14013_1.skeleton}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001004.geometry}
        material={materials["Color.016"]}
        position={[-13.717, 0.056, -55.27]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tire_001001.geometry}
        material={materials["Color.017"]}
        position={[-10.591, 0.501, -46.694]}
        rotation={[1.038, 1.571, 0]}
        scale={1.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_018004.geometry}
        material={materials["Material.206"]}
        position={[55.746, 0, 34.558]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_018005.geometry}
        material={materials["Material.196"]}
        position={[14.926, -0.014, -42.35]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_016005.geometry}
        material={materials["Material.196"]}
        position={[36.037, -0.092, -45.309]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_016006.geometry}
        material={materials["Material.196"]}
        position={[31.357, -0.092, -45.309]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_014009.geometry}
        material={materials["Material.202"]}
        position={[50.018, -0.073, 37.828]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_014010.geometry}
        material={materials["Material.202"]}
        position={[50.018, -0.073, 34.455]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_014011.geometry}
        material={materials["Material.202"]}
        position={[35.892, -0.073, 37.828]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_014012.geometry}
        material={materials["Material.202"]}
        position={[35.892, -0.073, 34.455]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_013009.geometry}
        material={materials["Material.198"]}
        position={[-78.063, -0.069, -10.243]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_013010.geometry}
        material={materials["Material.198"]}
        position={[-83.864, -0.069, -10.243]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_007005.geometry}
        material={materials["Material.196"]}
        position={[51.604, 9.172, 20.281]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_007006.geometry}
        material={materials["Material.196"]}
        position={[51.604, 8.975, -31.371]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_002005.geometry}
        material={materials["Material.196"]}
        position={[98, -0.072, -55.883]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_002006.geometry}
        material={materials["Material.196"]}
        position={[98, -0.072, -61.794]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_001023.geometry}
        material={materials["Material.202"]}
        position={[52.499, -0.08, 46.566]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_001024.geometry}
        material={materials["Material.202"]}
        position={[47.78, -0.08, 46.566]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_001025.geometry}
        material={materials["Material.202"]}
        position={[43.06, -0.08, 46.566]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_001026.geometry}
        material={materials["Material.202"]}
        position={[38.341, -0.08, 46.566]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tank_001027.geometry}
        material={materials["Material.202"]}
        position={[33.622, -0.08, 46.566]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stand_pipe_001008.geometry}
        material={materials["Material.196"]}
        position={[98.135, 0.101, -50.998]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solar_panel_001454.geometry}
        material={materials["Material.209"]}
        position={[7.818, 0.002, 36.594]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solar_panel_001455.geometry}
        material={materials["Material.210"]}
        position={[7.818, 0.002, 31.864]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solar_panel_001456.geometry}
        material={materials["Material.211"]}
        position={[7.818, 0.002, 34.181]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_markings_004010.geometry}
        material={materials["Material.196"]}
        position={[22.391, 0.26, 8.315]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_markings_004011.geometry}
        material={materials["Material.196"]}
        position={[22.391, 0.26, -18.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_markings_003039.geometry}
        material={materials["Material.196"]}
        position={[22.502, 0.26, -5.285]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_markings_003040.geometry}
        material={materials["Material.196"]}
        position={[22.502, 0.26, 20.114]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_markings_003041.geometry}
        material={materials["Material.196"]}
        position={[13.298, 0.26, 21.394]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_markings_003042.geometry}
        material={materials["Material.196"]}
        position={[13.298, 0.26, 3.468]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_markings_003043.geometry}
        material={materials["Material.196"]}
        position={[13.298, 0.26, -14.458]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_markings_003044.geometry}
        material={materials["Material.196"]}
        position={[13.298, 0.26, -32.383]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_markings_003045.geometry}
        material={materials["Material.196"]}
        position={[7.395, 0.26, -32.383]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_markings_003046.geometry}
        material={materials["Material.196"]}
        position={[7.395, 0.26, -14.458]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_markings_003047.geometry}
        material={materials["Material.196"]}
        position={[7.395, 0.26, 3.468]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_markings_003048.geometry}
        material={materials["Material.196"]}
        position={[-6.711, 0.26, 8.965]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_002033.geometry}
        material={materials["Material.212"]}
        position={[-86.581, 0.26, -9.659]}
        rotation={[-Math.PI, -0.698, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_002034.geometry}
        material={materials["Material.212"]}
        position={[-86.581, 0.26, -9.659]}
        rotation={[-Math.PI, 0.175, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_002037.geometry}
        material={materials["Material.214"]}
        position={[99.184, 0.26, -64.404]}
        rotation={[0, -0.175, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_002038.geometry}
        material={materials["Material.214"]}
        position={[99.184, 0.26, -64.404]}
        rotation={[0, 0.698, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_002039.geometry}
        material={materials["Material.196"]}
        position={[99.172, 0.26, 51.648]}
        rotation={[0, -0.873, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_002040.geometry}
        material={materials["Material.196"]}
        position={[99.172, 0.26, 51.648]}
        rotation={[Math.PI, -1.396, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_002041.geometry}
        material={materials["Material.196"]}
        position={[3.172, 0.26, -64.404]}
        rotation={[-Math.PI, 0.873, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_002042.geometry}
        material={materials["Material.196"]}
        position={[3.172, 0.26, -64.404]}
        rotation={[0, 1.396, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011435.geometry}
        material={materials["Material.229"]}
        position={[-4.828, 0.26, 60.475]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011436.geometry}
        material={materials["Material.229"]}
        position={[-4.828, 0.26, 47.475]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011437.geometry}
        material={materials["Material.230"]}
        position={[-4.828, 0.26, 53.921]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011438.geometry}
        material={materials["Material.231"]}
        position={[-4.828, 0.26, -23.784]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011439.geometry}
        material={materials["Material.232"]}
        position={[-4.828, 0.26, 8.043]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011440.geometry}
        material={materials["Material.233"]}
        position={[-8.59, 0.221, 86.681]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011474.geometry}
        material={materials["Material.254"]}
        position={[107.172, 0.26, 43.684]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011475.geometry}
        material={materials["Material.196"]}
        position={[107.172, 0.26, -55.904]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011476.geometry}
        material={materials["Material.196"]}
        position={[107.172, 0.26, -49.404]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011477.geometry}
        material={materials["Material.196"]}
        position={[107.172, 0.26, -42.904]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011478.geometry}
        material={materials["Material.196"]}
        position={[107.172, 0.26, -36.404]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011479.geometry}
        material={materials["Material.196"]}
        position={[107.172, 0.26, -29.904]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011480.geometry}
        material={materials["Material.196"]}
        position={[107.172, 0.26, -23.404]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011481.geometry}
        material={materials["Material.196"]}
        position={[107.172, 0.26, -16.904]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011482.geometry}
        material={materials["Material.196"]}
        position={[107.172, 0.26, -10.404]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011483.geometry}
        material={materials["Material.196"]}
        position={[107.172, 0.26, -3.904]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011484.geometry}
        material={materials["Material.196"]}
        position={[107.172, 0.26, 17.596]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011485.geometry}
        material={materials["Material.196"]}
        position={[107.172, 0.26, 24.096]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011486.geometry}
        material={materials["Material.196"]}
        position={[107.172, 0.26, 30.596]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011487.geometry}
        material={materials["Material.196"]}
        position={[107.172, 0.26, 37.096]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011488.geometry}
        material={materials["Material.255"]}
        position={[107.172, 0.26, 10.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011498.geometry}
        material={materials["Material.257"]}
        position={[-43.959, 0.26, -1.562]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011499.geometry}
        material={materials["Material.257"]}
        position={[-50.459, 0.26, -1.562]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011500.geometry}
        material={materials["Material.257"]}
        position={[-56.959, 0.26, -1.562]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011501.geometry}
        material={materials["Material.196"]}
        position={[-4.828, 0.26, -62.404]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011502.geometry}
        material={materials["Material.196"]}
        position={[-4.828, 0.26, -55.904]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011503.geometry}
        material={materials["Material.196"]}
        position={[-4.828, 0.26, -49.404]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011504.geometry}
        material={materials["Material.196"]}
        position={[-4.828, 0.26, -30.404]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011505.geometry}
        material={materials["Material.196"]}
        position={[-4.828, 0.26, -17.404]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011506.geometry}
        material={materials["Material.196"]}
        position={[-4.828, 0.26, 1.596]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011507.geometry}
        material={materials["Material.196"]}
        position={[-4.828, 0.26, 14.596]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011508.geometry}
        material={materials["Material.196"]}
        position={[-4.828, 0.26, 21.096]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011509.geometry}
        material={materials["Material.196"]}
        position={[-4.828, 0.26, 27.596]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011510.geometry}
        material={materials["Material.196"]}
        position={[-4.828, 0.26, 34.096]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011511.geometry}
        material={materials["Material.196"]}
        position={[-4.828, 0.26, 40.596]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011512.geometry}
        material={materials["Material.257"]}
        position={[-63.459, 0.26, -1.562]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011513.geometry}
        material={materials["Material.255"]}
        position={[107.172, 0.26, 3.613]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011514.geometry}
        material={materials["Material.196"]}
        position={[68.935, 0.26, 33.616]}
        scale={[1, 1, 1.249]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011515.geometry}
        material={materials["Material.196"]}
        position={[22.419, 0.26, -7.266]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.249]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011516.geometry}
        material={materials["Material.196"]}
        position={[22.419, 0.26, -3.152]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.249]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011517.geometry}
        material={materials["Material.196"]}
        position={[22.419, 0.26, 18.174]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.249]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011518.geometry}
        material={materials["Material.196"]}
        position={[22.419, 0.26, 22.287]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.249]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011603.geometry}
        material={materials["Material.259"]}
        position={[-94.586, 0.26, -72.367]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011605.geometry}
        material={materials["Material.259"]}
        position={[-94.586, 0.26, -13.867]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011606.geometry}
        material={materials["Material.259"]}
        position={[-94.586, 0.26, -20.367]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011607.geometry}
        material={materials["Material.259"]}
        position={[-94.586, 0.26, -26.867]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011608.geometry}
        material={materials["Material.259"]}
        position={[-94.586, 0.26, -33.367]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011609.geometry}
        material={materials["Material.259"]}
        position={[-94.586, 0.26, -39.867]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011610.geometry}
        material={materials["Material.259"]}
        position={[-94.586, 0.26, -46.367]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011611.geometry}
        material={materials["Material.259"]}
        position={[-94.586, 0.26, -52.867]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011612.geometry}
        material={materials["Material.259"]}
        position={[-94.586, 0.26, -59.367]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011613.geometry}
        material={materials["Material.259"]}
        position={[-94.586, 0.26, -65.867]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011614.geometry}
        material={materials["Material.257"]}
        position={[-69.959, 0.26, -1.562]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011615.geometry}
        material={materials["Material.257"]}
        position={[-76.459, 0.26, -1.562]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011616.geometry}
        material={materials["Material.257"]}
        position={[-82.959, 0.26, -1.562]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011617.geometry}
        material={materials["Material.257"]}
        position={[-11.459, 0.26, -1.562]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011618.geometry}
        material={materials["Material.257"]}
        position={[-17.959, 0.26, -1.562]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011619.geometry}
        material={materials["Material.257"]}
        position={[-24.459, 0.26, -1.562]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011620.geometry}
        material={materials["Material.257"]}
        position={[-30.959, 0.26, -1.562]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011621.geometry}
        material={materials["Material.257"]}
        position={[-37.459, 0.26, -1.562]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011625.geometry}
        material={materials["Material.260"]}
        position={[97.679, 0.26, -72.452]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011626.geometry}
        material={materials["Material.260"]}
        position={[91.179, 0.26, -72.452]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011627.geometry}
        material={materials["Material.260"]}
        position={[84.679, 0.26, -72.452]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011628.geometry}
        material={materials["Material.260"]}
        position={[78.179, 0.26, -72.452]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011629.geometry}
        material={materials["Material.260"]}
        position={[71.679, 0.26, -72.452]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011630.geometry}
        material={materials["Material.260"]}
        position={[65.179, 0.26, -72.452]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011631.geometry}
        material={materials["Material.260"]}
        position={[58.679, 0.26, -72.452]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011632.geometry}
        material={materials["Material.260"]}
        position={[52.179, 0.26, -72.452]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011633.geometry}
        material={materials["Material.260"]}
        position={[45.679, 0.26, -72.452]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011634.geometry}
        material={materials["Material.260"]}
        position={[39.179, 0.26, -72.452]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011635.geometry}
        material={materials["Material.260"]}
        position={[32.679, 0.26, -72.452]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011636.geometry}
        material={materials["Material.260"]}
        position={[26.179, 0.26, -72.452]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011637.geometry}
        material={materials["Material.260"]}
        position={[19.679, 0.26, -72.452]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011638.geometry}
        material={materials["Material.260"]}
        position={[13.179, 0.26, -72.452]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011639.geometry}
        material={materials["Material.260"]}
        position={[6.679, 0.26, -72.452]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011640.geometry}
        material={materials["Material.261"]}
        position={[3.818, 0.26, 59.838]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011641.geometry}
        material={materials["Material.261"]}
        position={[10.318, 0.26, 59.838]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011642.geometry}
        material={materials["Material.261"]}
        position={[16.818, 0.26, 59.838]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011643.geometry}
        material={materials["Material.261"]}
        position={[23.318, 0.26, 59.838]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011644.geometry}
        material={materials["Material.261"]}
        position={[29.818, 0.26, 59.838]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011645.geometry}
        material={materials["Material.261"]}
        position={[36.318, 0.26, 59.838]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011646.geometry}
        material={materials["Material.261"]}
        position={[42.818, 0.26, 59.838]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011647.geometry}
        material={materials["Material.261"]}
        position={[49.318, 0.26, 59.838]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011648.geometry}
        material={materials["Material.261"]}
        position={[55.818, 0.26, 59.838]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011649.geometry}
        material={materials["Material.261"]}
        position={[62.318, 0.26, 59.838]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011650.geometry}
        material={materials["Material.261"]}
        position={[68.818, 0.26, 59.838]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011651.geometry}
        material={materials["Material.261"]}
        position={[75.318, 0.26, 59.838]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011652.geometry}
        material={materials["Material.261"]}
        position={[81.818, 0.26, 59.838]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011653.geometry}
        material={materials["Material.261"]}
        position={[88.318, 0.26, 59.838]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011654.geometry}
        material={materials["Material.261"]}
        position={[94.818, 0.26, 59.838]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011657.geometry}
        material={materials["Material.264"]}
        position={[107.172, 0.26, 49.337]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011658.geometry}
        material={materials["Material.200"]}
        position={[-83.945, 0.26, -52.684]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011659.geometry}
        material={materials["Material.200"]}
        position={[-83.945, 0.26, -55.184]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011660.geometry}
        material={materials["Material.200"]}
        position={[-83.945, 0.26, -57.684]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011661.geometry}
        material={materials["Material.200"]}
        position={[-83.945, 0.26, -60.184]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011662.geometry}
        material={materials["Material.200"]}
        position={[-83.945, 0.26, -62.684]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011663.geometry}
        material={materials["Material.200"]}
        position={[-83.945, 0.26, -65.184]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011664.geometry}
        material={materials["Material.200"]}
        position={[-81.195, 0.26, -65.184]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011665.geometry}
        material={materials["Material.200"]}
        position={[-81.195, 0.26, -57.684]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011666.geometry}
        material={materials["Material.200"]}
        position={[-81.195, 0.26, -55.184]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011667.geometry}
        material={materials["Material.200"]}
        position={[-67.145, 0.26, -65.184]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011668.geometry}
        material={materials["Material.200"]}
        position={[-67.145, 0.26, -62.684]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011669.geometry}
        material={materials["Material.200"]}
        position={[-67.145, 0.26, -57.684]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011670.geometry}
        material={materials["Material.200"]}
        position={[-67.145, 0.26, -55.184]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011671.geometry}
        material={materials["Material.200"]}
        position={[-67.145, 0.26, -52.684]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011672.geometry}
        material={materials["Material.200"]}
        position={[-69.886, 0.26, -52.674]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011673.geometry}
        material={materials["Material.200"]}
        position={[-69.886, 0.26, -55.174]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011674.geometry}
        material={materials["Material.200"]}
        position={[-69.886, 0.26, -57.674]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011675.geometry}
        material={materials["Material.200"]}
        position={[-69.886, 0.26, -60.174]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011676.geometry}
        material={materials["Material.200"]}
        position={[-69.886, 0.26, -62.674]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011677.geometry}
        material={materials["Material.200"]}
        position={[-69.886, 0.26, -65.174]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011678.geometry}
        material={materials["Material.200"]}
        position={[-67.145, 0.26, -67.684]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011679.geometry}
        material={materials["Material.200"]}
        position={[-69.886, 0.26, -67.674]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011680.geometry}
        material={materials["Material.200"]}
        position={[-67.145, 0.26, -70.184]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011681.geometry}
        material={materials["Material.200"]}
        position={[-69.886, 0.26, -70.174]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011682.geometry}
        material={materials["Material.265"]}
        position={[68.935, 0.26, 50.162]}
        scale={[1, 1, 1.249]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011683.geometry}
        material={materials["Material.266"]}
        position={[68.935, 0.26, 41.92]}
        scale={[1, 1, 1.249]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011736.geometry}
        material={materials["Material.268"]}
        position={[-4.828, 0.26, -4.807]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011737.geometry}
        material={materials["Material.269"]}
        position={[-4.828, 0.26, -11.187]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011748.geometry}
        material={materials["Material.229"]}
        position={[-4.828, 0.26, 86.475]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011749.geometry}
        material={materials["Material.229"]}
        position={[-4.828, 0.26, 79.975]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011750.geometry}
        material={materials["Material.229"]}
        position={[-4.828, 0.26, 73.475]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011751.geometry}
        material={materials["Material.229"]}
        position={[-4.828, 0.26, 66.975]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_004017.geometry}
        material={materials["Material.212"]}
        position={[-86.581, 0.237, -9.659]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_004019.geometry}
        material={materials["Material.196"]}
        position={[3.172, 0.237, -64.404]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_004020.geometry}
        material={materials["Material.196"]}
        position={[99.172, 0.237, 51.761]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_004021.geometry}
        material={materials["Material.273"]}
        position={[99.172, 0.237, -64.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_003057.geometry}
        material={materials["Material.274"]}
        position={[-94.595, 0.237, -38.584]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_003060.geometry}
        material={materials["Material.276"]}
        position={[-28.828, 0.237, -1.51]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_003062.geometry}
        material={materials["Material.278"]}
        position={[107.172, 0.237, -32.404]}
        scale={[1, 1, 8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_003068.geometry}
        material={materials["Material.196"]}
        position={[23.172, 0.237, -72.405]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_003069.geometry}
        material={materials["Material.280"]}
        position={[79.172, 0.237, -72.404]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_001018.geometry}
        material={materials["Material.200"]}
        position={[-94.595, 0.237, -70.583]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_001020.geometry}
        material={materials["Material.282"]}
        position={[-4.828, 0.237, 59.852]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_001024.geometry}
        material={materials["Material.196"]}
        position={[-4.828, 0.237, -1.498]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_001025.geometry}
        material={materials["Material.196"]}
        position={[-4.828, 0.244, -8.404]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pipe_004003.geometry}
        material={materials["Material.196"]}
        position={[50.225, -1.18, -50.977]}
        scale={2.749}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pipe_003005.geometry}
        material={materials["Material.196"]}
        position={[52.449, 9.141, -5.259]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pipe_003006.geometry}
        material={materials["Material.196"]}
        position={[37.911, 9.141, -5.259]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pipe_001006.geometry}
        material={materials["Material.196"]}
        position={[87.641, 22.251, 20.505]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pipe_001007.geometry}
        material={materials["Material.196"]}
        position={[87.641, 22.251, -31.196]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.metal_construction_001005.geometry}
        material={materials["Material.202"]}
        position={[41.394, 2.685, 34.335]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.887, 0.707, 0.707]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006064.geometry}
        material={materials["Material.196"]}
        position={[36.037, 9.576, -45.782]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.459}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006065.geometry}
        material={materials["Material.196"]}
        position={[36.037, 9.576, -47.593]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.459}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006066.geometry}
        material={materials["Material.196"]}
        position={[31.357, 9.576, -45.782]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.459}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006067.geometry}
        material={materials["Material.196"]}
        position={[31.357, 9.576, -47.593]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.459}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006068.geometry}
        material={materials["Material.202"]}
        position={[48.818, 5.593, 37.828]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006069.geometry}
        material={materials["Material.202"]}
        position={[48.223, 5.593, 37.197]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006070.geometry}
        material={materials["Material.202"]}
        position={[48.223, 5.593, 35.106]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006071.geometry}
        material={materials["Material.202"]}
        position={[48.807, 5.593, 34.45]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={0.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006072.geometry}
        material={materials["Material.202"]}
        position={[47.618, 5.593, 34.45]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={0.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006073.geometry}
        material={materials["Material.202"]}
        position={[37.091, 5.593, 34.454]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006074.geometry}
        material={materials["Material.202"]}
        position={[37.686, 5.593, 35.085]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006075.geometry}
        material={materials["Material.202"]}
        position={[37.686, 5.593, 37.175]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006076.geometry}
        material={materials["Material.202"]}
        position={[37.102, 5.593, 37.832]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006077.geometry}
        material={materials["Material.202"]}
        position={[38.291, 5.593, 37.832]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006078.geometry}
        material={materials["Material.202"]}
        position={[40.349, 5.593, 37.832]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006079.geometry}
        material={materials["Material.202"]}
        position={[40.947, 5.593, 37.175]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006080.geometry}
        material={materials["Material.202"]}
        position={[42.284, 5.593, 34.45]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={0.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006081.geometry}
        material={materials["Material.202"]}
        position={[41.693, 5.593, 33.865]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006082.geometry}
        material={materials["Material.202"]}
        position={[41.688, 5.593, 32.23]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_006083.geometry}
        material={materials["Material.202"]}
        position={[40.947, 5.593, 32.23]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004056.geometry}
        material={materials["Material.284"]}
        position={[31.563, 1.602, 30.587]}
        rotation={[Math.PI / 2, 1.571, 0]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004057.geometry}
        material={materials["Material.202"]}
        position={[51.464, 4.66, 43.21]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004058.geometry}
        material={materials["Material.202"]}
        position={[48.786, 4.66, 43.21]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004059.geometry}
        material={materials["Material.202"]}
        position={[46.785, 4.66, 43.21]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004060.geometry}
        material={materials["Material.202"]}
        position={[44.107, 4.66, 43.21]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004061.geometry}
        material={materials["Material.202"]}
        position={[42.106, 4.66, 43.21]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004062.geometry}
        material={materials["Material.202"]}
        position={[39.428, 4.66, 43.21]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004063.geometry}
        material={materials["Material.202"]}
        position={[37.428, 4.66, 43.21]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004064.geometry}
        material={materials["Material.202"]}
        position={[34.75, 4.66, 43.21]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004065.geometry}
        material={materials["Material.202"]}
        position={[32.749, 4.66, 43.21]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004066.geometry}
        material={materials["Material.202"]}
        position={[51.464, 4.66, 50.313]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004067.geometry}
        material={materials["Material.202"]}
        position={[48.786, 4.66, 50.313]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004068.geometry}
        material={materials["Material.202"]}
        position={[46.785, 4.66, 50.313]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004069.geometry}
        material={materials["Material.202"]}
        position={[44.107, 4.66, 50.313]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004070.geometry}
        material={materials["Material.202"]}
        position={[42.106, 4.66, 50.313]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004071.geometry}
        material={materials["Material.202"]}
        position={[39.428, 4.66, 50.313]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004072.geometry}
        material={materials["Material.202"]}
        position={[37.428, 4.66, 50.313]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004073.geometry}
        material={materials["Material.202"]}
        position={[34.75, 4.66, 50.313]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004074.geometry}
        material={materials["Material.202"]}
        position={[32.749, 4.66, 50.313]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004075.geometry}
        material={materials["Material.202"]}
        position={[31.563, 4.66, 49.313]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004076.geometry}
        material={materials["Material.202"]}
        position={[31.563, 4.66, 44.189]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004077.geometry}
        material={materials["Material.202"]}
        position={[31.563, 4.66, 42.21]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004078.geometry}
        material={materials["Material.202"]}
        position={[31.563, 2.655, 40.213]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.link_004079.geometry}
        material={materials["Material.285"]}
        position={[31.563, 2.655, 31.535]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.996}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.institute_004005.geometry}
        material={materials["Material.199"]}
        position={[-43.268, 0.119, 77.476]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.institute_003003.geometry}
        material={materials["Material.199"]}
        position={[-71.906, 20.234, 71.583]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.institute_002003.geometry}
        material={materials["Material.199"]}
        position={[-36.196, 0.119, 76.497]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.institute_001003.geometry}
        material={materials["Material.199"]}
        position={[-75.002, 0.119, 76.076]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <group
        position={[10.698, 0.226, -7.82]}
        rotation={[Math.PI, -1.098, Math.PI]}
      >
        <group position={[0, 0.3, 1.482]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.forklift_fork_001017.geometry}
            material={materials["Material.196"]}
            position={[-0.004, 0.289, 0.129]}
          />
        </group>
        <group
          position={[-0.564, 0.296, -0.821]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.forklift_wheel_001017.geometry}
            material={materials["Material.196"]}
            position={[-0.023, 0.008, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[0.564, 0.296, -0.821]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.forklift_wheel_002017.geometry}
            material={materials["Material.196"]}
            position={[-0.029, 0, -0.003]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube14057.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube14057_1.geometry}
          material={materials["Emissive.002"]}
        />
      </group>
      <group position={[23.185, 0.226, 26.913]} rotation={[0, -1.569, 0]}>
        <group position={[0, 0.3, 1.482]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.forklift_fork_001018.geometry}
            material={materials["Material.196"]}
            position={[-0.004, 0.289, 0.129]}
          />
        </group>
        <group
          position={[-0.564, 0.296, -0.821]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.forklift_wheel_001018.geometry}
            material={materials["Material.196"]}
            position={[-0.023, 0.008, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[0.564, 0.296, -0.821]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.forklift_wheel_002018.geometry}
            material={materials["Material.196"]}
            position={[-0.029, 0, -0.003]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube14058.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube14058_1.geometry}
          material={materials["Emissive.002"]}
        />
      </group>
      <group
        position={[10.066, 0.226, 25.987]}
        rotation={[-Math.PI, 0.434, -Math.PI]}
      >
        <group position={[0, 0.3, 1.482]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.forklift_fork_001019.geometry}
            material={materials["Material.196"]}
            position={[-0.004, 0.289, 0.129]}
          />
        </group>
        <group
          position={[-0.564, 0.296, -0.821]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.forklift_wheel_001019.geometry}
            material={materials["Material.196"]}
            position={[-0.023, 0.008, 0]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          />
        </group>
        <group
          position={[0.564, 0.296, -0.821]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.forklift_wheel_002019.geometry}
            material={materials["Material.196"]}
            position={[-0.029, 0, -0.003]}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube14059.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube14059_1.geometry}
          material={materials["Emissive.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_002034.geometry}
        material={materials["Material.200"]}
        position={[-75.725, 0.179, -57.798]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_002035.geometry}
        material={materials["Material.200"]}
        position={[-75.725, 0.179, -69.847]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_002037.geometry}
        material={materials["Material.201"]}
        position={[-28.901, 0.179, -29.632]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_002038.geometry}
        material={materials["Material.201"]}
        position={[-39.196, 0.179, -29.632]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_002040.geometry}
        material={materials["Material.201"]}
        position={[-49.985, 0.179, -29.632]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_001113.geometry}
        material={materials["Material.196"]}
        position={[3.172, 0.005, -77.318]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_001114.geometry}
        material={materials["Material.196"]}
        position={[3.172, 0.005, -67.199]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_001115.geometry}
        material={materials["Material.196"]}
        position={[102.211, 0.005, 39.641]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_001116.geometry}
        material={materials["Material.196"]}
        position={[102.211, 0.005, 15.596]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_001117.geometry}
        material={materials["Material.196"]}
        position={[102.211, 0.005, -8.449]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_001118.geometry}
        material={materials["Material.196"]}
        position={[102.211, 0.005, -32.495]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_001119.geometry}
        material={materials["Material.196"]}
        position={[102.211, 0.005, -56.54]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_001120.geometry}
        material={materials["Material.196"]}
        position={[59.172, 0.005, -67.483]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_001121.geometry}
        material={materials["Material.196"]}
        position={[43.172, 0.005, -67.483]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_001122.geometry}
        material={materials["Material.196"]}
        position={[27.172, 0.005, -67.483]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_006052.geometry}
        material={materials["Material.198"]}
        position={[-57.36, -0.576, -11.654]}
        rotation={[3.137, 0.056, 3.091]}
        scale={1.163}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_006053.geometry}
        material={materials["Material.288"]}
        position={[-54.192, -0.81, -70.69]}
        rotation={[3.137, -0.447, 3.089]}
        scale={1.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_006054.geometry}
        material={materials["Material.288"]}
        position={[-43.509, -0.81, -74.019]}
        rotation={[3.119, -1.382, 3.069]}
        scale={1.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_006055.geometry}
        material={materials["Material.288"]}
        position={[-59.336, -0.026, -68.837]}
        rotation={[0.004, 0.175, -0.052]}
        scale={1.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_006056.geometry}
        material={materials["Material.288"]}
        position={[-28.338, -0.81, -68.557]}
        rotation={[0.005, 0.623, -0.054]}
        scale={1.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_006058.geometry}
        material={materials["Material.289"]}
        position={[9.22, -0.019, 47.664]}
        rotation={[3.137, 0.056, 3.091]}
        scale={1.163}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_006059.geometry}
        material={materials["Material.196"]}
        position={[92.66, 0.518, 47.877]}
        rotation={[0.004, 0.008, -0.051]}
        scale={1.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_006060.geometry}
        material={materials["Material.196"]}
        position={[14.991, -0.019, 40.846]}
        rotation={[3.137, 0.056, 3.091]}
        scale={1.163}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_006061.geometry}
        material={materials["Material.196"]}
        position={[91.134, -0.81, 37.769]}
        rotation={[0.004, -0.013, -0.051]}
        scale={1.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_006062.geometry}
        material={materials["Material.196"]}
        position={[99.593, -1.145, -13.77]}
        rotation={[3.137, 0.394, 3.093]}
        scale={0.874}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_006063.geometry}
        material={materials["Material.196"]}
        position={[87.95, -0.576, -45.416]}
        rotation={[3.137, -0.476, 3.089]}
        scale={1.163}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_006064.geometry}
        material={materials["Material.196"]}
        position={[22.881, -0.81, -43.906]}
        rotation={[0.031, -1.433, -0.02]}
        scale={1.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_006065.geometry}
        material={materials["Material.196"]}
        position={[11.542, -0.81, -53.539]}
        rotation={[0.007, -0.948, -0.045]}
        scale={1.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_006066.geometry}
        material={materials["Material.196"]}
        position={[48.709, -1.385, -65.942]}
        rotation={[0.004, 0.049, -0.051]}
        scale={1.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_006067.geometry}
        material={materials["Material.196"]}
        position={[6.393, 0.081, -63.473]}
        rotation={[0.004, -0.013, -0.051]}
        scale={1.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_006068.geometry}
        material={materials["Material.199"]}
        position={[-62.193, -0.81, 53.889]}
        rotation={[0.016, 1.306, -0.067]}
        scale={1.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_005607.geometry}
        material={materials["Material.290"]}
        position={[12.877, 0, 83.577]}
        rotation={[3.095, 0.455, 3.119]}
        scale={1.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_005608.geometry}
        material={materials["Material.291"]}
        position={[23.696, 0, 74.298]}
        rotation={[3.095, -0.423, 3.079]}
        scale={1.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_005611.geometry}
        material={materials["Material.292"]}
        position={[35.053, -0.077, 80.233]}
        rotation={[-0.068, -0.311, -0.021]}
        scale={1.168}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_005612.geometry}
        material={materials["Material.292"]}
        position={[46.541, -0.044, 76.545]}
        rotation={[0.045, -0.355, -0.027]}
        scale={1.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_005613.geometry}
        material={materials["Material.292"]}
        position={[60.881, -0.044, 77.456]}
        rotation={[3.095, 0.442, 3.118]}
        scale={1.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_005624.geometry}
        material={materials["Material.296"]}
        position={[-38.012, 0, -9.039]}
        rotation={[3.081, 0.793, 3.141]}
        scale={1.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_005625.geometry}
        material={materials["Material.296"]}
        position={[-22.757, 0, -9.073]}
        rotation={[3.094, -0.495, 3.076]}
        scale={1.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_005626.geometry}
        material={materials["Material.199"]}
        position={[-15.99, 0, 82.464]}
        rotation={[3.099, 0.115, 3.103]}
        scale={1.297}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_005627.geometry}
        material={materials["Material.199"]}
        position={[38.396, 0, 72.451]}
        rotation={[0.051, 0.597, -0.072]}
        scale={1.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_005628.geometry}
        material={materials["Material.199"]}
        position={[-14.99, -0.077, 10.896]}
        rotation={[-0.067, 0.269, 0.017]}
        scale={1.168}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_005631.geometry}
        material={materials["Material.199"]}
        position={[106.219, 0, 74.44]}
        rotation={[3.09, 0.604, 3.128]}
        scale={1.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_005632.geometry}
        material={materials["Material.199"]}
        position={[70.153, 0, 78.61]}
        rotation={[0.055, -0.691, -0.008]}
        scale={1.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_005633.geometry}
        material={materials["Material.199"]}
        position={[-12.861, 0, 21.542]}
        rotation={[0.128, 1.233, -0.164]}
        scale={1.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_004901.geometry}
        material={materials["Material.291"]}
        position={[15.096, 0, 75.505]}
        rotation={[0, -0.965, 0]}
        scale={1.321}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_004909.geometry}
        material={materials["Material.292"]}
        position={[33.158, 0, 83.694]}
        rotation={[0.023, -0.744, -0.005]}
        scale={1.321}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_004911.geometry}
        material={materials["Material.292"]}
        position={[53.511, -0.044, 81.725]}
        rotation={[0, 1.398, 0]}
        scale={1.321}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_004936.geometry}
        material={materials["Material.296"]}
        position={[-30.832, 0, -11.301]}
        rotation={[0, -0.893, 0]}
        scale={1.321}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_004938.geometry}
        material={materials["Material.199"]}
        position={[-15.599, 0, 72.595]}
        rotation={[0.025, 0.81, -0.039]}
        scale={1.478}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_004939.geometry}
        material={materials["Material.199"]}
        position={[-12.083, 0, 83.264]}
        rotation={[3.141, -0.564, 3.113]}
        scale={1.537}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_004940.geometry}
        material={materials["Material.199"]}
        position={[84.788, 0, 74.086]}
        rotation={[-Math.PI, 0.791, -Math.PI]}
        scale={1.321}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_004941.geometry}
        material={materials["Material.199"]}
        position={[-14.672, 0, 14.829]}
        rotation={[0.017, -0.163, -0.018]}
        scale={1.321}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003139.geometry}
        material={materials["Material.198"]}
        position={[-65.121, -1.569, -10.399]}
        rotation={[3.13, -0.234, -3.101]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003144.geometry}
        material={materials["Material.198"]}
        position={[-54.122, -0.576, -12.226]}
        rotation={[2.468, -1.553, 2.512]}
        scale={0.987}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003145.geometry}
        material={materials["Material.299"]}
        position={[-38.096, -0.576, -72.703]}
        rotation={[0.027, 1.153, 0.019]}
        scale={0.987}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003147.geometry}
        material={materials["Material.288"]}
        position={[-58.175, -0.066, -73.358]}
        rotation={[3.131, 0.064, -3.097]}
        scale={1.191}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003148.geometry}
        material={materials["Material.288"]}
        position={[-47.042, -0.902, -75.285]}
        rotation={[0.06, -1.389, 0.103]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003149.geometry}
        material={materials["Material.288"]}
        position={[-46.817, -0.05, -65.192]}
        rotation={[0.015, 0.795, 0.033]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003150.geometry}
        material={materials["Material.288"]}
        position={[-54.383, -0.066, -76.861]}
        rotation={[0.215, 1.52, -0.171]}
        scale={1.191}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003151.geometry}
        material={materials["Material.288"]}
        position={[-43.473, 0.154, -64.019]}
        rotation={[0.015, -0.756, 0.054]}
        scale={0.987}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003152.geometry}
        material={materials["Material.288"]}
        position={[-22.92, -0.364, -69.003]}
        rotation={[0, -0.055, 0]}
        scale={1.259}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003153.geometry}
        material={materials["Material.288"]}
        position={[-18.238, 0.081, -67.059]}
        rotation={[0.011, 0.308, 0.04]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003154.geometry}
        material={materials["Material.288"]}
        position={[-19.89, -0.576, -70.467]}
        rotation={[0.011, 0.178, 0.042]}
        scale={0.987}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003155.geometry}
        material={materials["Material.288"]}
        position={[-26.07, -0.902, -75.577]}
        rotation={[3.12, 1.04, -3.08]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003157.geometry}
        material={materials["Material.288"]}
        position={[-59.263, -0.172, -65.085]}
        rotation={[0.013, 0.545, 0.037]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003161.geometry}
        material={materials["Material.196"]}
        position={[86.012, 0.48, 47.162]}
        rotation={[3.053, 1.295, -3.006]}
        scale={1.165}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003162.geometry}
        material={materials["Material.196"]}
        position={[99.397, 0.547, 50.384]}
        rotation={[3.131, -0.13, -3.099]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003163.geometry}
        material={materials["Material.196"]}
        position={[90.639, -0.107, 50.72]}
        rotation={[3.119, -1.082, -3.118]}
        scale={1.118}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003164.geometry}
        material={materials["Material.196"]}
        position={[21.672, -0.14, 46.917]}
        rotation={[3.13, -0.234, -3.101]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003165.geometry}
        material={materials["Material.196"]}
        position={[13.646, -0.019, 33.853]}
        rotation={[2.468, -1.553, 2.512]}
        scale={0.987}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003166.geometry}
        material={materials["Material.196"]}
        position={[83.235, 0.426, 35.941]}
        rotation={[0.039, 1.292, 0.006]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003167.geometry}
        material={materials["Material.196"]}
        position={[97.87, -0.781, 40.275]}
        rotation={[3.131, -0.109, -3.099]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003168.geometry}
        material={materials["Material.196"]}
        position={[89.113, -0.066, 40.612]}
        rotation={[3.119, -1.061, -3.117]}
        scale={1.191}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003169.geometry}
        material={materials["Material.196"]}
        position={[96.026, -0.576, 37.249]}
        rotation={[3.057, 1.442, -3.014]}
        scale={0.987}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003170.geometry}
        material={materials["Material.196"]}
        position={[98.267, -0.745, 6.712]}
        rotation={[3.124, 0.896, -3.084]}
        scale={0.734}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003171.geometry}
        material={materials["Material.196"]}
        position={[99.469, -1.569, -43.598]}
        rotation={[3.127, -0.765, -3.108]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003172.geometry}
        material={materials["Material.196"]}
        position={[95.892, -0.576, -45.657]}
        rotation={[0.022, -1.053, 0.063]}
        scale={0.987}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003173.geometry}
        material={materials["Material.196"]}
        position={[2.859, -0.364, -42.762]}
        rotation={[0, 1.551, 0]}
        scale={1.259}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003174.geometry}
        material={materials["Material.196"]}
        position={[4.637, -0.902, -47.51]}
        rotation={[3.109, 1.227, -3.068]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003175.geometry}
        material={materials["Material.196"]}
        position={[26.591, -0.781, -43.307]}
        rotation={[3.099, 1.311, -3.057]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003176.geometry}
        material={materials["Material.196"]}
        position={[9.613, -0.066, -49.15]}
        rotation={[0.096, -1.458, 0.139]}
        scale={1.191}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003177.geometry}
        material={materials["Material.196"]}
        position={[5.766, -0.627, -59.773]}
        rotation={[0.012, 0.358, 0.04]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003178.geometry}
        material={materials["Material.196"]}
        position={[17.713, -0.781, -46.489]}
        rotation={[3.126, 0.826, -3.086]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003179.geometry}
        material={materials["Material.196"]}
        position={[5.5, -0.947, -52.27]}
        rotation={[3.113, -0.129, -3.124]}
        scale={1.191}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003180.geometry}
        material={materials["Material.196"]}
        position={[19.053, -0.576, -49.771]}
        rotation={[0.015, 0.764, 0.033]}
        scale={0.987}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003181.geometry}
        material={materials["Material.196"]}
        position={[24.076, -1.698, -57.396]}
        rotation={[0, 1.466, 0]}
        scale={1.259}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003182.geometry}
        material={materials["Material.196"]}
        position={[26.252, -0.902, -61.975]}
        rotation={[3.099, 1.312, -3.057]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003183.geometry}
        material={materials["Material.196"]}
        position={[55.541, -0.781, -63.712]}
        rotation={[3.131, -0.171, -3.1]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003184.geometry}
        material={materials["Material.196"]}
        position={[46.805, -1.987, -63.019]}
        rotation={[3.108, -1.123, -3.122]}
        scale={1.191}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003185.geometry}
        material={materials["Material.196"]}
        position={[22.766, -0.576, -60.495]}
        rotation={[3.057, 1.442, -3.014]}
        scale={0.987}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003188.geometry}
        material={materials["Material.199"]}
        position={[-65.371, -0.781, 51.882]}
        rotation={[3.066, -1.427, 3.11]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003191.geometry}
        material={materials["Material.199"]}
        position={[-58.176, -0.902, 53.21]}
        rotation={[0.017, -0.901, 0.057]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_003193.geometry}
        material={materials["Material.300"]}
        position={[21.021, -0.019, 41.29]}
        rotation={[2.468, -1.553, 2.512]}
        scale={0.987}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002097.geometry}
        material={materials["Material.198"]}
        position={[-54.606, -1.897, -9.262]}
        rotation={[-3.06, -0.533, -3.101]}
        scale={1.34}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002099.geometry}
        material={materials["Material.299"]}
        position={[-35.92, -0.669, -75.649]}
        rotation={[-0.023, -0.582, 0.037]}
        scale={1.329}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002100.geometry}
        material={materials["Material.288"]}
        position={[-33.057, -0.669, -66.81]}
        rotation={[-3.122, -0.165, -3.089]}
        scale={1.329}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002102.geometry}
        material={materials["Material.288"]}
        position={[-43.981, -0.669, -67.932]}
        rotation={[-3.118, -0.65, -3.078]}
        scale={1.329}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002103.geometry}
        material={materials["Material.288"]}
        position={[-27.312, -0.275, -64.808]}
        rotation={[-2.814, -1.351, -2.821]}
        scale={1.34}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002104.geometry}
        material={materials["Material.288"]}
        position={[-22.247, -0.852, -64.414]}
        rotation={[-0.041, -1.015, -0.012]}
        scale={1.269}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002106.geometry}
        material={materials["Material.288"]}
        position={[-16.231, -0.669, -70.32]}
        rotation={[-0.92, -1.547, -0.87]}
        scale={1.329}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002107.geometry}
        material={materials["Material.196"]}
        position={[84.781, -0.05, 50.797]}
        rotation={[-0.004, -0.025, 0.002]}
        scale={1.269}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002108.geometry}
        material={materials["Material.196"]}
        position={[95.467, -0.074, 50.707]}
        rotation={[-0.019, -0.015, 0.049]}
        scale={1.329}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002109.geometry}
        material={materials["Material.196"]}
        position={[8.069, -1.341, 42.052]}
        rotation={[-3.06, -0.533, -3.101]}
        scale={1.34}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002110.geometry}
        material={materials["Material.196"]}
        position={[83.317, 0.476, 40.744]}
        rotation={[-0.022, -0.031, 0.022]}
        scale={1.269}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002111.geometry}
        material={materials["Material.196"]}
        position={[93.941, -0.669, 40.599]}
        rotation={[-0.019, -0.036, 0.048]}
        scale={1.329}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002112.geometry}
        material={materials["Material.196"]}
        position={[100.071, -1.897, 34.436]}
        rotation={[-0.09, 0.674, 0.056]}
        scale={1.34}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002113.geometry}
        material={materials["Material.196"]}
        position={[99.559, -1.728, 3.871]}
        rotation={[-0.204, 1.216, 0.191]}
        scale={0.997}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002114.geometry}
        material={materials["Material.196"]}
        position={[98.37, -1.034, -16.664]}
        rotation={[-3.121, 0.417, -3.101]}
        scale={1.048}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002115.geometry}
        material={materials["Material.196"]}
        position={[91.535, -1.897, -44.75]}
        rotation={[-2.997, -1.061, -3.016]}
        scale={1.34}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002116.geometry}
        material={materials["Material.196"]}
        position={[7.422, -0.852, -43.595]}
        rotation={[-0.026, 0.591, 0.037]}
        scale={1.269}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002117.geometry}
        material={materials["Material.196"]}
        position={[25.76, -0.669, -47.162]}
        rotation={[-0.163, -1.454, -0.113]}
        scale={1.329}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002118.geometry}
        material={materials["Material.196"]}
        position={[1.951, 0.41, -56.854]}
        rotation={[-0.038, -0.965, -0.009]}
        scale={1.269}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002119.geometry}
        material={materials["Material.196"]}
        position={[15.119, -0.669, -49.459]}
        rotation={[-0.033, -0.97, 0.021]}
        scale={1.329}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002120.geometry}
        material={materials["Material.196"]}
        position={[28.047, -1.897, -52.799]}
        rotation={[-0.073, -0.258, -0.019]}
        scale={1.34}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002121.geometry}
        material={materials["Material.196"]}
        position={[28.693, -0.852, -57.838]}
        rotation={[-0.025, 0.506, 0.035]}
        scale={1.269}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002122.geometry}
        material={materials["Material.196"]}
        position={[51.628, -1.245, -63.229]}
        rotation={[-0.019, 0.026, 0.049]}
        scale={1.329}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002123.geometry}
        material={materials["Material.196"]}
        position={[2.371, -0.214, -61.828]}
        rotation={[-0.022, -0.031, 0.022]}
        scale={1.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002124.geometry}
        material={materials["Material.196"]}
        position={[23.095, -0.669, -64.142]}
        rotation={[-0.019, -0.036, 0.048]}
        scale={1.329}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002128.geometry}
        material={materials["Material.199"]}
        position={[-65.438, -0.669, 55.744]}
        rotation={[-0.067, 1.283, 0.113]}
        scale={1.329}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002129.geometry}
        material={materials["Material.199"]}
        position={[-63.487, -1.897, 45.516]}
        rotation={[-3.07, -0.152, -3.131]}
        scale={1.34}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002130.geometry}
        material={materials["Material.199"]}
        position={[-62.067, -0.852, 50.393]}
        rotation={[-3.106, -0.917, -3.091]}
        scale={1.269}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002132.geometry}
        material={materials["Material.202"]}
        position={[15.685, -0.141, 47.749]}
        rotation={[-3.07, 0.208, 3.126]}
        scale={1.34}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002133.geometry}
        material={materials["Material.202"]}
        position={[20.813, -0.296, 34.617]}
        rotation={[-3.116, -0.556, -3.105]}
        scale={1.269}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002134.geometry}
        material={materials["Material.288"]}
        position={[-13.338, -0.26, -64.431]}
        rotation={[-0.07, -0.071, -0.005]}
        scale={1.34}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011430.geometry}
        material={materials["Material.292"]}
        position={[36.608, 0, 83.391]}
        rotation={[-2.441, -1.517, -2.436]}
        scale={1.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011431.geometry}
        material={materials["Material.290"]}
        position={[7.333, 0, 82.418]}
        rotation={[-0.008, 0.793, 0.036]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011432.geometry}
        material={materials["Material.290"]}
        position={[35.16, 0, 69.645]}
        rotation={[3.123, 0.672, -3.083]}
        scale={1.206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011433.geometry}
        material={materials["Material.291"]}
        position={[12.625, 0, 68.258]}
        rotation={[-0.007, 0.644, 0.035]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011434.geometry}
        material={materials["Material.291"]}
        position={[19.266, 0, 77.828]}
        rotation={[-3.086, 1.469, 3.117]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011435.geometry}
        material={materials["Material.292"]}
        position={[79.109, -0.044, 83.102]}
        rotation={[-0.007, 0.658, 0.035]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011436.geometry}
        material={materials["Material.292"]}
        position={[73.728, -0.044, 72.333]}
        rotation={[0.023, -0.894, 0.065]}
        scale={1.206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011437.geometry}
        material={materials["Material.292"]}
        position={[89.518, -0.044, 78.601]}
        rotation={[-3.134, -0.745, -3.106]}
        scale={1.271}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011438.geometry}
        material={materials["Material.292"]}
        position={[54.662, 0, 86.618]}
        rotation={[-0.187, 1.284, 0.171]}
        scale={1.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011439.geometry}
        material={materials["Material.292"]}
        position={[6.184, 0, 73.786]}
        rotation={[-3.136, 0.289, -3.113]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011441.geometry}
        material={materials["Material.292"]}
        position={[56.278, -0.044, 73.575]}
        rotation={[-0.01, 0.981, 0.039]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011442.geometry}
        material={materials["Material.292"]}
        position={[52.173, -0.044, 77.143]}
        rotation={[-3.133, -0.894, -3.104]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011443.geometry}
        material={materials["Material.292"]}
        position={[59.548, -0.044, 80.382]}
        rotation={[3.123, 0.658, -3.084]}
        scale={1.206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011465.geometry}
        material={materials["Material.199"]}
        position={[23.392, 0, 82.173]}
        rotation={[-0.021, -1.295, 0.011]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011466.geometry}
        material={materials["Material.199"]}
        position={[45.464, 0, 69.902]}
        rotation={[-3.126, 1.207, -3.126]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011467.geometry}
        material={materials["Material.199"]}
        position={[-11.956, 0, 12.681]}
        rotation={[-0.068, -1.03, -0.052]}
        scale={1.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011473.geometry}
        material={materials["Material.199"]}
        position={[71.75, 0, 85.465]}
        rotation={[-3.063, 0.831, 3.075]}
        scale={1.324}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011474.geometry}
        material={materials["Material.199"]}
        position={[96.05, 0, 74.913]}
        rotation={[-3.134, -0.731, -3.106]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011475.geometry}
        material={materials["Material.199"]}
        position={[102.804, 0, 79.302]}
        rotation={[3.12, 0.821, -3.079]}
        scale={1.206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011476.geometry}
        material={materials["Material.199"]}
        position={[100.909, 0, 72.47]}
        rotation={[-0.007, 0.644, 0.035]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011479.geometry}
        material={materials["Material.199"]}
        position={[-98.105, 0, 66.843]}
        rotation={[-0.007, 0.644, 0.035]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011480.geometry}
        material={materials["Material.199"]}
        position={[-15.872, 0, 68.731]}
        rotation={[-0.035, -0.058, 0.004]}
        scale={1.164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002336.geometry}
        material={nodes.fence_002336.material}
        position={[-9.826, 1.459, -53.711]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002337.geometry}
        material={nodes.fence_002337.material}
        position={[-9.826, 1.459, -48.591]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002338.geometry}
        material={nodes.fence_002338.material}
        position={[-9.826, 1.459, -43.471]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002339.geometry}
        material={nodes.fence_002339.material}
        position={[-12.156, 1.459, -56.281]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002340.geometry}
        material={nodes.fence_002340.material}
        position={[-17.283, 1.459, -56.281]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002343.geometry}
        material={nodes.fence_002343.material}
        position={[5.987, 1.459, -39.957]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002344.geometry}
        material={nodes.fence_002344.material}
        position={[26.392, 1.459, -39.957]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002345.geometry}
        material={nodes.fence_002345.material}
        position={[21.265, 1.459, -39.957]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002346.geometry}
        material={nodes.fence_002346.material}
        position={[16.115, 1.459, -39.957]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002347.geometry}
        material={nodes.fence_002347.material}
        position={[3.434, 1.459, -16.839]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002348.geometry}
        material={nodes.fence_002348.material}
        position={[3.434, 1.459, -21.959]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002349.geometry}
        material={nodes.fence_002349.material}
        position={[3.434, 1.459, -27.078]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002350.geometry}
        material={nodes.fence_002350.material}
        position={[3.434, 1.459, -32.198]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002351.geometry}
        material={nodes.fence_002351.material}
        position={[3.434, 1.459, -37.318]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002352.geometry}
        material={nodes.fence_002352.material}
        position={[10.965, 1.459, -39.957]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002353.geometry}
        material={nodes.fence_002353.material}
        position={[3.434, 1.459, 0.803]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002354.geometry}
        material={nodes.fence_002354.material}
        position={[3.434, 1.459, 5.858]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002355.geometry}
        material={nodes.fence_002355.material}
        position={[3.434, 1.459, 10.978]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002356.geometry}
        material={nodes.fence_002356.material}
        position={[3.434, 1.459, 16.098]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002357.geometry}
        material={nodes.fence_002357.material}
        position={[31.262, 1.459, 54.55]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002358.geometry}
        material={nodes.fence_002358.material}
        position={[28.696, 1.459, 51.97]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002359.geometry}
        material={nodes.fence_002359.material}
        position={[28.696, 1.459, 46.85]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002360.geometry}
        material={nodes.fence_002360.material}
        position={[28.696, 1.459, 41.73]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002374.geometry}
        material={nodes.fence_002374.material}
        position={[3.434, 1.459, 21.217]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002375.geometry}
        material={nodes.fence_002375.material}
        position={[10.965, 1.459, 28.887]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002376.geometry}
        material={nodes.fence_002376.material}
        position={[16.115, 1.459, 28.887]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002377.geometry}
        material={nodes.fence_002377.material}
        position={[21.265, 1.459, 28.887]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002378.geometry}
        material={nodes.fence_002378.material}
        position={[26.392, 1.459, 28.887]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002379.geometry}
        material={nodes.fence_002379.material}
        position={[28.696, 1.459, 36.61]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002380.geometry}
        material={nodes.fence_002380.material}
        position={[36.205, 1.459, 54.55]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002381.geometry}
        material={nodes.fence_002381.material}
        position={[59.141, 1.459, 31.49]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002382.geometry}
        material={nodes.fence_002382.material}
        position={[59.141, 1.459, 36.61]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002383.geometry}
        material={nodes.fence_002383.material}
        position={[5.987, 1.459, 28.887]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002384.geometry}
        material={nodes.fence_002384.material}
        position={[3.434, 1.459, 26.337]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002385.geometry}
        material={nodes.fence_002385.material}
        position={[59.141, 1.459, 51.97]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002386.geometry}
        material={nodes.fence_002386.material}
        position={[56.61, 1.459, 54.55]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002387.geometry}
        material={nodes.fence_002387.material}
        position={[51.483, 1.459, 54.55]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002388.geometry}
        material={nodes.fence_002388.material}
        position={[46.333, 1.459, 54.55]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002389.geometry}
        material={nodes.fence_002389.material}
        position={[41.183, 1.459, 54.55]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002390.geometry}
        material={nodes.fence_002390.material}
        position={[28.696, 1.459, 31.49]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001345.geometry}
        material={nodes.fence_001345.material}
        position={[-9.825, -0.019, -51.148]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001346.geometry}
        material={nodes.fence_001346.material}
        position={[-9.825, -0.019, -46.028]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001347.geometry}
        material={nodes.fence_001347.material}
        position={[-9.85, -0.019, -56.212]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001348.geometry}
        material={nodes.fence_001348.material}
        position={[-9.825, -0.019, -40.908]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001349.geometry}
        material={nodes.fence_001349.material}
        position={[-14.719, -0.019, -56.279]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001350.geometry}
        material={nodes.fence_001350.material}
        position={[-19.846, -0.019, -56.279]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001352.geometry}
        material={nodes.fence_001352.material}
        position={[3.424, -0.019, -39.956]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001353.geometry}
        material={nodes.fence_001353.material}
        position={[23.829, -0.019, -39.956]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001354.geometry}
        material={nodes.fence_001354.material}
        position={[18.702, -0.019, -39.956]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001355.geometry}
        material={nodes.fence_001355.material}
        position={[13.552, -0.019, -39.956]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001356.geometry}
        material={nodes.fence_001356.material}
        position={[3.435, -0.019, -19.396]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001357.geometry}
        material={nodes.fence_001357.material}
        position={[3.435, -0.019, -24.515]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001358.geometry}
        material={nodes.fence_001358.material}
        position={[3.435, -0.019, -29.635]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001359.geometry}
        material={nodes.fence_001359.material}
        position={[3.435, -0.019, -34.755]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001360.geometry}
        material={nodes.fence_001360.material}
        position={[8.402, -0.019, -39.956]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001361.geometry}
        material={nodes.fence_001361.material}
        position={[3.435, -0.019, -3.062]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001362.geometry}
        material={nodes.fence_001362.material}
        position={[3.435, -0.019, 3.301]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001363.geometry}
        material={nodes.fence_001363.material}
        position={[3.435, -0.019, 8.421]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001364.geometry}
        material={nodes.fence_001364.material}
        position={[3.435, -0.019, 13.541]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001365.geometry}
        material={nodes.fence_001365.material}
        position={[3.435, -0.019, 18.661]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001366.geometry}
        material={nodes.fence_001366.material}
        position={[28.699, -0.019, 54.552]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001367.geometry}
        material={nodes.fence_001367.material}
        position={[28.698, -0.019, 49.413]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001368.geometry}
        material={nodes.fence_001368.material}
        position={[28.698, -0.019, 44.293]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001369.geometry}
        material={nodes.fence_001369.material}
        position={[28.698, -0.019, 39.173]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001370.geometry}
        material={nodes.fence_001370.material}
        position={[8.402, -0.019, 28.889]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001371.geometry}
        material={nodes.fence_001371.material}
        position={[28.698, -0.019, 34.053]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001385.geometry}
        material={nodes.fence_001385.material}
        position={[13.552, -0.019, 28.889]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001386.geometry}
        material={nodes.fence_001386.material}
        position={[18.702, -0.019, 28.889]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001387.geometry}
        material={nodes.fence_001387.material}
        position={[23.829, -0.019, 28.889]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001388.geometry}
        material={nodes.fence_001388.material}
        position={[3.424, -0.019, 28.889]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001389.geometry}
        material={nodes.fence_001389.material}
        position={[28.698, -0.019, 28.934]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001390.geometry}
        material={nodes.fence_001390.material}
        position={[33.643, -0.019, 54.552]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001391.geometry}
        material={nodes.fence_001391.material}
        position={[59.143, -0.019, 28.934]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001392.geometry}
        material={nodes.fence_001392.material}
        position={[59.143, -0.019, 34.053]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001393.geometry}
        material={nodes.fence_001393.material}
        position={[59.143, -0.019, 39.173]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001394.geometry}
        material={nodes.fence_001394.material}
        position={[3.435, -0.019, 23.78]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001395.geometry}
        material={nodes.fence_001395.material}
        position={[59.143, -0.019, 49.413]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001396.geometry}
        material={nodes.fence_001396.material}
        position={[59.143, -0.019, 54.533]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001397.geometry}
        material={nodes.fence_001397.material}
        position={[54.047, -0.019, 54.552]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001398.geometry}
        material={nodes.fence_001398.material}
        position={[48.92, -0.019, 54.552]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001399.geometry}
        material={nodes.fence_001399.material}
        position={[43.77, -0.019, 54.552]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001400.geometry}
        material={nodes.fence_001400.material}
        position={[38.62, -0.019, 54.552]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <group position={[78.672, 0.119, -5.342]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane295.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane295_1.geometry}
          material={materials["Glass.002"]}
        />
      </group>
      <group position={[44.799, 0.119, -5.132]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh408.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh408_1.geometry}
          material={materials["Glass.002"]}
        />
      </group>
      <group position={[44.799, 0.119, 20.266]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh408.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh408_1.geometry}
          material={materials["Glass.002"]}
        />
      </group>
      <group position={[44.799, 0.119, -31.471]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh408.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh408_1.geometry}
          material={materials["Glass.002"]}
        />
      </group>
      <group position={[68.711, 0.119, -43.271]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh408.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh408_1.geometry}
          material={materials["Glass.002"]}
        />
      </group>
      <group position={[86.867, 0, -59.704]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh409.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh409_1.geometry}
          material={materials["Glass.002"]}
        />
      </group>
      <group position={[72.759, 0.23, 30.426]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane296.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane296_1.geometry}
          material={materials["Glass.002"]}
        />
      </group>
      <group position={[65.012, 0.23, 30.426]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane297.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane297_1.geometry}
          material={materials["Glass.002"]}
        />
      </group>
      <group
        position={[27.64, 3.841, -31.608]}
        rotation={[-Math.PI / 2, -0.233, -Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane298.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane298_1.geometry}
          material={materials["Glass.002"]}
        />
      </group>
      <group
        position={[26.976, 3.481, -5.283]}
        rotation={[-Math.PI / 2, -0.326, -Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane299.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane299_1.geometry}
          material={materials["Glass.002"]}
        />
      </group>
      <group position={[28.587, 0.237, 20.123]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane300.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane300_1.geometry}
          material={materials["Glass.002"]}
        />
      </group>
      <group
        position={[68.862, 0.18, -59.451]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane301.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane301_1.geometry}
          material={materials["Glass.002"]}
        />
      </group>
      <group position={[70.739, 0.23, 30.442]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane302.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane302_1.geometry}
          material={materials["Glass.002"]}
        />
      </group>
      <group position={[62.992, 0.23, 30.442]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane303.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane303_1.geometry}
          material={materials["Glass.002"]}
        />
      </group>
      <group position={[92.866, 0.119, -4.347]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane304.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane304_1.geometry}
          material={materials["Glass.002"]}
        />
      </group>
      <group position={[92.866, 0.119, -6.348]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane305.geometry}
          material={materials["Material.196"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane305_1.geometry}
          material={materials["Glass.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_008017.geometry}
        material={materials["Material.196"]}
        position={[23.779, 4.284, -36.068]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_008018.geometry}
        material={materials["Material.196"]}
        position={[23.779, 4.284, -38.25]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_008019.geometry}
        material={materials["Material.196"]}
        position={[11.634, 4.284, -38.229]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_008020.geometry}
        material={materials["Material.196"]}
        position={[11.634, 4.284, -36.047]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_004025.geometry}
        material={materials["Material.196"]}
        position={[23.175, 4.285, 3.813]}
        rotation={[-Math.PI, -0.042, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_004026.geometry}
        material={materials["Material.196"]}
        position={[21.001, 4.285, 3.923]}
        rotation={[-Math.PI, -0.068, -Math.PI]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_004027.geometry}
        material={materials["Material.196"]}
        position={[21.63, 4.285, 16.079]}
        rotation={[0, 0.05, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_004028.geometry}
        material={materials["Material.196"]}
        position={[23.815, 4.285, 15.968]}
        rotation={[0, 0.05, 0]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_001053.geometry}
        material={materials["Material.196"]}
        position={[-7.802, 3.147, 18.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_001054.geometry}
        material={materials["Material.196"]}
        position={[-5.613, 3.147, 18.011]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_001055.geometry}
        material={materials["Material.196"]}
        position={[-5.63, 3.147, 5.853]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_001056.geometry}
        material={materials["Material.196"]}
        position={[-7.819, 3.147, 5.853]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_001057.geometry}
        material={materials["Material.196"]}
        position={[23.773, 1.593, -36.049]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_001058.geometry}
        material={materials["Material.196"]}
        position={[23.773, 1.593, -38.238]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_001059.geometry}
        material={materials["Material.196"]}
        position={[11.615, 1.593, -38.221]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_001060.geometry}
        material={materials["Material.196"]}
        position={[11.615, 1.593, -36.032]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_001061.geometry}
        material={materials["Material.196"]}
        position={[23.832, 1.593, 3.8]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_001062.geometry}
        material={materials["Material.196"]}
        position={[21.643, 1.593, 3.8]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_001063.geometry}
        material={materials["Material.196"]}
        position={[21.659, 1.593, 15.959]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_001064.geometry}
        material={materials["Material.196"]}
        position={[23.848, 1.593, 15.959]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_001065.geometry}
        material={materials["Material.196"]}
        position={[21.221, 1.593, 3.809]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_001066.geometry}
        material={materials["Material.196"]}
        position={[19.033, 1.593, 3.809]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_001067.geometry}
        material={materials["Material.196"]}
        position={[19.049, 1.593, 15.967]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_door_001068.geometry}
        material={materials["Material.196"]}
        position={[21.238, 1.593, 15.967]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_40ft_013005.geometry}
        material={materials["Material.196"]}
        position={[17.695, 2.925, -37.134]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_40ft_009006.geometry}
        material={materials["Material.196"]}
        position={[22.391, 2.926, 9.932]}
        rotation={[0, 0.05, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_40ft_006013.geometry}
        material={materials["Material.196"]}
        position={[-6.732, 1.788, 11.92]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_40ft_006014.geometry}
        material={materials["Material.196"]}
        position={[17.682, 0.234, -37.119]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_40ft_006015.geometry}
        material={materials["Material.196"]}
        position={[22.761, 0.234, 9.891]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.container_40ft_006016.geometry}
        material={materials["Material.196"]}
        position={[20.151, 0.234, 9.9]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coil_001014.geometry}
        material={materials["Material.196"]}
        position={[23.222, 0.907, -11.843]}
        rotation={[Math.PI / 2, 0, -2.789]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coil_001015.geometry}
        material={materials["Material.196"]}
        position={[24.544, 2.258, -12.791]}
        rotation={[Math.PI / 2, 0, 1.443]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.coil_001016.geometry}
        material={materials["Material.196"]}
        position={[23.546, 0.224, -11.033]}
        rotation={[-Math.PI, -1.56, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_006022.geometry}
        material={materials["Material.200"]}
        position={[-84.051, 0.216, -58.654]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_006023.geometry}
        material={materials["Material.303"]}
        position={[-2.637, 0.216, 43.113]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_005014.geometry}
        material={materials["Material.200"]}
        position={[-67.084, 0.216, -61.478]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_005017.geometry}
        material={materials["Material.200"]}
        position={[-87.356, 0.216, -71.71]}
        rotation={[0, 1.222, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_004035.geometry}
        material={materials["Material.200"]}
        position={[-67.191, 0.216, -53.971]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_004040.geometry}
        material={materials["Material.200"]}
        position={[-84.127, 0.216, -61.32]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_004062.geometry}
        material={materials["Material.304"]}
        position={[12.523, 0.216, 57.675]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_003009.geometry}
        material={materials["Material.200"]}
        position={[-92.266, 0.216, -45.836]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002044.geometry}
        material={materials["Material.200"]}
        position={[-67.081, 0.216, -56.408]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002045.geometry}
        material={materials["Material.200"]}
        position={[-67.081, 0.216, -58.961]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002048.geometry}
        material={materials["Material.200"]}
        position={[-67.081, 0.216, -66.413]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002049.geometry}
        material={materials["Material.200"]}
        position={[-83.797, 0.216, -51.442]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cabin_001011.geometry}
        material={materials["Material.306"]}
        position={[5.986, 0, -15.037]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005042.geometry}
        material={materials["Material.201"]}
        position={[-50.186, 0.062, -33.017]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005043.geometry}
        material={materials["Material.201"]}
        position={[-50.186, 0.062, -26.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005044.geometry}
        material={materials["Material.201"]}
        position={[-29.016, 0.062, -33.017]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005045.geometry}
        material={materials["Material.201"]}
        position={[-29.016, 0.062, -26.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005046.geometry}
        material={materials["Material.307"]}
        position={[1.042, -0.023, -33.819]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005047.geometry}
        material={materials["Material.308"]}
        position={[1.042, -0.023, -21.382]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005048.geometry}
        material={materials["Material.309"]}
        position={[1.042, -0.093, 4.426]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005049.geometry}
        material={materials["Material.310"]}
        position={[1.042, -0.093, 16.803]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005054.geometry}
        material={materials["Material.311"]}
        position={[79.579, 0.012, 49.103]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005085.geometry}
        material={materials["Material.196"]}
        position={[95.142, -0.01, 2.814]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005086.geometry}
        material={materials["Material.196"]}
        position={[95.142, -0.01, -13.565]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005087.geometry}
        material={materials["Material.196"]}
        position={[79.579, 0.012, 37.628]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_003019.geometry}
        material={materials["Material.200"]}
        position={[-75.695, 0.212, -52.703]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_003020.geometry}
        material={materials["Material.200"]}
        position={[-75.695, 0.212, -63.065]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_003021.geometry}
        material={materials["Material.201"]}
        position={[-20.402, -0.001, -29.699]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_003022.geometry}
        material={materials["Material.201"]}
        position={[-59.017, -0.001, -29.699]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_003025.geometry}
        material={materials["Material.199"]}
        position={[-41.698, -0.028, 67.193]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_003026.geometry}
        material={materials["Material.199"]}
        position={[-31.5, -0.028, 67.193]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_002020.geometry}
        material={materials["Material.315"]}
        position={[-25.067, 0.077, -57.101]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.683}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_002024.geometry}
        material={materials["Material.315"]}
        position={[-43.839, 0.077, -57.101]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.683}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_002025.geometry}
        material={materials["Material.315"]}
        position={[-48.596, 0.077, -57.101]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.683}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_002026.geometry}
        material={materials["Material.315"]}
        position={[-25.067, 0.077, -43.615]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.683}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_002028.geometry}
        material={materials["Material.315"]}
        position={[-43.839, 0.077, -43.615]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.683}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_002029.geometry}
        material={materials["Material.315"]}
        position={[-48.596, 0.077, -43.615]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.683}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_001017.geometry}
        material={materials["Material.315"]}
        position={[-32.042, 0.168, -43.639]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.575}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_001020.geometry}
        material={materials["Material.315"]}
        position={[-36.924, 0.168, -43.639]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.575}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_001021.geometry}
        material={materials["Material.315"]}
        position={[-55.71, 0.168, -43.639]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.575}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_001024.geometry}
        material={materials["Material.315"]}
        position={[-60.447, 0.168, -43.639]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.575}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_001025.geometry}
        material={materials["Material.315"]}
        position={[-32.042, 0.168, -57.266]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.575}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_001028.geometry}
        material={materials["Material.315"]}
        position={[-36.924, 0.168, -57.266]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.575}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_001029.geometry}
        material={materials["Material.315"]}
        position={[-55.71, 0.168, -57.266]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.575}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_001032.geometry}
        material={materials["Material.315"]}
        position={[-60.447, 0.168, -57.266]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.575}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.building_bridge_003003.geometry}
        material={materials["Material.196"]}
        position={[82.539, 15, -47.104]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_030005.geometry}
        material={materials["Material.196"]}
        position={[23.006, 0.15, -25.844]}
        rotation={[0, -1.515, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001035.geometry}
        material={materials["Material.196"]}
        position={[21.252, 0.221, -25.99]}
        rotation={[0, -0.972, 0]}
        scale={0.733}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001036.geometry}
        material={materials["Material.196"]}
        position={[21.498, 0.228, -24.315]}
        rotation={[0, -1.462, 0]}
        scale={0.733}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001037.geometry}
        material={materials["Material.196"]}
        position={[22.906, 0.228, -24.076]}
        rotation={[0, -1.395, 0]}
        scale={0.733}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001038.geometry}
        material={materials["Material.196"]}
        position={[22.981, 1.42, -24.1]}
        rotation={[0, 0.104, 0]}
        scale={0.733}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001039.geometry}
        material={materials["Material.196"]}
        position={[24.029, 0.228, 24.947]}
        rotation={[0, -1.462, 0]}
        scale={0.733}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001040.geometry}
        material={materials["Material.196"]}
        position={[23.677, 0.228, 23.602]}
        rotation={[0, -1.175, 0]}
        scale={0.733}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001041.geometry}
        material={materials["Material.196"]}
        position={[23.955, 1.42, 24.314]}
        rotation={[0, -0.104, 0]}
        scale={0.733}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001042.geometry}
        material={materials["Material.196"]}
        position={[22.517, 0.228, 24.56]}
        rotation={[0, 0.265, 0]}
        scale={0.733}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_003072.geometry}
        material={materials["Material.319"]}
        position={[-86.595, 0.147, -9.503]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_003073.geometry}
        material={materials["Material.200"]}
        position={[-86.595, 0.147, -78.584]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_003074.geometry}
        material={materials["Material.200"]}
        position={[-86.595, 0.147, -62.584]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_003075.geometry}
        material={materials["Material.320"]}
        position={[-12.828, 0.147, 6.329]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_003076.geometry}
        material={materials["Material.321"]}
        position={[3.172, 0.147, 68]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_003077.geometry}
        material={materials["Material.196"]}
        position={[99.172, 0.147, 51.478]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_003078.geometry}
        material={materials["Material.196"]}
        position={[3.172, 0.147, -64.404]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_003081.geometry}
        material={materials["Material.196"]}
        position={[99.172, 0.147, -64.404]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_003082.geometry}
        material={materials["Material.196"]}
        position={[3.172, 0.147, -16.404]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_003083.geometry}
        material={materials["Material.196"]}
        position={[3.172, 0.147, -0.404]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_003086.geometry}
        material={materials["Material.196"]}
        position={[-12.828, 0.147, -9.498]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_003087.geometry}
        material={materials["Material.196"]}
        position={[3.172, 0.147, 51.577]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_002017.geometry}
        material={materials["Material.212"]}
        position={[-86.581, 0.147, -9.659]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_002019.geometry}
        material={materials["Material.196"]}
        position={[3.172, 0.147, -64.404]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_002020.geometry}
        material={materials["Material.323"]}
        position={[99.184, 0.147, 52.014]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_002021.geometry}
        material={materials["Material.214"]}
        position={[99.184, 0.147, -64.404]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001374.geometry}
        material={materials["Material.325"]}
        position={[-28.828, 0.147, 2.331]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001375.geometry}
        material={materials["Material.326"]}
        position={[-98.559, 0.147, -57.486]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001378.geometry}
        material={materials["Material.329"]}
        position={[-90.595, 0.147, -38.584]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001379.geometry}
        material={materials["Material.200"]}
        position={[-75.545, 0.147, -74.584]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 2.762]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001380.geometry}
        material={materials["Material.200"]}
        position={[-64.195, 0.147, -62.184]}
        scale={[1, 1, 3.175]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001381.geometry}
        material={materials["Material.200"]}
        position={[-75.545, 0.147, -49.784]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 2.762]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001382.geometry}
        material={materials["Material.200"]}
        position={[-86.895, 0.147, -57.884]}
        scale={[1, 1, 2.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001383.geometry}
        material={materials["Material.200"]}
        position={[-77.493, 0.147, -49.484]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.333, 0.5, 3.28]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001384.geometry}
        material={materials["Material.330"]}
        position={[111.183, 0.147, -27.092]}
        scale={[1, 1, 5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001385.geometry}
        material={materials["Material.331"]}
        position={[-0.836, 0.147, 95.769]}
        scale={[1, 1, 9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001387.geometry}
        material={materials["Material.333"]}
        position={[-0.828, 0.147, 40.105]}
        scale={[1, 1, 5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001388.geometry}
        material={materials["Material.198"]}
        position={[-72.711, 0.134, -10.105]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.333, 0.761, 1.091]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001389.geometry}
        material={materials["Material.334"]}
        position={[23.172, 0.147, 63.998]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001391.geometry}
        material={materials["Material.200"]}
        position={[-77.493, 0.147, -14.582]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.333, 0.5, 3.28]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001392.geometry}
        material={materials["Material.336"]}
        position={[103.159, 0.147, -27.243]}
        scale={[1, 1, 5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001393.geometry}
        material={materials["Material.196"]}
        position={[88.338, 0.147, 55.478]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 2.709]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001394.geometry}
        material={materials["Material.196"]}
        position={[77.804, 0.147, 36.494]}
        scale={[1, 1, 1.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001395.geometry}
        material={materials["Material.337"]}
        position={[23.172, 0.147, 55.586]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001396.geometry}
        material={materials["Material.196"]}
        position={[23.172, 0.147, -76.404]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001397.geometry}
        material={materials["Material.338"]}
        position={[87.116, 0.147, -76.404]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001398.geometry}
        material={materials["Material.196"]}
        position={[60.204, 0.147, 36.494]}
        scale={[1, 1, 1.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001399.geometry}
        material={materials["Material.196"]}
        position={[84.903, 0.147, -68.404]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 3.567]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001400.geometry}
        material={materials["Material.196"]}
        position={[70.933, 0.147, -64.474]}
        scale={[1, 1, 0.907]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001401.geometry}
        material={materials["Material.196"]}
        position={[66.686, 0.147, -64.474]}
        scale={[1, 1, 0.907]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001402.geometry}
        material={materials["Material.196"]}
        position={[35.079, 0.147, -68.404]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 7.977]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001406.geometry}
        material={materials["Material.196"]}
        position={[-0.828, 0.147, 19.596]}
        scale={[1, 1, 5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001407.geometry}
        material={materials["Material.196"]}
        position={[-0.828, 0.147, -40.404]}
        scale={[1, 1, 6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001409.geometry}
        material={materials["Material.196"]}
        position={[3.174, 0.147, 12.419]}
        scale={[1, 1, 4.131]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001410.geometry}
        material={materials["Material.196"]}
        position={[13.872, 0.147, 29.242]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 2.825]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001411.geometry}
        material={materials["Material.196"]}
        position={[25.472, 0.147, 25.731]}
        scale={[1, 1, 0.953]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001412.geometry}
        material={materials["Material.196"]}
        position={[26.467, 0.147, 22.22]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 0.174]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001413.geometry}
        material={materials["Material.196"]}
        position={[25.472, 0.147, 7.444]}
        scale={[1, 1, 2.707]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001414.geometry}
        material={materials["Material.196"]}
        position={[25.472, 0.147, -18.382]}
        scale={[1, 1, 2.837]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001415.geometry}
        material={materials["Material.196"]}
        position={[25.472, 0.147, -36.564]}
        scale={[1, 1, 0.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001416.geometry}
        material={materials["Material.196"]}
        position={[26.467, 0.147, 17.973]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 0.174]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001417.geometry}
        material={materials["Material.196"]}
        position={[26.467, 0.147, -3.085]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 0.174]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001418.geometry}
        material={materials["Material.196"]}
        position={[26.467, 0.147, -7.333]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 0.174]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001419.geometry}
        material={materials["Material.196"]}
        position={[26.467, 0.147, -29.431]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 0.174]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001420.geometry}
        material={materials["Material.196"]}
        position={[26.467, 0.147, -33.678]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 0.174]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001421.geometry}
        material={materials["Material.196"]}
        position={[2.872, 0.147, -26.227]}
        scale={[1, 1, 3.381]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001422.geometry}
        material={materials["Material.196"]}
        position={[14.172, 0.147, -40.05]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 2.9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001424.geometry}
        material={materials["Material.196"]}
        position={[98.762, 0.147, -31.024]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.333, 0.5, 2.827]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001425.geometry}
        material={materials["Material.196"]}
        position={[96.075, 0.147, -19.817]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.333, 0.5, 0.647]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001426.geometry}
        material={materials["Material.196"]}
        position={[93.588, 0.147, -13.488]}
        scale={[0.333, 0.5, 1.557]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001427.geometry}
        material={materials["Material.196"]}
        position={[98.323, 0.147, -7.358]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.333, 0.5, 1.159]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001428.geometry}
        material={materials["Material.196"]}
        position={[98.323, 0.147, -3.348]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.333, 0.5, 1.159]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001429.geometry}
        material={materials["Material.196"]}
        position={[93.588, 0.147, 2.781]}
        scale={[0.333, 0.5, 1.557]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001430.geometry}
        material={materials["Material.196"]}
        position={[96.17, 0.147, 9.111]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.333, 0.5, 0.671]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001431.geometry}
        material={materials["Material.196"]}
        position={[98.752, 0.147, 20.409]}
        scale={[0.333, 0.5, 2.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001432.geometry}
        material={materials["Material.196"]}
        position={[88.304, 0.147, 31.508]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.333, 0.5, 2.587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001433.geometry}
        material={materials["Material.196"]}
        position={[88.461, 0.147, -42.23]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.333, 0.5, 2.55]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001434.geometry}
        material={materials["Material.196"]}
        position={[78.359, 0.147, -45.35]}
        scale={[0.333, 0.5, 0.755]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001435.geometry}
        material={materials["Material.196"]}
        position={[90.778, 0.147, -48.27]}
        rotation={[0, -1.571, 0]}
        scale={[0.333, 0.5, 3.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001436.geometry}
        material={materials["Material.196"]}
        position={[78.328, 0.147, -64.573]}
        scale={[0.333, 0.5, 0.957]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001437.geometry}
        material={materials["Material.196"]}
        position={[74.439, 0.147, -60.845]}
        rotation={[0, 1.571, 0]}
        scale={[0.333, 0.5, 0.947]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001438.geometry}
        material={materials["Material.196"]}
        position={[53.383, 0.147, -60.845]}
        rotation={[0, 1.571, 0]}
        scale={[0.333, 0.5, 3.396]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001439.geometry}
        material={materials["Material.196"]}
        position={[39.899, 0.147, -51.545]}
        scale={[0.333, 0.5, 2.34]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001440.geometry}
        material={materials["Material.196"]}
        position={[49.614, 0.147, -42.283]}
        rotation={[0, 1.571, 0]}
        scale={[0.333, 0.5, 2.404]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001441.geometry}
        material={materials["Material.196"]}
        position={[59.128, 0.147, -41.504]}
        scale={[0.333, 0.5, 0.17]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001442.geometry}
        material={materials["Material.196"]}
        position={[43.056, 0.147, -40.925]}
        rotation={[0, 1.571, 0]}
        scale={[0.333, 0.5, 3.993]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001443.geometry}
        material={materials["Material.196"]}
        position={[43.056, 0.147, -21.856]}
        rotation={[0, 1.571, 0]}
        scale={[0.333, 0.5, 3.993]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001444.geometry}
        material={materials["Material.196"]}
        position={[27.184, 0.147, -37.108]}
        scale={[0.333, 0.5, 0.929]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001445.geometry}
        material={materials["Material.196"]}
        position={[27.184, 0.147, -25.836]}
        scale={[0.333, 0.5, 0.97]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001446.geometry}
        material={materials["Material.196"]}
        position={[59.128, 0.147, -18.274]}
        scale={[0.333, 0.5, 0.921]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001447.geometry}
        material={materials["Material.196"]}
        position={[43.056, 0.147, -14.692]}
        rotation={[0, 1.571, 0]}
        scale={[0.333, 0.5, 3.993]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001448.geometry}
        material={materials["Material.196"]}
        position={[27.184, 0.147, -10.827]}
        scale={[0.333, 0.5, 0.941]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001449.geometry}
        material={materials["Material.196"]}
        position={[27.184, 0.147, 0.522]}
        scale={[0.333, 0.5, 0.973]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001450.geometry}
        material={materials["Material.196"]}
        position={[43.231, 0.147, 4.315]}
        rotation={[0, 1.571, 0]}
        scale={[0.333, 0.5, 3.987]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001451.geometry}
        material={materials["Material.196"]}
        position={[59.079, 0.147, 7.605]}
        scale={[0.333, 0.5, 0.797]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001452.geometry}
        material={materials["Material.196"]}
        position={[43.031, 0.147, 10.693]}
        rotation={[0, 1.571, 0]}
        scale={[0.333, 0.5, 3.987]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001453.geometry}
        material={materials["Material.196"]}
        position={[27.184, 0.147, 14.524]}
        scale={[0.333, 0.5, 0.933]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001454.geometry}
        material={materials["Material.196"]}
        position={[27.184, 0.147, 25.884]}
        scale={[0.333, 0.5, 0.986]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001455.geometry}
        material={materials["Material.341"]}
        position={[77.804, 0.147, 48.963]}
        scale={[1, 1, 1.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001456.geometry}
        material={materials["Material.196"]}
        position={[59.079, 0.147, 29.787]}
        scale={[0.333, 0.5, 0.222]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001457.geometry}
        material={materials["Material.196"]}
        position={[59.583, 0.147, 30.576]}
        rotation={[0, 1.571, 0]}
        scale={[0.333, 0.5, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001460.geometry}
        material={materials["Material.344"]}
        position={[-28.828, 0.147, -5.498]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001461.geometry}
        material={materials["Material.345"]}
        position={[-28.828, 0.147, -59.826]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001462.geometry}
        material={materials["Material.196"]}
        position={[31.571, 0.134, -58.483]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.333, 0.761, 2.428]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001463.geometry}
        material={materials["Material.196"]}
        position={[35.955, 0.134, -58.483]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.333, 0.761, 2.428]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001464.geometry}
        material={materials["Material.196"]}
        position={[33.763, 0.134, -43.574]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.333, 0.761, 1.198]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001465.geometry}
        material={materials["Material.196"]}
        position={[29.07, 0.134, -46.223]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.333, 0.761, 0.637]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001466.geometry}
        material={materials["Material.196"]}
        position={[30.421, 0.134, -48.672]}
        rotation={[0, 1.571, 0]}
        scale={[0.333, 0.761, 0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001467.geometry}
        material={materials["Material.196"]}
        position={[38.455, 0.134, -46.223]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.333, 0.761, 0.637]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001468.geometry}
        material={materials["Material.196"]}
        position={[37.105, 0.134, -48.672]}
        rotation={[0, 1.571, 0]}
        scale={[0.333, 0.761, 0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001469.geometry}
        material={materials["Material.346"]}
        position={[103.159, 0.147, 31.487]}
        scale={[1, 1, 5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001470.geometry}
        material={materials["Material.347"]}
        position={[-8.828, 0.147, 91.259]}
        scale={[1, 1, 9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001480.geometry}
        material={materials["Material.199"]}
        position={[-57.844, 0.147, 86.088]}
        rotation={[0, 1.571, 0]}
        scale={[0.333, 0.5, 9.311]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001482.geometry}
        material={materials["Material.199"]}
        position={[-94.985, 0.147, 76.006]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.333, 0.5, 2.495]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001483.geometry}
        material={materials["Material.199"]}
        position={[-79.003, 0.147, 66.125]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.333, 0.5, 3.971]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001485.geometry}
        material={materials["Material.199"]}
        position={[-20.698, 0.147, 76.007]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.333, 0.5, 2.495]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001486.geometry}
        material={materials["Material.199"]}
        position={[-27.737, 0.147, 66.125]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.333, 0.5, 1.735]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001498.geometry}
        material={materials["Material.202"]}
        position={[52.002, 0.134, 30.162]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.333, 0.761, 2.483]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001499.geometry}
        material={materials["Material.350"]}
        position={[60.204, 0.147, 50.026]}
        scale={[1, 1, 1.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001500.geometry}
        material={materials["Material.202"]}
        position={[42.895, 0.134, 40.193]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.333, 0.761, 2.302]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001501.geometry}
        material={materials["Material.202"]}
        position={[33.588, 0.134, 35.606]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.333, 0.761, 1.172]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001502.geometry}
        material={materials["Material.202"]}
        position={[40.601, 0.134, 30.82]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.333, 0.761, 1.778]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.barrier_003017.geometry}
        material={materials["Material.353"]}
        position={[3.646, 0, -3.782]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.barrier_003018.geometry}
        material={materials["Material.354"]}
        position={[3.646, 0, -12.492]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.barrier_003019.geometry}
        material={materials["Material.355"]}
        position={[59.056, 0, 40.046]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.barrier_003020.geometry}
        material={materials["Material.356"]}
        position={[59.056, 0, 48.661]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.barrier_002019.geometry}
        material={materials["Material.196"]}
        position={[24.806, 0.182, -13.16]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.barrier_002020.geometry}
        material={materials["Material.196"]}
        position={[24.806, 0.182, -23.16]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.barrier_002021.geometry}
        material={materials["Material.196"]}
        position={[24.806, 0.182, 12.637]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.barrier_002022.geometry}
        material={materials["Material.196"]}
        position={[24.806, 0.182, 2.637]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.barrier_002023.geometry}
        material={materials["Material.196"]}
        position={[76.544, 0.182, 36.63]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.barrier_002024.geometry}
        material={materials["Material.196"]}
        position={[61.629, 0.182, 36.63]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.barrel_013002.geometry}
        material={materials["Color.026"]}
        position={[-10.873, 0.07, -42.539]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.215}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.apartment_002005.geometry}
        material={materials["Material.200"]}
        position={[-77.36, 0.064, -33.223]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.apartment_001002.geometry}
        material={materials["Material.315"]}
        position={[-40.388, 0.195, -50.344]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011762.geometry}
        material={materials["Material.357"]}
        position={[-78.368, 0.221, 19.662]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011778.geometry}
        material={materials["Material.357"]}
        position={[-96.112, 0.221, 29.977]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011779.geometry}
        material={materials["Material.357"]}
        position={[-93.362, 0.221, 27.477]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011780.geometry}
        material={materials["Material.357"]}
        position={[-93.362, 0.221, 24.977]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011781.geometry}
        material={materials["Material.357"]}
        position={[-96.112, 0.221, 24.977]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011782.geometry}
        material={materials["Material.357"]}
        position={[-96.112, 0.221, 22.477]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011783.geometry}
        material={materials["Material.357"]}
        position={[-93.362, 0.221, 19.977]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011784.geometry}
        material={materials["Material.357"]}
        position={[-96.112, 0.221, 19.977]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011789.geometry}
        material={materials["Material.357"]}
        position={[-93.362, 0.221, 17.477]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011790.geometry}
        material={materials["Material.357"]}
        position={[-96.112, 0.221, 17.477]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011791.geometry}
        material={materials["Material.357"]}
        position={[-96.112, 0.221, 14.977]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011824.geometry}
        material={materials["Material.366"]}
        position={[-96.112, 0.221, 27.446]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011844.geometry}
        material={materials["Material.381"]}
        position={[-93.374, 0.221, 57.298]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011845.geometry}
        material={materials["Material.382"]}
        position={[-96.124, 0.221, 54.759]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011846.geometry}
        material={materials["Material.383"]}
        position={[-93.374, 0.221, 52.279]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011848.geometry}
        material={materials["Material.385"]}
        position={[-93.374, 0.221, 44.808]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011849.geometry}
        material={materials["Material.385"]}
        position={[-96.124, 0.221, 44.808]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011850.geometry}
        material={materials["Material.386"]}
        position={[-96.124, 0.221, 39.765]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011851.geometry}
        material={materials["Material.387"]}
        position={[-96.124, 0.221, 34.743]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011876.geometry}
        material={materials["Material.393"]}
        position={[-96.124, 0.221, 32.273]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011877.geometry}
        material={materials["Material.393"]}
        position={[-93.374, 0.221, 32.273]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011878.geometry}
        material={materials["Material.393"]}
        position={[-93.374, 0.221, 34.773]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011879.geometry}
        material={materials["Material.393"]}
        position={[-96.124, 0.221, 37.273]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011880.geometry}
        material={materials["Material.393"]}
        position={[-93.374, 0.221, 37.273]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011881.geometry}
        material={materials["Material.393"]}
        position={[-93.374, 0.221, 39.773]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011882.geometry}
        material={materials["Material.393"]}
        position={[-96.124, 0.221, 42.273]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011883.geometry}
        material={materials["Material.393"]}
        position={[-93.374, 0.221, 42.273]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011884.geometry}
        material={materials["Material.393"]}
        position={[-96.124, 0.221, 47.273]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011885.geometry}
        material={materials["Material.393"]}
        position={[-93.374, 0.221, 47.273]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011886.geometry}
        material={materials["Material.393"]}
        position={[-93.374, 0.221, 49.773]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011887.geometry}
        material={materials["Material.393"]}
        position={[-96.124, 0.221, 52.273]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011888.geometry}
        material={materials["Material.393"]}
        position={[-93.374, 0.221, 54.773]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011889.geometry}
        material={materials["Material.393"]}
        position={[-96.124, 0.221, 57.273]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011890.geometry}
        material={materials["Material.393"]}
        position={[-96.124, 0.221, 59.773]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011891.geometry}
        material={materials["Material.393"]}
        position={[-93.374, 0.221, 59.773]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_002066.geometry}
        material={materials["Material.357"]}
        position={[-87.194, 0.14, 18.268]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_005614.geometry}
        material={materials["Material.395"]}
        position={[-76.751, 0, 6.604]}
        rotation={[2.79, -1.448, 2.749]}
        scale={1.297}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_004914.geometry}
        material={materials["Material.395"]}
        position={[-25.015, 0, 4.868]}
        rotation={[3.118, 0.761, 3.137]}
        scale={1.478}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002098.geometry}
        material={materials["Material.396"]}
        position={[-94.301, -1.897, 5.652]}
        rotation={[-3.07, 0.208, 3.126]}
        scale={1.34}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011482.geometry}
        material={materials["Material.395"]}
        position={[-81.274, 0, 5.838]}
        rotation={[-0.006, 0.189, 0.032]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011483.geometry}
        material={materials["Material.395"]}
        position={[-88.27, 0, 5.452]}
        rotation={[-3.136, -0.102, -3.11]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011484.geometry}
        material={materials["Material.395"]}
        position={[-28.879, 0, 5.141]}
        rotation={[-0.539, 1.503, 0.543]}
        scale={1.164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002329.geometry}
        material={nodes.fence_002329.material}
        position={[-97.272, 1.459, 10.018]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002330.geometry}
        material={nodes.fence_002330.material}
        position={[-76.868, 1.459, 10.018]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002331.geometry}
        material={nodes.fence_002331.material}
        position={[-81.995, 1.459, 10.018]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002332.geometry}
        material={nodes.fence_002332.material}
        position={[-87.145, 1.459, 10.018]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002333.geometry}
        material={nodes.fence_002333.material}
        position={[-92.295, 1.459, 10.018]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002397.geometry}
        material={nodes.fence_002397.material}
        position={[-92.295, 1.459, 63.616]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002398.geometry}
        material={nodes.fence_002398.material}
        position={[-87.145, 1.459, 63.616]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002399.geometry}
        material={nodes.fence_002399.material}
        position={[-81.995, 1.459, 63.616]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002400.geometry}
        material={nodes.fence_002400.material}
        position={[-76.868, 1.459, 63.616]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002401.geometry}
        material={nodes.fence_002401.material}
        position={[-97.272, 1.459, 63.616]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002409.geometry}
        material={nodes.fence_002409.material}
        position={[-74.151, 1.459, 17.545]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002411.geometry}
        material={nodes.fence_002411.material}
        position={[-74.151, 1.459, 12.567]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002413.geometry}
        material={nodes.fence_002413.material}
        position={[-74.151, 1.459, 27.904]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002414.geometry}
        material={nodes.fence_002414.material}
        position={[-74.151, 1.459, 22.754]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001335.geometry}
        material={nodes.fence_001335.material}
        position={[-99.835, -0.019, 10.019]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001336.geometry}
        material={nodes.fence_001336.material}
        position={[-74.175, -0.019, 10]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001337.geometry}
        material={nodes.fence_001337.material}
        position={[-79.431, -0.019, 10.019]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001338.geometry}
        material={nodes.fence_001338.material}
        position={[-84.558, -0.019, 10.019]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001339.geometry}
        material={nodes.fence_001339.material}
        position={[-89.708, -0.019, 10.019]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001340.geometry}
        material={nodes.fence_001340.material}
        position={[-94.858, -0.019, 10.019]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001407.geometry}
        material={nodes.fence_001407.material}
        position={[-94.858, -0.019, 63.617]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001408.geometry}
        material={nodes.fence_001408.material}
        position={[-89.708, -0.019, 63.617]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001409.geometry}
        material={nodes.fence_001409.material}
        position={[-84.558, -0.019, 63.617]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001410.geometry}
        material={nodes.fence_001410.material}
        position={[-79.431, -0.019, 63.617]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001412.geometry}
        material={nodes.fence_001412.material}
        position={[-99.835, -0.019, 63.617]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001421.geometry}
        material={nodes.fence_001421.material}
        position={[-74.149, -0.019, 15.13]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001422.geometry}
        material={nodes.fence_001422.material}
        position={[-74.149, -0.019, 30.467]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001423.geometry}
        material={nodes.fence_001423.material}
        position={[-74.149, -0.019, 25.317]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001424.geometry}
        material={nodes.fence_001424.material}
        position={[-74.149, -0.019, 20.19]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_006029.geometry}
        material={materials["Material.393"]}
        position={[-96.128, 0.177, 51.129]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_005030.geometry}
        material={materials["Material.357"]}
        position={[-96.114, 0.177, 21.219]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_004076.geometry}
        material={materials["Material.393"]}
        position={[-96.219, 0.177, 61.376]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_004078.geometry}
        material={materials["Material.357"]}
        position={[-96.008, 0.177, 13.41]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002102.geometry}
        material={materials["Material.393"]}
        position={[-96.129, 0.177, 33.45]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002103.geometry}
        material={materials["Material.393"]}
        position={[-96.129, 0.177, 43.785]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002105.geometry}
        material={materials["Material.357"]}
        position={[-96.117, 0.177, 26.154]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002106.geometry}
        material={materials["Material.357"]}
        position={[-96.117, 0.177, 18.702]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002107.geometry}
        material={materials["Material.357"]}
        position={[-96.117, 0.177, 16.149]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002110.geometry}
        material={materials["Material.393"]}
        position={[-96.293, 0.177, 58.551]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cabin_001012.geometry}
        material={materials["Material.397"]}
        position={[-78.631, 0, 42.917]}
        rotation={[-Math.PI, 0.007, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005093.geometry}
        material={materials["Material.398"]}
        position={[-72.258, -0.108, 58.055]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005094.geometry}
        material={materials["Material.399"]}
        position={[-72.33, -0.039, 17.603]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_003027.geometry}
        material={materials["Material.400"]}
        position={[-72.293, -0.001, 26.635]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001377.geometry}
        material={materials["Material.402"]}
        position={[-92.425, 0.107, 11.013]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 9.985]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001405.geometry}
        material={materials["Material.404"]}
        position={[-74.952, 0.107, 20.488]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 2.294]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001423.geometry}
        material={materials["Material.405"]}
        position={[-74.952, 0.107, 58.597]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 5.084]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.barrier_003021.geometry}
        material={materials["Material.406"]}
        position={[-75.811, 0, 31.147]}
        rotation={[Math.PI, -1.564, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.barrier_003022.geometry}
        material={materials["Material.407"]}
        position={[-75.868, 0, 39.857]}
        rotation={[0, 1.564, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_051070.geometry}
        material={materials["Material.408"]}
        position={[-86.907, 0.028, 36.984]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
        scale={[338.089, 0.056, 19.819]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001376.geometry}
        material={materials["Material.415"]}
        position={[366.506, 0.147, 219.703]}
        scale={[1, 1, 1.314]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011894.geometry}
        material={materials["Material.419"]}
        position={[-93.362, 0.221, 14.975]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011895.geometry}
        material={materials["Material.420"]}
        position={[-93.362, 0.221, 22.486]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011896.geometry}
        material={materials["Material.421"]}
        position={[-93.362, 0.221, 29.986]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_003063.geometry}
        material={materials["Material.427"]}
        position={[51.172, 0.237, 59.771]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_051061.geometry}
        material={materials["Material.437"]}
        position={[-36.518, 0.237, 34.337]}
        rotation={[-Math.PI, 0, 0]}
        scale={[167.499, 0.056, 13.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011909.geometry}
        material={materials["Material.437"]}
        position={[-50.618, 0.26, 10.437]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011910.geometry}
        material={materials["Material.437"]}
        position={[-47.868, 0.26, 10.437]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011911.geometry}
        material={materials["Material.437"]}
        position={[-50.618, 0.26, 12.937]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011912.geometry}
        material={materials["Material.437"]}
        position={[-47.868, 0.26, 12.937]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011913.geometry}
        material={materials["Material.437"]}
        position={[-50.618, 0.26, 15.437]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011914.geometry}
        material={materials["Material.437"]}
        position={[-47.868, 0.26, 15.437]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011915.geometry}
        material={materials["Material.437"]}
        position={[-50.618, 0.26, 17.937]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011916.geometry}
        material={materials["Material.437"]}
        position={[-47.868, 0.26, 17.937]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011917.geometry}
        material={materials["Material.437"]}
        position={[-50.618, 0.26, 22.928]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011918.geometry}
        material={materials["Material.437"]}
        position={[-47.868, 0.26, 20.437]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011919.geometry}
        material={materials["Material.437"]}
        position={[-47.868, 0.26, 22.937]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011920.geometry}
        material={materials["Material.437"]}
        position={[-50.618, 0.26, 25.437]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011921.geometry}
        material={materials["Material.437"]}
        position={[-50.618, 0.26, 27.937]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011922.geometry}
        material={materials["Material.437"]}
        position={[-47.868, 0.26, 27.937]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011923.geometry}
        material={materials["Material.437"]}
        position={[-50.618, 0.26, 30.437]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011924.geometry}
        material={materials["Material.437"]}
        position={[-50.618, 0.26, 32.937]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011925.geometry}
        material={materials["Material.437"]}
        position={[-47.868, 0.26, 32.937]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011926.geometry}
        material={materials["Material.437"]}
        position={[-47.868, 0.26, 35.437]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011927.geometry}
        material={materials["Material.437"]}
        position={[-50.618, 0.26, 37.937]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011928.geometry}
        material={materials["Material.437"]}
        position={[-47.868, 0.26, 37.937]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011929.geometry}
        material={materials["Material.437"]}
        position={[-50.618, 0.26, 40.437]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011930.geometry}
        material={materials["Material.437"]}
        position={[-47.868, 0.26, 40.437]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011931.geometry}
        material={materials["Material.437"]}
        position={[-50.618, 0.26, 58.237]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011932.geometry}
        material={materials["Material.437"]}
        position={[-47.868, 0.26, 58.237]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011933.geometry}
        material={materials["Material.437"]}
        position={[-50.618, 0.26, 55.737]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011934.geometry}
        material={materials["Material.437"]}
        position={[-47.868, 0.26, 55.737]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011935.geometry}
        material={materials["Material.437"]}
        position={[-50.618, 0.26, 53.237]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011936.geometry}
        material={materials["Material.437"]}
        position={[-47.868, 0.26, 53.237]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011940.geometry}
        material={materials["Material.437"]}
        position={[-22.418, 0.26, 35.554]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011941.geometry}
        material={materials["Material.437"]}
        position={[-25.168, 0.26, 35.554]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011942.geometry}
        material={materials["Material.437"]}
        position={[-22.418, 0.26, 33.054]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011943.geometry}
        material={materials["Material.437"]}
        position={[-25.168, 0.26, 33.054]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011944.geometry}
        material={materials["Material.437"]}
        position={[-22.418, 0.26, 30.554]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011945.geometry}
        material={materials["Material.437"]}
        position={[-22.418, 0.26, 28.054]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011946.geometry}
        material={materials["Material.437"]}
        position={[-25.168, 0.26, 28.054]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011947.geometry}
        material={materials["Material.437"]}
        position={[-25.168, 0.26, 25.554]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011948.geometry}
        material={materials["Material.437"]}
        position={[-22.418, 0.26, 23.054]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011949.geometry}
        material={materials["Material.437"]}
        position={[-25.168, 0.26, 23.054]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011950.geometry}
        material={materials["Material.437"]}
        position={[-25.168, 0.26, 20.554]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011951.geometry}
        material={materials["Material.437"]}
        position={[-25.168, 0.26, 18.054]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011952.geometry}
        material={materials["Material.437"]}
        position={[-22.418, 0.26, 15.554]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011953.geometry}
        material={materials["Material.437"]}
        position={[-25.168, 0.26, 15.554]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011956.geometry}
        material={materials["Material.437"]}
        position={[-22.418, 0.26, 10.554]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011957.geometry}
        material={materials["Material.437"]}
        position={[-25.168, 0.26, 10.554]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011961.geometry}
        material={materials["Material.437"]}
        position={[-25.168, 0.26, 53.054]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011962.geometry}
        material={materials["Material.437"]}
        position={[-22.418, 0.26, 55.554]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011963.geometry}
        material={materials["Material.437"]}
        position={[-25.168, 0.26, 55.554]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011964.geometry}
        material={materials["Material.437"]}
        position={[-25.168, 0.26, 58.054]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011965.geometry}
        material={materials["Material.437"]}
        position={[-42.618, 0.26, 15.437]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011966.geometry}
        material={materials["Material.437"]}
        position={[-39.868, 0.26, 12.937]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011967.geometry}
        material={materials["Material.437"]}
        position={[-42.618, 0.26, 12.937]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011968.geometry}
        material={materials["Material.437"]}
        position={[-39.868, 0.26, 10.437]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011969.geometry}
        material={materials["Material.437"]}
        position={[-42.618, 0.26, 10.437]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011970.geometry}
        material={materials["Material.437"]}
        position={[-39.868, 0.26, 30.437]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011971.geometry}
        material={materials["Material.437"]}
        position={[-42.618, 0.26, 27.937]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011972.geometry}
        material={materials["Material.437"]}
        position={[-42.618, 0.26, 25.437]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011973.geometry}
        material={materials["Material.437"]}
        position={[-39.868, 0.26, 45.478]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011974.geometry}
        material={materials["Material.437"]}
        position={[-42.618, 0.26, 45.478]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011975.geometry}
        material={materials["Material.437"]}
        position={[-39.868, 0.26, 42.978]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011976.geometry}
        material={materials["Material.437"]}
        position={[-42.618, 0.26, 42.978]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011977.geometry}
        material={materials["Material.437"]}
        position={[-39.868, 0.26, 40.478]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011978.geometry}
        material={materials["Material.437"]}
        position={[-42.618, 0.26, 40.478]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011979.geometry}
        material={materials["Material.437"]}
        position={[-33.169, 0.26, 40.465]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011980.geometry}
        material={materials["Material.437"]}
        position={[-33.169, 0.26, 42.965]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011981.geometry}
        material={materials["Material.437"]}
        position={[-30.419, 0.26, 42.965]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011982.geometry}
        material={materials["Material.437"]}
        position={[-33.169, 0.26, 45.465]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011983.geometry}
        material={materials["Material.437"]}
        position={[-33.169, 0.26, 25.464]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011984.geometry}
        material={materials["Material.437"]}
        position={[-30.419, 0.26, 27.964]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011985.geometry}
        material={materials["Material.437"]}
        position={[-33.169, 0.26, 30.464]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011986.geometry}
        material={materials["Material.437"]}
        position={[-33.169, 0.26, 10.423]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011987.geometry}
        material={materials["Material.437"]}
        position={[-33.169, 0.26, 12.923]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011988.geometry}
        material={materials["Material.437"]}
        position={[-30.419, 0.26, 12.923]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011989.geometry}
        material={materials["Material.437"]}
        position={[-33.169, 0.26, 15.423]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_002041.geometry}
        material={materials["Material.437"]}
        position={[-36.533, 0.179, 20.502]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_002042.geometry}
        material={materials["Material.437"]}
        position={[-36.533, 0.179, 35.88]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_002043.geometry}
        material={materials["Material.437"]}
        position={[-36.533, 0.179, 51.259]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cargo_car_001018.geometry}
        material={materials["Material.437"]}
        position={[-23.482, 0.216, 34.295]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_006024.geometry}
        material={materials["Material.437"]}
        position={[-50.655, 0.216, 11.58]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_006025.geometry}
        material={materials["Material.437"]}
        position={[-33.138, 0.216, 41.729]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_005024.geometry}
        material={materials["Material.437"]}
        position={[-22.418, 0.216, 51.873]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_005025.geometry}
        material={materials["Material.437"]}
        position={[-50.703, 0.216, 26.568]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_005029.geometry}
        material={materials["Material.437"]}
        position={[-22.514, 0.216, 19.351]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_004041.geometry}
        material={materials["Material.437"]}
        position={[-22.524, 0.216, 59.379]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_004056.geometry}
        material={materials["Material.437"]}
        position={[-50.731, 0.216, 8.914]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_004057.geometry}
        material={materials["Material.437"]}
        position={[-50.603, 0.216, 29.031]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_004058.geometry}
        material={materials["Material.437"]}
        position={[-39.649, 0.216, 26.806]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_004059.geometry}
        material={materials["Material.437"]}
        position={[-50.451, 0.216, 59.67]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_004060.geometry}
        material={materials["Material.437"]}
        position={[-33.16, 0.216, 14.179]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_004061.geometry}
        material={materials["Material.437"]}
        position={[-39.801, 0.216, 44.29]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_003010.geometry}
        material={materials["Material.437"]}
        position={[-39.925, 0.216, 31.834]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002059.geometry}
        material={materials["Material.437"]}
        position={[-22.415, 0.216, 56.942]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002080.geometry}
        material={materials["Material.437"]}
        position={[-22.415, 0.216, 54.39]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002082.geometry}
        material={materials["Material.437"]}
        position={[-50.683, 0.216, 14.078]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002083.geometry}
        material={materials["Material.437"]}
        position={[-33.167, 0.216, 44.227]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002084.geometry}
        material={materials["Material.437"]}
        position={[-50.618, 0.216, 19.221]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002085.geometry}
        material={materials["Material.437"]}
        position={[-50.649, 0.216, 39.234]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002086.geometry}
        material={materials["Material.437"]}
        position={[-50.488, 0.216, 57.007]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002087.geometry}
        material={materials["Material.437"]}
        position={[-22.601, 0.216, 21.903]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002088.geometry}
        material={materials["Material.437"]}
        position={[-22.514, 0.216, 9.268]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005079.geometry}
        material={materials["Material.437"]}
        position={[-36.518, 0.207, 27.953]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005080.geometry}
        material={materials["Material.437"]}
        position={[-36.518, 0.207, 43.069]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005081.geometry}
        material={materials["Material.437"]}
        position={[-36.518, 0.207, 12.837]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001404.geometry}
        material={materials["Material.437"]}
        position={[-46.227, 0.147, 61.137]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.91]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001476.geometry}
        material={materials["Material.437"]}
        position={[-27.178, 0.147, 61.137]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.852]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001489.geometry}
        material={materials["Material.437"]}
        position={[-36.218, 0.147, 7.537]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 4.262]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001488.geometry}
        material={materials["Material.441"]}
        position={[-19.468, 0.147, 9.637]}
        scale={[1, 1, 0.45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011991.geometry}
        material={materials["Material.444"]}
        position={[-16.175, 0.26, 45.489]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_003061.geometry}
        material={materials["Material.443"]}
        position={[-3.775, 0.237, 45.489]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_001027.geometry}
        material={materials["Material.445"]}
        position={[-4.954, 0.237, 45.393]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_001125.geometry}
        material={materials["Material.443"]}
        position={[-16.79, 0.005, 40.539]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_001126.geometry}
        material={materials["Material.443"]}
        position={[-16.79, 0.005, 50.658]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_002096.geometry}
        material={materials["Material.443"]}
        position={[-11.963, -0.669, 33.583]}
        rotation={[-3.111, 0.892, -3.116]}
        scale={1.329}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fir_0011485.geometry}
        material={materials["Material.443"]}
        position={[-13.024, 0, 53.313]}
        rotation={[-3.136, -0.276, -3.109]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_003080.geometry}
        material={materials["Material.446"]}
        position={[-12.809, 0.147, 53.695]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_003084.geometry}
        material={materials["Material.447"]}
        position={[-12.759, 0.147, 37.272]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001479.geometry}
        material={materials["Material.450"]}
        position={[-19.468, 0.147, 30.014]}
        scale={[1, 1, 0.45]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001490.geometry}
        material={materials["Material.451"]}
        position={[-53.568, 0.147, 24.479]}
        scale={[1, 1, 4.311]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011992.geometry}
        material={materials["Material.452"]}
        position={[-50.618, 0.26, 20.437]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011993.geometry}
        material={materials["Material.453"]}
        position={[-47.868, 0.26, 25.437]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011994.geometry}
        material={materials["Material.454"]}
        position={[-50.618, 0.26, 35.462]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011995.geometry}
        material={materials["Material.455"]}
        position={[-47.868, 0.26, 43.141]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011996.geometry}
        material={materials["Material.455"]}
        position={[-50.618, 0.26, 43.155]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011997.geometry}
        material={materials["Material.455"]}
        position={[-47.868, 0.26, 48.196]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011998.geometry}
        material={materials["Material.455"]}
        position={[-50.618, 0.26, 48.196]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0011999.geometry}
        material={materials["Material.455"]}
        position={[-47.868, 0.26, 50.696]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012000.geometry}
        material={materials["Material.455"]}
        position={[-50.618, 0.26, 50.696]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012001.geometry}
        material={materials["Material.456"]}
        position={[-50.618, 0.26, 45.696]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012002.geometry}
        material={materials["Material.456"]}
        position={[-47.868, 0.26, 45.696]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012003.geometry}
        material={materials["Material.457"]}
        position={[-30.419, 0.26, 40.469]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012004.geometry}
        material={materials["Material.458"]}
        position={[-30.419, 0.26, 45.503]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012005.geometry}
        material={materials["Material.459"]}
        position={[-47.868, 0.26, 30.431]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012006.geometry}
        material={materials["Material.460"]}
        position={[-39.868, 0.26, 15.46]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012007.geometry}
        material={materials["Material.461"]}
        position={[-30.419, 0.26, 10.428]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012008.geometry}
        material={materials["Material.462"]}
        position={[-30.419, 0.26, 15.433]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012009.geometry}
        material={materials["Material.463"]}
        position={[-39.868, 0.26, 27.925]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012010.geometry}
        material={materials["Material.464"]}
        position={[-39.868, 0.26, 25.389]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012011.geometry}
        material={materials["Material.465"]}
        position={[-42.618, 0.26, 30.455]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012012.geometry}
        material={materials["Material.466"]}
        position={[-22.418, 0.26, 58.034]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012013.geometry}
        material={materials["Material.467"]}
        position={[-22.418, 0.26, 53.064]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012014.geometry}
        material={materials["Material.468"]}
        position={[-33.169, 0.26, 27.998]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012015.geometry}
        material={materials["Material.469"]}
        position={[-30.419, 0.26, 25.453]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012016.geometry}
        material={materials["Material.470"]}
        position={[-30.419, 0.26, 30.461]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012017.geometry}
        material={materials["Material.471"]}
        position={[-22.418, 0.26, 25.571]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012018.geometry}
        material={materials["Material.472"]}
        position={[-25.168, 0.26, 30.545]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012019.geometry}
        material={materials["Material.473"]}
        position={[-25.168, 0.26, 13.015]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012020.geometry}
        material={materials["Material.473"]}
        position={[-22.418, 0.26, 13.015]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012021.geometry}
        material={materials["Material.474"]}
        position={[-22.418, 0.26, 20.545]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012022.geometry}
        material={materials["Material.475"]}
        position={[-22.418, 0.26, 18.036]}
        rotation={[0, -1.571, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001357.geometry}
        material={materials["Material.476"]}
        position={[-3.775, 0.147, 49.689]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001390.geometry}
        material={materials["Material.477"]}
        position={[-3.775, 0.147, 41.263]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_034061.geometry}
        material={materials["Material.478"]}
        position={[-36.582, 0.119, 63.703]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[23.85, 0.033, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001487.geometry}
        material={materials["Material.479"]}
        position={[-34.576, 0.147, 64.812]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.333, 0.5, 0.303]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001494.geometry}
        material={materials["Material.480"]}
        position={[-38.592, 0.147, 64.812]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.333, 0.5, 0.303]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001408.geometry}
        material={materials["Material.482"]}
        position={[-8.828, 0.147, -56.404]}
        scale={[1, 1, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001403.geometry}
        material={materials["Material.483"]}
        position={[-8.828, 0.147, 43.896]}
        scale={[1, 1, 9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012023.geometry}
        material={materials["Material.484"]}
        position={[-96.124, 0.221, 49.773]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001481.geometry}
        material={materials["Material.485"]}
        position={[-99.044, 0.107, 58.597]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1, 1, 5.084]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001491.geometry}
        material={materials["Material.486"]}
        position={[-92.425, 0.107, 62.875]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 9.985]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012025.geometry}
        material={materials["Material.489"]}
        position={[-80.616, 0.221, 18.955]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012026.geometry}
        material={materials["Material.490"]}
        position={[-80.616, 0.221, 26.465]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012029.geometry}
        material={materials["Material.492"]}
        position={[-77.866, 0.221, 13.994]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012030.geometry}
        material={materials["Material.493"]}
        position={[-77.866, 0.221, 26.464]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012031.geometry}
        material={materials["Material.493"]}
        position={[-77.866, 0.221, 23.964]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012032.geometry}
        material={materials["Material.493"]}
        position={[-80.616, 0.221, 23.964]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012033.geometry}
        material={materials["Material.493"]}
        position={[-77.866, 0.221, 21.464]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012034.geometry}
        material={materials["Material.493"]}
        position={[-80.616, 0.221, 21.464]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012035.geometry}
        material={materials["Material.493"]}
        position={[-77.866, 0.221, 18.964]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012036.geometry}
        material={materials["Material.493"]}
        position={[-77.866, 0.221, 16.464]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012037.geometry}
        material={materials["Material.493"]}
        position={[-80.616, 0.221, 16.464]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012038.geometry}
        material={materials["Material.493"]}
        position={[-80.616, 0.221, 13.964]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_005031.geometry}
        material={materials["Material.493"]}
        position={[-77.864, 0.177, 20.221]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_004063.geometry}
        material={materials["Material.493"]}
        position={[-77.97, 0.177, 28.031]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002081.geometry}
        material={materials["Material.493"]}
        position={[-77.861, 0.177, 25.291]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002089.geometry}
        material={materials["Material.493"]}
        position={[-77.861, 0.177, 22.739]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002100.geometry}
        material={materials["Material.493"]}
        position={[-77.861, 0.177, 15.286]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012039.geometry}
        material={materials["Material.494"]}
        position={[-80.616, 0.221, 47.08]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012040.geometry}
        material={materials["Material.494"]}
        position={[-80.616, 0.221, 49.58]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012041.geometry}
        material={materials["Material.494"]}
        position={[-77.866, 0.221, 49.58]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012042.geometry}
        material={materials["Material.494"]}
        position={[-77.866, 0.221, 52.08]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012043.geometry}
        material={materials["Material.494"]}
        position={[-80.616, 0.221, 54.58]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012044.geometry}
        material={materials["Material.494"]}
        position={[-77.866, 0.221, 54.58]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012045.geometry}
        material={materials["Material.494"]}
        position={[-80.616, 0.221, 57.08]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012046.geometry}
        material={materials["Material.494"]}
        position={[-77.866, 0.221, 57.08]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012047.geometry}
        material={materials["Material.494"]}
        position={[-77.866, 0.221, 59.58]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012048.geometry}
        material={materials["Material.495"]}
        position={[-77.866, 0.221, 47.11]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 1.325]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012049.geometry}
        material={materials["Material.496"]}
        position={[-80.616, 0.221, 59.582]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012050.geometry}
        material={materials["Material.497"]}
        position={[-80.616, 0.221, 52.071]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012051.geometry}
        material={materials["Material.498"]}
        position={[-78.368, 0.221, 52.778]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 0.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_005032.geometry}
        material={materials["Material.494"]}
        position={[-77.864, 0.177, 53.338]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_004071.geometry}
        material={materials["Material.494"]}
        position={[-77.97, 0.177, 61.147]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002101.geometry}
        material={materials["Material.494"]}
        position={[-77.861, 0.177, 48.403]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002104.geometry}
        material={materials["Material.494"]}
        position={[-77.861, 0.177, 55.855]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.car_002108.geometry}
        material={materials["Material.494"]}
        position={[-77.861, 0.177, 58.408]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bush_005082.geometry}
        material={materials["Material.499"]}
        position={[-72.258, -0.108, 46.416]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002283.geometry}
        material={nodes.fence_002283.material}
        position={[-74.151, 1.459, 55.896]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002284.geometry}
        material={nodes.fence_002284.material}
        position={[-74.151, 1.459, 61.046]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002285.geometry}
        material={nodes.fence_002285.material}
        position={[-74.151, 1.459, 50.687]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001289.geometry}
        material={nodes.fence_001289.material}
        position={[-74.149, -0.019, 53.332]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001290.geometry}
        material={nodes.fence_001290.material}
        position={[-74.149, -0.019, 58.459]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001291.geometry}
        material={nodes.fence_001291.material}
        position={[-74.149, -0.019, 63.609]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002287.geometry}
        material={nodes.fence_002287.material}
        position={[-74.151, 1.459, 45.607]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001292.geometry}
        material={nodes.fence_001292.material}
        position={[-74.149, -0.019, 48.17]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001293.geometry}
        material={nodes.fence_001293.material}
        position={[-74.149, -0.019, 43.044]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002286.geometry}
        material={nodes.fence_002286.material}
        position={[-99.828, 1.459, 45.607]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002288.geometry}
        material={nodes.fence_002288.material}
        position={[-99.828, 1.459, 50.687]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002289.geometry}
        material={nodes.fence_002289.material}
        position={[-99.828, 1.459, 61.046]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002290.geometry}
        material={nodes.fence_002290.material}
        position={[-99.828, 1.459, 55.896]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001294.geometry}
        material={nodes.fence_001294.material}
        position={[-99.826, -0.019, 43.044]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001295.geometry}
        material={nodes.fence_001295.material}
        position={[-99.826, -0.019, 48.17]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001296.geometry}
        material={nodes.fence_001296.material}
        position={[-99.826, -0.019, 58.459]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001297.geometry}
        material={nodes.fence_001297.material}
        position={[-99.826, -0.019, 53.332]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002291.geometry}
        material={nodes.fence_002291.material}
        position={[-99.828, 1.459, 35.44]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002292.geometry}
        material={nodes.fence_002292.material}
        position={[-99.828, 1.459, 40.59]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002293.geometry}
        material={nodes.fence_002293.material}
        position={[-99.828, 1.459, 30.231]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002294.geometry}
        material={nodes.fence_002294.material}
        position={[-99.828, 1.459, 25.152]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001298.geometry}
        material={nodes.fence_001298.material}
        position={[-99.826, -0.019, 32.876]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001299.geometry}
        material={nodes.fence_001299.material}
        position={[-99.826, -0.019, 38.003]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001300.geometry}
        material={nodes.fence_001300.material}
        position={[-99.826, -0.019, 27.715]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001301.geometry}
        material={nodes.fence_001301.material}
        position={[-99.826, -0.019, 22.588]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002297.geometry}
        material={nodes.fence_002297.material}
        position={[-99.828, 1.459, 20.08]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002298.geometry}
        material={nodes.fence_002298.material}
        position={[-99.828, 1.459, 14.93]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001304.geometry}
        material={nodes.fence_001304.material}
        position={[-99.826, -0.019, 17.493]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001495.geometry}
        material={materials["Material.507"]}
        position={[-48.916, 0.147, 66.125]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.333, 0.5, 2.606]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_002035.geometry}
        material={materials["Material.508"]}
        position={[-71.035, 0.26, 27.398]}
        rotation={[Math.PI, -1.396, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_002036.geometry}
        material={materials["Material.508"]}
        position={[-71.035, 0.26, 27.398]}
        rotation={[0, -0.873, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_004018.geometry}
        material={materials["Material.508"]}
        position={[-71.01, 0.237, 27.359]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_003067.geometry}
        material={materials["Material.509"]}
        position={[-63.035, 0.237, -56.654]}
        scale={[1, 1, 8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_003085.geometry}
        material={materials["Material.508"]}
        position={[-71.157, 0.147, 27.227]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_002018.geometry}
        material={materials["Material.510"]}
        position={[-70.745, 0.147, 27.764]}
        rotation={[0, -1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_003071.geometry}
        material={materials["Material.511"]}
        position={[-59.244, 0.237, 35.511]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001484.geometry}
        material={materials["Material.512"]}
        position={[-59.244, 0.147, 31.234]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001492.geometry}
        material={materials["Material.513"]}
        position={[-59.244, 0.147, 39.772]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_001028.geometry}
        material={materials["Material.514"]}
        position={[-63.043, 0.237, -1.456]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_003088.geometry}
        material={materials["Material.515"]}
        position={[-71.164, 0.147, 6.334]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_003089.geometry}
        material={materials["Material.516"]}
        position={[-54.741, 0.147, 6.327]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001493.geometry}
        material={materials["Material.517"]}
        position={[3.021, 0.147, 2.331]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[1, 1, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001496.geometry}
        material={materials["Material.518"]}
        position={[-58.74, 0.147, 43.946]}
        scale={[1, 1, 9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.border_001503.geometry}
        material={materials["Material.519"]}
        position={[-67.158, 0.147, 43.938]}
        scale={[1, 1, 9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012052.geometry}
        material={materials["Material.520"]}
        position={[-62.803, 0.26, 21.674]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012053.geometry}
        material={materials["Material.520"]}
        position={[-62.803, 0.26, 15.174]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012054.geometry}
        material={materials["Material.520"]}
        position={[-62.803, 0.26, 8.674]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_002064.geometry}
        material={materials["Material.521"]}
        position={[-87.194, 0.14, 26.671]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_002067.geometry}
        material={materials["Material.522"]}
        position={[-87.194, 0.14, 48.964]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flashlight_002069.geometry}
        material={materials["Material.524"]}
        position={[-87.194, 0.14, 57.805]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012055.geometry}
        material={materials["Material.525"]}
        position={[-4.828, 0.26, -43.287]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_marking_0012056.geometry}
        material={materials["Material.526"]}
        position={[-4.828, 0.26, -36.667]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_003066.geometry}
        material={materials["Material.527"]}
        position={[-4.828, 0.237, -56.404]}
        scale={[1, 1, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_003058.geometry}
        material={materials["Material.528"]}
        position={[-4.828, 0.237, -2.653]}
        scale={[1, 1, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_003064.geometry}
        material={materials["Material.529"]}
        position={[-60.467, 0.237, -1.51]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1, 4]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road_003065.geometry}
        material={materials["Material.530"]}
        position={[-4.843, 0.237, 58.99]}
        scale={[1, 1, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002295.geometry}
        material={nodes.fence_002295.material}
        position={[-14.701, 1.459, -48.591]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_002296.geometry}
        material={nodes.fence_002296.material}
        position={[-14.701, 1.459, -53.711]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001302.geometry}
        material={nodes.fence_001302.material}
        position={[-14.699, -0.019, -46.028]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fence_001303.geometry}
        material={nodes.fence_001303.material}
        position={[-14.699, -0.019, -51.148]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002038.geometry}
        material={materials["Color.055"]}
        position={[-16.139, 2.243, -49.964]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002040.geometry}
        material={materials["Color.057"]}
        position={[-16.139, 1.166, -49.964]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002041.geometry}
        material={materials["Color.058"]}
        position={[-16.139, 1.705, -49.964]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002042.geometry}
        material={materials["Color.059"]}
        position={[-16.139, 1.438, -49.964]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002043.geometry}
        material={materials["Color.060"]}
        position={[-16.139, 0.629, -49.964]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002044.geometry}
        material={materials["Color.061"]}
        position={[-16.139, 0.897, -49.964]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002045.geometry}
        material={materials["Color.062"]}
        position={[-16.139, 0.358, -49.964]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002046.geometry}
        material={materials["Color.063"]}
        position={[-16.139, 0.09, -49.964]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002047.geometry}
        material={materials["Color.064"]}
        position={[-16.139, 1.972, -49.964]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002048.geometry}
        material={materials["Color.065"]}
        position={[-16.139, 1.972, -47.614]}
        rotation={[0, -0.031, 0]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002049.geometry}
        material={materials["Color.066"]}
        position={[-16.139, 0.09, -47.614]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002050.geometry}
        material={materials["Color.067"]}
        position={[-16.139, 0.358, -47.614]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002051.geometry}
        material={materials["Color.068"]}
        position={[-16.139, 0.897, -47.614]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002052.geometry}
        material={materials["Color.069"]}
        position={[-16.139, 0.629, -47.614]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002053.geometry}
        material={materials["Color.070"]}
        position={[-16.139, 1.438, -47.614]}
        rotation={[0, 0.026, 0]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002054.geometry}
        material={materials["Color.071"]}
        position={[-16.139, 1.705, -47.614]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002055.geometry}
        material={materials["Color.072"]}
        position={[-16.139, 1.166, -47.614]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002060.geometry}
        material={materials["Color.077"]}
        position={[-18.533, 1.166, -47.614]}
        rotation={[0, 0.055, 0]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002063.geometry}
        material={materials["Color.080"]}
        position={[-18.533, 0.629, -47.614]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002064.geometry}
        material={materials["Color.081"]}
        position={[-18.533, 0.897, -47.614]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002065.geometry}
        material={materials["Color.082"]}
        position={[-18.533, 0.358, -47.614]}
        rotation={[0, -0.023, 0]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002066.geometry}
        material={materials["Color.083"]}
        position={[-18.533, 0.09, -47.614]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002068.geometry}
        material={materials["Color.085"]}
        position={[-18.533, 1.972, -49.979]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002069.geometry}
        material={materials["Color.086"]}
        position={[-18.533, 0.09, -49.979]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002070.geometry}
        material={materials["Color.087"]}
        position={[-18.533, 0.358, -49.979]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002071.geometry}
        material={materials["Color.088"]}
        position={[-18.533, 0.897, -49.979]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002072.geometry}
        material={materials["Color.089"]}
        position={[-18.533, 0.629, -49.979]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002073.geometry}
        material={materials["Color.090"]}
        position={[-18.533, 1.438, -49.979]}
        rotation={[0, 0.027, 0]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002074.geometry}
        material={materials["Color.091"]}
        position={[-18.533, 1.705, -49.979]}
        rotation={[0, -0.026, 0]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002075.geometry}
        material={materials["Color.092"]}
        position={[-18.533, 1.166, -49.979]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002077.geometry}
        material={materials["Color.094"]}
        position={[-18.533, 2.243, -49.979]}
        rotation={[0, 0.132, 0]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001005.geometry}
        material={materials["Color.105"]}
        position={[-13.717, 1.01, -55.27]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001006.geometry}
        material={materials["Color.106"]}
        position={[-13.734, 1.909, -55.262]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001007.geometry}
        material={materials["Color.107"]}
        position={[-12.695, 1.909, -55.304]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001008.geometry}
        material={materials["Color.108"]}
        position={[-12.737, 1.01, -55.27]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001009.geometry}
        material={materials["Color.109"]}
        position={[-12.737, 0.056, -55.27]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001010.geometry}
        material={materials["Color.110"]}
        position={[-11.733, 0.056, -55.27]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001011.geometry}
        material={materials["Color.111"]}
        position={[-11.733, 1.01, -55.27]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001012.geometry}
        material={materials["Color.112"]}
        position={[-11.733, 1.909, -55.27]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001013.geometry}
        material={materials["Color.113"]}
        position={[-10.568, 1.909, -55.285]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001014.geometry}
        material={materials["Color.114"]}
        position={[-10.641, 1.01, -55.27]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001015.geometry}
        material={materials["Color.115"]}
        position={[-10.641, 0.056, -55.27]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001016.geometry}
        material={materials["Color.116"]}
        position={[-10.641, 0.056, -54.156]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001017.geometry}
        material={materials["Color.117"]}
        position={[-10.641, 1.01, -54.156]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001018.geometry}
        material={materials["Color.118"]}
        position={[-10.729, 1.909, -54.083]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001019.geometry}
        material={materials["Color.119"]}
        position={[-11.777, 1.909, -54.2]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001020.geometry}
        material={materials["Color.120"]}
        position={[-11.733, 1.01, -54.156]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001021.geometry}
        material={materials["Color.121"]}
        position={[-11.733, 0.056, -54.156]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001022.geometry}
        material={materials["Color.122"]}
        position={[-12.737, 0.056, -54.156]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001023.geometry}
        material={materials["Color.123"]}
        position={[-12.737, 1.01, -54.156]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001024.geometry}
        material={materials["Color.124"]}
        position={[-12.693, 1.909, -54.083]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001025.geometry}
        material={materials["Color.125"]}
        position={[-13.717, 1.909, -54.156]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001026.geometry}
        material={materials["Color.126"]}
        position={[-13.717, 1.01, -54.156]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001027.geometry}
        material={materials["Color.127"]}
        position={[-13.717, 0.056, -54.156]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001028.geometry}
        material={materials["Color.128"]}
        position={[-13.717, 0.056, -53.009]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001029.geometry}
        material={materials["Color.129"]}
        position={[-13.717, 1.01, -53.009]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001030.geometry}
        material={materials["Color.130"]}
        position={[-13.76, 1.897, -53.035]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001031.geometry}
        material={materials["Color.131"]}
        position={[-12.737, 1.909, -53.009]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001032.geometry}
        material={materials["Color.132"]}
        position={[-12.737, 1.01, -53.009]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001033.geometry}
        material={materials["Color.133"]}
        position={[-12.737, 0.056, -53.009]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001034.geometry}
        material={materials["Color.134"]}
        position={[-11.733, 0.056, -53.009]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001035.geometry}
        material={materials["Color.135"]}
        position={[-11.704, 1.01, -52.965]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001036.geometry}
        material={materials["Color.136"]}
        position={[-11.733, 1.909, -53.082]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001037.geometry}
        material={materials["Color.137"]}
        position={[-10.641, 1.909, -53.009]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001038.geometry}
        material={materials["Color.138"]}
        position={[-10.641, 1.01, -53.009]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001039.geometry}
        material={materials["Color.139"]}
        position={[-10.641, 0.056, -53.009]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001040.geometry}
        material={materials["Color.140"]}
        position={[-10.641, 0.056, -51.912]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001041.geometry}
        material={materials["Color.141"]}
        position={[-10.641, 1.01, -51.912]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001042.geometry}
        material={materials["Color.142"]}
        position={[-10.641, 1.909, -51.912]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001043.geometry}
        material={materials["Color.143"]}
        position={[-11.733, 1.909, -51.912]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001044.geometry}
        material={materials["Color.144"]}
        position={[-11.733, 1.01, -51.912]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001045.geometry}
        material={materials["Color.145"]}
        position={[-11.733, 0.056, -51.912]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001046.geometry}
        material={materials["Color.146"]}
        position={[-12.737, 0.056, -51.912]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001047.geometry}
        material={materials["Color.147"]}
        position={[-12.737, 1.01, -51.912]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001048.geometry}
        material={materials["Color.148"]}
        position={[-12.695, 1.909, -51.87]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001049.geometry}
        material={materials["Color.149"]}
        position={[-13.717, 1.909, -51.912]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001050.geometry}
        material={materials["Color.150"]}
        position={[-13.717, 1.01, -51.912]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001051.geometry}
        material={materials["Color.151"]}
        position={[-13.717, 0.056, -51.912]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001052.geometry}
        material={materials["Color.152"]}
        position={[-13.717, 0.056, -50.807]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001053.geometry}
        material={materials["Color.153"]}
        position={[-13.717, 1.01, -50.807]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001054.geometry}
        material={materials["Color.154"]}
        position={[-13.765, 1.906, -50.778]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001055.geometry}
        material={materials["Color.155"]}
        position={[-12.737, 1.909, -50.807]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001056.geometry}
        material={materials["Color.156"]}
        position={[-12.737, 1.01, -50.807]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001057.geometry}
        material={materials["Color.157"]}
        position={[-12.737, 0.056, -50.807]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001058.geometry}
        material={materials["Color.158"]}
        position={[-11.733, 0.056, -50.807]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001059.geometry}
        material={materials["Color.159"]}
        position={[-11.733, 1.01, -50.807]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001060.geometry}
        material={materials["Color.160"]}
        position={[-11.682, 1.909, -50.799]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001061.geometry}
        material={materials["Color.161"]}
        position={[-10.624, 1.909, -50.765]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001062.geometry}
        material={materials["Color.162"]}
        position={[-10.641, 1.01, -50.807]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001063.geometry}
        material={materials["Color.163"]}
        position={[-10.641, 0.056, -50.807]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001064.geometry}
        material={materials["Color.164"]}
        position={[-10.641, 0.056, -49.643]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001065.geometry}
        material={materials["Color.165"]}
        position={[-10.641, 1.019, -49.665]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001067.geometry}
        material={materials["Color.167"]}
        position={[-11.648, 1.909, -49.609]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001068.geometry}
        material={materials["Color.168"]}
        position={[-11.733, 1.01, -49.643]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001069.geometry}
        material={materials["Color.169"]}
        position={[-11.733, 0.056, -49.643]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001070.geometry}
        material={materials["Color.170"]}
        position={[-12.737, 0.056, -49.643]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001071.geometry}
        material={materials["Color.171"]}
        position={[-12.737, 1.01, -49.643]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001072.geometry}
        material={materials["Color.172"]}
        position={[-12.737, 1.909, -49.643]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001073.geometry}
        material={materials["Color.173"]}
        position={[-13.721, 1.906, -49.609]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001074.geometry}
        material={materials["Color.174"]}
        position={[-13.717, 1.01, -49.643]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001075.geometry}
        material={materials["Color.175"]}
        position={[-13.717, 0.056, -49.643]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001076.geometry}
        material={materials["Color.176"]}
        position={[-13.717, 0.056, -48.496]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001077.geometry}
        material={materials["Color.177"]}
        position={[-13.717, 1.01, -48.496]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001079.geometry}
        material={materials["Color.179"]}
        position={[-12.695, 1.904, -48.48]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001080.geometry}
        material={materials["Color.180"]}
        position={[-12.737, 1.01, -48.496]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001081.geometry}
        material={materials["Color.181"]}
        position={[-12.737, 0.056, -48.496]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001082.geometry}
        material={materials["Color.182"]}
        position={[-11.733, 0.056, -48.496]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001083.geometry}
        material={materials["Color.183"]}
        position={[-11.733, 1.013, -48.504]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001087.geometry}
        material={materials["Color.187"]}
        position={[-10.641, 0.056, -48.496]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001088.geometry}
        material={materials["Color.188"]}
        position={[-10.641, 0.056, -47.391]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001092.geometry}
        material={materials["Color.192"]}
        position={[-11.632, 1.038, -47.435]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001093.geometry}
        material={materials["Color.193"]}
        position={[-11.583, 0.097, -47.42]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001094.geometry}
        material={materials["Color.194"]}
        position={[-12.737, 0.056, -47.391]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001095.geometry}
        material={materials["Color.195"]}
        position={[-12.737, 1.01, -47.391]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001099.geometry}
        material={materials["Color.199"]}
        position={[-13.717, 0.056, -47.391]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001043.geometry}
        material={materials["Material.009"]}
        position={[-15.786, 0.077, -52.202]}
        rotation={[0, -0.043, 0]}
        scale={0.872}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001044.geometry}
        material={materials["Material.011"]}
        position={[-17.494, 0.077, -52.202]}
        scale={0.872}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001045.geometry}
        material={materials["Material.012"]}
        position={[-19.087, 0.077, -52.202]}
        scale={0.872}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001050.geometry}
        material={materials["Material.044"]}
        position={[-17.494, 1.486, -53.8]}
        rotation={[0, 0.076, 0]}
        scale={0.872}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001051.geometry}
        material={materials["Material.073"]}
        position={[-19.087, 1.486, -53.8]}
        scale={0.872}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001052.geometry}
        material={materials["Material.076"]}
        position={[-19.087, 0.077, -53.8]}
        scale={0.872}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001053.geometry}
        material={materials["Material.080"]}
        position={[-17.494, 0.077, -53.8]}
        scale={0.872}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001054.geometry}
        material={materials["Material.129"]}
        position={[-15.786, 0.077, -53.8]}
        scale={0.872}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001055.geometry}
        material={materials["Material.130"]}
        position={[-15.786, 0.077, -55.477]}
        scale={0.872}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001056.geometry}
        material={materials["Material.131"]}
        position={[-17.494, 0.077, -55.477]}
        scale={0.872}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001057.geometry}
        material={materials["Material.145"]}
        position={[-19.087, 0.077, -55.477]}
        scale={0.872}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001058.geometry}
        material={materials["Material.146"]}
        position={[-19.087, 1.486, -55.477]}
        rotation={[0, -0.002, 0]}
        scale={0.872}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001059.geometry}
        material={materials["Material.147"]}
        position={[-17.494, 1.486, -55.477]}
        scale={0.872}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001060.geometry}
        material={materials["Material.157"]}
        position={[-15.786, 1.486, -55.477]}
        rotation={[0, -0.115, 0]}
        scale={0.872}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pallet_002006.geometry}
        material={materials["Color.200"]}
        position={[-16.48, 1.046, -46.258]}
        rotation={[1.272, -0.014, 0.045]}
        scale={1.522}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001047.geometry}
        material={materials["Material.172"]}
        position={[-16.143, 1.441, -54.24]}
        rotation={[0, -0.294, 0]}
        scale={0.426}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001048.geometry}
        material={materials["Material.531"]}
        position={[-17.875, 1.441, -52.435]}
        scale={0.426}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001046.geometry}
        material={materials["Material.532"]}
        position={[-18.775, 1.441, -52.341]}
        scale={0.426}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001049.geometry}
        material={materials["Material.533"]}
        position={[-19.766, 0.131, -46.098]}
        scale={0.426}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_001061.geometry}
        material={materials["Material.534"]}
        position={[-18.941, 0.131, -46.098]}
        rotation={[0, -0.173, 0]}
        scale={0.426}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tire_001003.geometry}
        material={materials["Color.201"]}
        position={[-13.687, 0.207, -46.357]}
        rotation={[-0.049, Math.PI / 2, 0]}
        scale={1.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tires_001001.geometry}
        material={materials["Color.202"]}
        position={[-12.513, 0.056, -46.396]}
        scale={0.936}
      />
    </group>
  );

  // return (
  //   <group {...props} dispose={null}>
  //     <group rotation={[-Math.PI / 2, 0, 0]}>
  //       <group ref={receptionRef}>
  //         <mesh
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.Object_2.geometry}
  //           material={materials.Factory}
  //         />
  //         <Html
  //           wrapperClass="label"
  //           distanceFactor={8}
  //           position={[0, -10, 5]}
  //           occlude={[receptionRef]}
  //         >
  //           <button onClick={() => handleClick("hall")}>Entrée 🏡</button>
  //         </Html>
  //       </group>
  //       <group ref={(grayBuildingRef, grayBuildingRef)}>
  //         <mesh
  //           castShadow
  //           receiveShadow
  //           geometry={nodes.Object_3.geometry}
  //           material={materials.Silo}
  //         />
  //         <Html
  //           wrapperClass="label"
  //           distanceFactor={8}
  //           position={[-20, -4, 3]}
  //           occlude={[receptionRef, grayBuildingRef]}
  //         >
  //           <button onClick={() => handleClick("offices")}>Bureaux 🏭</button>
  //         </Html>
  //       </group>
  //     </group>
  //   </group>
  // );
}

useGLTF.preload("/factory.glb");
