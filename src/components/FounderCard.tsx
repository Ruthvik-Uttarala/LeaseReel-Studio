import { pilotIntent, site } from "../content/site";
import { MailtoLink } from "./MailtoLink";
import { SectionReveal } from "./SectionReveal";

export function FounderCard() {
  return (
    <section className="section-shell founder" aria-labelledby="founder-title">
      <SectionReveal>
        <div>
          <p className="eyebrow">Accountability</p>
          <h2 id="founder-title">Founder-led, not passed through an anonymous production queue.</h2>
          <p>{site.founder.copy}</p>
        </div>
        <article className="founder-card">
          <div className="avatar" aria-hidden="true">R</div>
          <div>
            <h3>{site.founder.name}</h3>
            <p>{site.founder.title}</p>
            <span>{site.founder.credential}</span>
          </div>
          <a href={`mailto:${site.emails.founder}`}>{site.emails.founder}</a>
          <MailtoLink className="button button-secondary" intent={{ ...pilotIntent, to: site.emails.founder }}>
            Email Ruth directly
          </MailtoLink>
        </article>
      </SectionReveal>
    </section>
  );
}
