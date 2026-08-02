import { pilotIntent, site } from "../content/site";
import { MailtoLink } from "./MailtoLink";
import { SectionReveal } from "./SectionReveal";

export function PricingCard() {
  return (
    <section id="package" className="section-shell pricing-section" aria-labelledby="pricing-title">
      <SectionReveal>
        <div className="pricing-layout">
          <div className="section-heading">
            <p className="eyebrow">Simple pilot</p>
            <h2 id="pricing-title">Start with one active property.</h2>
          </div>
          <article className="pricing-card">
            <div className="pricing-top">
              <div>
                <h3>{site.pricing.title}</h3>
                <p>{site.pricing.subline}</p>
              </div>
              <strong>{site.price}</strong>
            </div>
            <ul>
              {site.pricing.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="payment-line">{site.pricing.payment}</p>
            <MailtoLink className="button button-primary" intent={pilotIntent}>
              Request the $149 pilot
            </MailtoLink>
            <p className="microcopy">No recurring contract required for the pilot.</p>
          </article>
        </div>
      </SectionReveal>
    </section>
  );
}
