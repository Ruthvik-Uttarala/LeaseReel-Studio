import { AnimatePresence, m } from "motion/react";
import { useState } from "react";
import { site } from "../content/site";
import { useEscapeClose } from "../hooks/useEscapeClose";
import { Monogram } from "./Monogram";

type LegalModal = "photo" | "privacy" | null;

export function Footer() {
  const [modal, setModal] = useState<LegalModal>(null);
  useEscapeClose(Boolean(modal), () => setModal(null));

  const legalTitle = modal === "photo" ? "Photo-rights policy" : "Privacy";
  const legalCopy = modal === "photo" ? site.legal.photoRights : site.legal.privacy;

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <a className="brand-link" href="#top">
          <Monogram />
          <span>{site.brand}</span>
        </a>
        <p>Media-production services for rental properties</p>
        <div className="footer-links" aria-label="Footer links">
          <a href="#accuracy">Accuracy</a>
          <button type="button" onClick={() => setModal("photo")}>
            Photo-rights policy
          </button>
          <button type="button" onClick={() => setModal("privacy")}>
            Privacy
          </button>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-contact">
          <a href={`mailto:${site.emails.hello}`}>{site.emails.hello}</a>
          <a href={`mailto:${site.emails.founder}`}>{site.emails.founder}</a>
          <span>© 2026 LeaseReel Studio</span>
        </div>
      </div>
      <AnimatePresence>
        {modal ? (
          <m.div className="modal-layer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="modal-backdrop" type="button" aria-label="Close legal information" onClick={() => setModal(null)} />
            <m.div
              className="legal-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="legal-title"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
            >
              <div className="drawer-top">
                <h2 id="legal-title">{legalTitle}</h2>
                <button type="button" onClick={() => setModal(null)} aria-label="Close">
                  ×
                </button>
              </div>
              <p>{legalCopy}</p>
            </m.div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </footer>
  );
}
