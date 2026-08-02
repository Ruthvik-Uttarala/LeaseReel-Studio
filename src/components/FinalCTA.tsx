import { FormEvent, useMemo, useState } from "react";
import { pilotIntent, site } from "../content/site";
import { MailtoLink } from "./MailtoLink";
import { SectionReveal } from "./SectionReveal";
import { createMailtoHref } from "../utils/mailto";

type PilotForm = {
  name: string;
  company: string;
  email: string;
  url: string;
  properties: string;
  notes: string;
};

const initialForm: PilotForm = {
  name: "",
  company: "",
  email: "",
  url: "",
  properties: "",
  notes: ""
};

export function FinalCTA() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const intent = useMemo(
    () => ({
      to: site.emails.hello,
      subject: pilotIntent.subject,
      body: `Name: ${form.name}\nCompany: ${form.company}\nWork email: ${form.email}\nProperty/listing URL: ${form.url}\nNumber of properties: ${form.properties}\nNotes: ${form.notes}`
    }),
    [form]
  );

  function updateField(field: keyof PilotForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCopied(false);
    if (!form.name.trim() || !form.company.trim() || !form.email.includes("@") || !form.url.trim()) {
      setError("Add your name, company, work email, and property URL before continuing.");
      return;
    }
    setError("");
    window.location.href = createMailtoHref(intent);
  }

  async function copyEmail() {
    await navigator.clipboard?.writeText(site.emails.hello);
    setCopied(true);
  }

  return (
    <section id="contact" className="section-shell final-cta" aria-labelledby="final-title">
      <SectionReveal>
        <div className="final-copy">
          <p className="eyebrow">Next step</p>
          <h2 id="final-title">Choose one active listing. We’ll turn the photos you already have into a leasing campaign.</h2>
          <p>Send the listing URL and approved photos. We’ll confirm whether the property is a strong fit before production begins.</p>
          <div className="hero-actions">
            <MailtoLink className="button button-primary" intent={pilotIntent}>
              Request a $149 pilot
            </MailtoLink>
            <a className="button button-secondary" href={`mailto:${site.emails.hello}`}>
              Email hello@leasereelstudio.com
            </a>
          </div>
          <p className="confidence">No new shoot. No software to learn. No invented property features.</p>
        </div>
        <form className="pilot-form" onSubmit={submit} noValidate>
          <h3>Continue in your email app</h3>
          <label>
            Name
            <input value={form.name} onChange={(event) => updateField("name", event.target.value)} autoComplete="name" />
          </label>
          <label>
            Company
            <input value={form.company} onChange={(event) => updateField("company", event.target.value)} autoComplete="organization" />
          </label>
          <label>
            Work email
            <input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} autoComplete="email" />
          </label>
          <label>
            Property/listing URL
            <input type="url" value={form.url} onChange={(event) => updateField("url", event.target.value)} />
          </label>
          <label>
            Number of properties
            <input value={form.properties} onChange={(event) => updateField("properties", event.target.value)} inputMode="numeric" />
          </label>
          <label>
            Notes
            <textarea value={form.notes} onChange={(event) => updateField("notes", event.target.value)} rows={3} />
          </label>
          {error ? <p className="form-error">{error}</p> : null}
          <button className="button button-primary" type="submit">
            Continue in email app
          </button>
          <button className="copy-button" type="button" onClick={copyEmail}>
            {copied ? "Email copied" : `Copy ${site.emails.hello}`}
          </button>
        </form>
      </SectionReveal>
    </section>
  );
}
