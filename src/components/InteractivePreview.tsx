import { m, useReducedMotion } from "motion/react";
import { site } from "../content/site";

type InteractivePreviewProps = {
  label: string;
  ratio: string;
};

export function InteractivePreview({ label, ratio }: InteractivePreviewProps) {
  const reduced = useReducedMotion();
  const landscape = ratio.includes("16:9");

  return (
    <div className={`concept-preview ${landscape ? "landscape" : "vertical"}`}>
      <span className="concept-label">Interactive concept preview</span>
      <m.img
        className="concept-still"
        src={site.demo.image}
        alt={site.demo.imageAlt}
        loading="lazy"
        decoding="async"
        animate={reduced ? undefined : { scale: [1.02, 1.075, 1.02], x: landscape ? [0, -8, 0] : [0, -18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="concept-scrim" aria-hidden="true" />
      <div className="safe-guides" aria-hidden="true" />
      <m.div
        className="concept-captions"
        animate={reduced ? undefined : { y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <small>LEASE REEL · SAMPLE</small>
        <strong>{label}</strong>
        <span>{ratio}</span>
        <span>Approved photos only</span>
      </m.div>
      <div className="concept-progress" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
