import { m, useReducedMotion } from "motion/react";

type InteractivePreviewProps = {
  label: string;
  ratio: string;
};

export function InteractivePreview({ label, ratio }: InteractivePreviewProps) {
  const reduced = useReducedMotion();
  return (
    <div className={`concept-preview ${ratio.includes("16:9") ? "landscape" : "vertical"}`}>
      <span className="concept-label">Interactive concept preview</span>
      <m.div
        className="concept-still"
        animate={reduced ? undefined : { scale: [1, 1.04, 1], x: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="concept-wall" />
        <div className="concept-floor" />
        <div className="concept-window" />
        <div className="concept-sofa" />
      </m.div>
      <div className="safe-guides" aria-hidden="true" />
      <m.div
        className="concept-captions"
        animate={reduced ? undefined : { opacity: [0.72, 1, 0.72] }}
        transition={{ duration: 4.5, repeat: Infinity }}
      >
        <strong>{label}</strong>
        <span>{ratio}</span>
        <span>Approved photos only</span>
      </m.div>
    </div>
  );
}
