import { Canvas } from "@react-three/fiber";
import Robot from "./Robot";
import type { RobotState } from "./RobotAnimations";

type Props = {
  state: RobotState;
};

export default function RobotScene({
  state,
}: Props) {
  return (
    <Canvas
      camera={{
        position: [0, 0.5, 5],
        fov: 30,
      }}
    >
      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <pointLight
        position={[0, 3, 3]}
        intensity={20}
        color="#b98cff"
      />

      <Robot state={state} />
    </Canvas>
  );
}