import { site } from "../content/site";
import { PointerCard } from "./PointerCard";
import { SectionReveal } from "./SectionReveal";

export function Deliverables() {
  return (
    <section id="deliverables" className="section-shell" aria-labelledby="deliverables-title">
      <SectionReveal>
        <div className="section-heading compact">
          <p className="eyebrow">The pilot package</p>
          <h2 id="deliverables-title">Not one video. One ready-to-publish property campaign.</h2>
        </div>
        <div className="deliverable-grid">
          {site.deliverables.map((item, index) => (
            <PointerCard key={item.title} className="deliverable-card">
              <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <span className="inline-preview" aria-hidden="true" />
            </PointerCard>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
