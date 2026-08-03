import { useState } from "react";
import { pilotIntent, site } from "../content/site";
import { MailtoLink } from "./MailtoLink";
import { SectionReveal } from "./SectionReveal";

export function FinalCTA() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard?.writeText(site.emails.hello);
    setCopied(true);
  }

  return (
    <section id="contact" className="section-shell final-cta" aria-labelledby="final-title">
      <SectionReveal>
        <div className="final-copy">
          <p className="eyebrow">Next step</p>
          <h2 id="final-title">Send one active listing. We’ll tell you whether it is a strong fit.</h2>
          <p>
            Start with the property URL. We reply with the photo checklist, production scope, and exact next step before any payment is collected.
          </p>
          <p className="confidence">No new shoot. No software to learn. No invented property features.</p>
        </div>

        <aside className="contact-card" aria-label="Start a LeaseReel pilot">
          <span className="contact-kicker">Fastest way to begin</span>
          <h3>Email one listing URL</h3>
          <a className="contact-email" href={`mailto:${site.emails.hello}`}>
            {site.emails.hello}
          </a>
          <div className="contact-steps">
            <span><strong>1</strong> Listing URL</span>
            <span><strong>2</strong> 8–15 approved photos</span>
            <span><strong>3</strong> Logo and verified facts</span>
          </div>
          <MailtoLink className="button button-primary" intent={pilotIntent}>
            Start the $149 pilot
          </MailtoLink>
          <button className="copy-button" type="button" onClick={copyEmail}>
            {copied ? "Email copied" : "Copy email address"}
          </button>
          <small>50% to begin after fit and scope are confirmed.</small>
        </aside>
      </SectionReveal>
    </section>
  );
}
