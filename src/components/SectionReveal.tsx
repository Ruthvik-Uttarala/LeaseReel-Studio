import { m, useInView, useReducedMotion } from "motion/react";
import { ReactNode, useRef } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
};

export function SectionReveal({ children, className = "" }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <m.div
      ref={ref}
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}
