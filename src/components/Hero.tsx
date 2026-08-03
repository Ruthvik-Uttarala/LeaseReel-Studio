import { m } from "motion/react";
import { KeyboardEvent, useState } from "react";
import { pilotIntent, site } from "../content/site";
import { MagneticButton } from "./MagneticButton";
import { MailtoLink } from "./MailtoLink";

const formats = [
  {
    id: "reel",
    label: "Reel",
    ratio: "9:16",
    orientation: "vertical",
    headline: "A closer look at the stay",
    cta: "Check availability",
    meta: "20–30 sec social cut"
  },
  {
    id: "story",
    label: "Story",
    ratio: "9:16",
    orientation: "vertical",
    headline: "Now accepting bookings",
    cta: "View available dates",
    meta: "8–12 sec story cut"
  },
  {
    id: "website",
    label: "Website",
    ratio: "16:9",
    orientation: "landscape",
    headline: "See the space before you arrive",
    cta: "Explore the property",
    meta: "Landscape website cut"
  }
] as const;

export function Hero() {
  const [active, setActive] = useState(0);
  const current = formats[active];

  function onFormatKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    const last = formats.length - 1;
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? last
          : event.key === "ArrowRight"
            ? (active + 1) % formats.length
            : active === 0
              ? last
              : active - 1;

    setActive(next);
    event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  return (
    <section id="top" className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{site.hero.eyebrow}</p>
        <h1 id="hero-title">{site.hero.headline}</h1>
        <p className="hero-lede">{site.hero.copy}</p>
        <div className="hero-actions">
          <MailtoLink className="button button-primary" intent={pilotIntent}>
            Start one property — $149
          </MailtoLink>
          <MagneticButton href="#demo" variant="secondary">
            See the sample
          </MagneticButton>
        </div>
        <p className="microcopy">{site.hero.microcopy}</p>
      </div>

      <div className="hero-preview" aria-label="Interactive concept showing one property photo adapted for several publishing formats">
        <div className="hero-preview-toolbar">
          <div>
            <span className="preview-status" aria-hidden="true" />
            <strong>Sample vacation-rental campaign</strong>
          </div>
          <div className="format-switch" role="tablist" aria-label="Preview format" onKeyDown={onFormatKeyDown}>
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
