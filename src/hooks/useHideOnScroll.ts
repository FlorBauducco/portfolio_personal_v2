import { useRef, useState } from "react";
import {
  useMotionValueEvent,
  useScroll as useMotionScroll,
} from "framer-motion";

// Returns true while scrolling down (past `threshold`), false while scrolling up.
// `tolerance` ignores tiny movements so the nav doesn't flicker.
export function useHideOnScroll(threshold = 80, tolerance = 5) {
  const { scrollY } = useMotionScroll();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < threshold) {
      setHidden(false);
      lastY.current = latest;
      return;
    }

    const diff = latest - lastY.current;
    if (Math.abs(diff) < tolerance) return;

    setHidden(diff > 0);
    lastY.current = latest;
  });

  return hidden;
}
