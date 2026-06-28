import * as THREE from "three";

export type RobotState = "flyIn" | "idle" | "wave" | "flyOut";

export class RobotAnimator {
  private state: RobotState = "flyIn";

  stateStart = 0;

  start(state: RobotState, time: number) {
    this.state = state;
    this.stateStart = time;
  }

  update(robot: THREE.Group, elapsed: number) {
    switch (this.state) {
      case "flyIn": {
        robot.position.x += (0 - robot.position.x) * 0.045;

        robot.position.y =
          Math.sin(elapsed * 4) * 0.05;

        robot.rotation.z =
          Math.sin(elapsed * 7) * 0.08;

        robot.rotation.y = -0.45;

        break;
      }

      case "idle": {
        robot.position.x = 0;

        robot.position.y =
          Math.sin(elapsed * 2) * 0.05;

        robot.rotation.y =
          -0.45 +
          Math.sin(elapsed * 0.8) * 0.07;

        robot.rotation.z =
          Math.sin(elapsed * 1.5) * 0.02;

        break;
      }

      case "wave": {
        robot.position.x = 0;

        robot.position.y =
          Math.sin(elapsed * 2) * 0.05;

        robot.rotation.y = -0.45;

        robot.rotation.z =
          Math.sin(elapsed * 10) * 0.18;

        break;
      }

      case "flyOut": {
        robot.position.x -= 0.11;

        robot.position.y =
          Math.sin(elapsed * 5) * 0.05;

        robot.rotation.z += 0.02;

        robot.rotation.y -= 0.02;

        break;
      }
    }
  }
}