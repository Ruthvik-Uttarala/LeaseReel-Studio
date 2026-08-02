import { site } from "../content/site";
import { SectionReveal } from "./SectionReveal";

export function Audience() {
  return (
    <section id="audience" className="section-shell audience" aria-labelledby="audience-title">
      <SectionReveal>
        <div className="section-heading">
          <p className="eyebrow">Fit</p>
          <h2 id="audience-title">Built for teams that market properties repeatedly.</h2>
          <p>The best fit is a team with recurring vacancies, usable photography, and more listings than time for content production.</p>
        </div>
        <div className="audience-list">
          {site.audience.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p className="not-for">
          Not designed for tenant screening, leasing representation, applicant communication, or property-management operations.
        </p>
      </SectionReveal>
    </section>
  );
}
