import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

import {
  RobotAnimator,
  type RobotState,
} from "./RobotAnimations";

type Props = {
  state: RobotState;
};

export default function Robot({
  state,
}: Props) {

  const { scene } =
    useGLTF("/models/robot.glb");

  const group =
    useRef<THREE.Group>(null);

  const animator =
    useMemo(() => new RobotAnimator(), []);

  const lastState =
    useRef<RobotState>("flyIn");

  useEffect(() => {

    if (lastState.current !== state) {

      animator.start(
        state,
        performance.now() / 1000
      );

      lastState.current = state;
    }

  }, [state, animator]);

  useEffect(() => {

    if (!group.current) return;

    group.current.position.set(
      -8,
      0,
      0
    );

  }, []);

  useFrame(({ clock }) => {

    if (!group.current) return;

    animator.update(
      group.current,
      clock.elapsedTime
    );

  });

  return (
    <group ref={group}>
      <primitive
        object={scene}
        scale={0.28}
        rotation={[0, -0.45, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/robot.glb");