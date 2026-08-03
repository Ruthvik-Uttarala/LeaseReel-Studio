import { m, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import { pilotIntent, site } from "../content/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { MagneticButton } from "./MagneticButton";
import { MailtoLink } from "./MailtoLink";
import { MobileMenu } from "./MobileMenu";
import { Monogram } from "./Monogram";
import { createMailtoHref } from "../utils/mailto";

const sectionIds = ["demo", "package", "process", "accuracy", "faq"];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBottomCta, setShowBottomCta] = useState(false);
  const active = useActiveSection(sectionIds);
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBottomCta(window.scrollY > window.innerHeight * 0.72);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <m.div className="scroll-progress" style={{ scaleX: progressScale }} />
      <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="nav-inner">
          <a className="brand-link" href="#top" aria-label="LeaseReel Studio home">
            <Monogram />
            <span>{site.brand}</span>
          </a>
          <nav className="desktop-links" aria-label="Primary navigation">
            {site.nav.map((item) => (
              <a key={item.id} className={active === item.id ? "active" : ""} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <MailtoLink className="nav-cta" intent={pilotIntent}>
            Request a pilot
          </MailtoLink>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <span />
            <span />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} active={active} />
      <MagneticButton className={`bottom-cta ${showBottomCta ? "is-visible" : ""}`} href={pilotHref()}>
        Request a $149 pilot
      </MagneticButton>
    </>
  );
}

function pilotHref() {
  return createMailtoHref(pilotIntent);
}
