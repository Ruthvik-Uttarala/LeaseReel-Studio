import { site } from "../content/site";

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="LeaseReel product commitments">
      {site.trust.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </section>
  );
}
