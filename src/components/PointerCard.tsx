import { m } from "motion/react";
import { ReactNode } from "react";
import { usePointerTilt } from "../hooks/usePointerTilt";

type PointerCardProps = {
  children: ReactNode;
  className?: string;
  lift?: boolean;
  tabIndex?: number;
};

export function PointerCard({ children, className = "", lift = true, ...props }: PointerCardProps) {
  const tilt = usePointerTilt(1.5, 2);

  return (
    <m.div
      className={`pointer-card ${lift ? "pointer-card-lift" : ""} ${className}`}
      style={tilt.style}
      onPointerMove={tilt.onPointerMove}
      onPointerLeave={tilt.onPointerLeave}
      tabIndex={props.tabIndex ?? 0}
    >
      {children}
    </m.div>
  );
}
