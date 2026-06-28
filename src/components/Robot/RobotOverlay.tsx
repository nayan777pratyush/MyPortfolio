import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RobotScene from "./RobotScene";
import type { RobotState } from "./RobotAnimations";

type Props = {
  visible: boolean;
  leaving: boolean;
};

export default function RobotOverlay({ visible, leaving }: Props) {
  const [robotState, setRobotState] = useState<RobotState>("flyIn");
  const prevVisible = useRef(false);

  useEffect(() => {
    if (!visible) return;

    // Only reset to flyIn when visibility transitions false → true
    if (!prevVisible.current) {
      // Schedule it as a microtask so it's not synchronous in the effect body
      const t = setTimeout(() => setRobotState("flyIn"), 0);
      prevVisible.current = true;

      const idle     = setTimeout(() => setRobotState("idle"),   2500);
      const wave     = setTimeout(() => setRobotState("wave"),   4500);
      const backIdle = setTimeout(() => setRobotState("idle"),   6200);

      return () => {
        clearTimeout(t);
        clearTimeout(idle);
        clearTimeout(wave);
        clearTimeout(backIdle);
        prevVisible.current = false;
      };
    }
  }, [visible]);

useEffect(() => {
  if (!leaving) return;
  const t = setTimeout(() => setRobotState("flyOut"), 0);
  return () => clearTimeout(t);
}, [leaving]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: -1700, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -1700, opacity: 0 }}
          transition={{ duration: 2.7, ease: "easeInOut" }}
          style={{
            position: "fixed",
            right: 25,
            bottom: 120,
            width: 150,
            height: 150,
            pointerEvents: "none",
            zIndex: 99999,
          }}
        >
          <RobotScene state={robotState} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}