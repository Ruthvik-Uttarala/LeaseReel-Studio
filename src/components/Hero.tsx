import { m } from "motion/react";
import { useState } from "react";
import { pilotIntent, site } from "../content/site";
import { MagneticButton } from "./MagneticButton";
import { MailtoLink } from "./MailtoLink";

const formats = [
  {
    id: "reel",
    label: "Reel",
    ratio: "9:16",
    orientation: "vertical",
    headline: "A brighter way to show the space",
    cta: "Book a tour",
    meta: "20–30 sec social cut"
  },
  {
    id: "story",
    label: "Story",
    ratio: "9:16",
    orientation: "vertical",
    headline: "Now available",
    cta: "View the property",
    meta: "8–12 sec story cut"
  },
  {
    id: "website",
    label: "Website",
    ratio: "16:9",
    orientation: "landscape",
    headline: "Designed for everyday living",
    cta: "Explore availability",
    meta: "Landscape website cut"
  }
] as const;

export function Hero() {
  const [active, setActive] = useState(0);
  const current = formats[active];

  return (
    <section id="top" className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{site.hero.eyebrow}</p>
        <h1 id="hero-title">{site.hero.headline}</h1>
        <p className="hero-lede">{site.hero.copy}</p>
        <div className="hero-actions">
          <MagneticButton href="#demo">See the sample</MagneticButton>
          <MailtoLink className="button button-secondary" intent={pilotIntent}>
            Start one property — $149
          </MailtoLink>
        </div>
        <p className="microcopy">{site.hero.microcopy}</p>
      </div>

      <div className="hero-preview" aria-label="Interactive concept showing one property photo adapted for several publishing formats">
        <div className="hero-preview-toolbar">
          <div>
            <span className="preview-status" aria-hidden="true" />
            <strong>Sample property campaign</strong>
          </div>
          <div className="format-switch" role="tablist" aria-label="Preview format">
            {formats.map((format, index) => (
              <button
                key={format.id}
                id={`hero-tab-${format.id}`}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-controls="hero-format-panel"
                tabIndex={active === index ? 0 : -1}
                onClick={() => setActive(index)}
              >
                <span>{format.label}</span>
                <small>{format.ratio}</small>
              </button>
            ))}
          </div>
        </div>

        <div id="hero-format-panel" className="hero-preview-stage" role="tabpanel" aria-labelledby={`hero-tab-${current.id}`}>
          <img
            className="hero-preview-photo"
            src={site.demo.image}
            alt={site.demo.imageAlt}
            loading="eager"
            decoding="async"
          />
          <span className="source-photo-label">Approved source photo</span>
          <m.div
            key={current.id}
            className={`hero-device ${current.orientation}`}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <img src={site.demo.image} alt="" aria-hidden="true" />
            <div className="hero-device-shade" />
            <div className="hero-device-copy">
              <span>LEASE REEL · SAMPLE</span>
              <strong>{current.headline}</strong>
              <small>{current.cta}</small>
            </div>
            <div className="hero-device-timeline" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </m.div>
        </div>

        <div className="hero-preview-meta" aria-live="polite">
          <span>Licensed concept photography</span>
          <strong>{current.meta}</strong>
        </div>
      </div>
    </section>
  );
}
