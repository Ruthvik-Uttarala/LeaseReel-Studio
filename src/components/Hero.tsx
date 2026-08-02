import { m } from "motion/react";
import { pilotIntent, site } from "../content/site";
import { usePointerTilt } from "../hooks/usePointerTilt";
import { MagneticButton } from "./MagneticButton";
import { MailtoLink } from "./MailtoLink";

export function Hero() {
  const tilt = usePointerTilt();

  return (
    <section id="top" className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{site.hero.eyebrow}</p>
        <h1 id="hero-title">{site.hero.headline}</h1>
        <p className="hero-lede">{site.hero.copy}</p>
        <div className="hero-actions">
          <MagneticButton href="#demo">Watch the sample</MagneticButton>
          <MailtoLink className="button button-secondary" intent={pilotIntent}>
            Request a $149 pilot
          </MailtoLink>
        </div>
        <p className="microcopy">{site.hero.microcopy}</p>
      </div>
      <m.div
        className="hero-visual pointer-surface"
        style={tilt.style}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
        aria-label="Concept visual showing approved listing photos becoming vertical leasing video"
      >
        <div className="photo-frame">
          <div className="window-lines" />
          <span>Approved listing photo set</span>
        </div>
        <div className="transform-rail" aria-hidden="true">
          <m.span animate={{ x: [0, 54, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        </div>
        <div className="reel-preview">
          <div className="reel-sky" />
          <div className="reel-room" />
          <div className="caption-stack">
            <strong>2 bed availability</strong>
            <span>Bright living room</span>
            <span>Schedule a tour</span>
          </div>
        </div>
        <m.span className="chip chip-one" animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          9:16
        </m.span>
        <m.span className="chip chip-two" animate={{ y: [0, 4, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>
          16:9
        </m.span>
        <span className="chip chip-three">1080p</span>
        <span className="badge badge-review">Manual accuracy review</span>
        <span className="badge badge-shoot">No new shoot</span>
      </m.div>
    </section>
  );
}
