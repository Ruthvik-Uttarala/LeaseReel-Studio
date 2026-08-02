import { portfolioIntent } from "../content/site";
import { MailtoLink } from "./MailtoLink";
import { SectionReveal } from "./SectionReveal";

export function PortfolioCTA() {
  return (
    <section className="section-shell portfolio" aria-label="Portfolio production">
      <SectionReveal>
        <div>
          <p className="eyebrow">Managing several properties?</p>
          <h2>Monthly portfolio production can follow the pilot.</h2>
          <p>After the pilot, LeaseReel can create a consistent monthly video package across your portfolio.</p>
        </div>
        <MailtoLink className="button button-secondary" intent={portfolioIntent}>
          Ask about portfolio production
        </MailtoLink>
      </SectionReveal>
    </section>
  );
}
