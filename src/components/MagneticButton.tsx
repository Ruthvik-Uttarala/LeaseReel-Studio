import { m, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { MouseEvent, ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export function MagneticButton({ children, className = "", variant = "primary", ...props }: MagneticButtonProps) {
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });
  const reduced = useReducedMotion();

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * 10);
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * 10);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <m.a
      className={`button button-${variant} ${className}`}
      style={reduced ? undefined : { x, y }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </m.a>
  );
}
