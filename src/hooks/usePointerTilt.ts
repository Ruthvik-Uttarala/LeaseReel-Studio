import { useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { PointerEvent, useCallback } from "react";
import { useMediaQuery } from "./useMediaQuery";

export function usePointerTilt(maxRotate = 4, maxMove = 6) {
  const prefersReduced = useReducedMotion();
  const coarsePointer = useMediaQuery("(pointer: coarse)");
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 24, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 220, damping: 24, mass: 0.3 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [maxRotate, -maxRotate]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-maxRotate, maxRotate]);
  const translateX = useTransform(springX, [-0.5, 0.5], [-maxMove, maxMove]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-maxMove, maxMove]);
  const disabled = Boolean(prefersReduced || coarsePointer);

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      if (disabled) return;
      const rect = event.currentTarget.getBoundingClientRect();
      x.set((event.clientX - rect.left) / rect.width - 0.5);
      y.set((event.clientY - rect.top) / rect.height - 0.5);
      event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    },
    [disabled, x, y]
  );

  const onPointerLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return {
    disabled,
    style: disabled ? undefined : { rotateX, rotateY, x: translateX, y: translateY },
    onPointerMove,
    onPointerLeave
  };
}
