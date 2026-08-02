import { m, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { site } from "../content/site";
import { SectionReveal } from "./SectionReveal";

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const reduced = useReducedMotion();

  return (
    <section id="process" className="section-shell process" aria-labelledby="process-title">
      <SectionReveal>
        <div className="section-heading">
          <p className="eyebrow">Process</p>
          <h2 id="process-title">From approved photos to finished campaign.</h2>
        </div>
        <div className="timeline" ref={ref}>
          <m.span
            className="timeline-line"
            initial={{ scaleX: reduced ? 1 : 0, scaleY: reduced ? 1 : 0 }}
            animate={inView ? { scaleX: 1, scaleY: 1 } : undefined}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
          {site.process.map((step, index) => (
            <article key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
