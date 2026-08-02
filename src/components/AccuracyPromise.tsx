import { site } from "../content/site";
import { PointerCard } from "./PointerCard";
import { SectionReveal } from "./SectionReveal";

export function AccuracyPromise() {
  return (
    <section id="accuracy" className="section-shell accuracy" aria-labelledby="accuracy-title">
      <SectionReveal>
        <div className="accuracy-layout">
          <div>
            <p className="eyebrow">Property integrity</p>
            <h2 id="accuracy-title">Motion without make-believe.</h2>
            <p>
              Rental media must present the actual property. We use restrained AI-assisted motion and manually review every clip before delivery.
            </p>
            <p className="approval-note">Final approval remains with the property manager before publication.</p>
            <p className="ai-note">An AI-assisted production disclosure can be included in captions or descriptions upon request.</p>
          </div>
          <div className="accuracy-grid">
            {site.accuracy.map((item) => (
              <PointerCard key={item.title} className="accuracy-card">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </PointerCard>
            ))}
          </div>
        </div>
        <p className="fair-housing">
          Housing advertising, including digital and AI-assisted advertising, remains subject to Fair Housing requirements. LeaseReel does not create discriminatory audience or tenant language.
        </p>
      </SectionReveal>
    </section>
  );
}
