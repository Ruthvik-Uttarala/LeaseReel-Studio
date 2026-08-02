import { AnimatePresence, m } from "motion/react";
import { useEffect } from "react";
import { pilotIntent, site } from "../content/site";
import { MailtoLink } from "./MailtoLink";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  active: string;
};

export function MobileMenu({ open, onClose, active }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <m.div
          className="menu-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <button className="menu-backdrop" type="button" aria-label="Close menu" onClick={onClose} />
          <m.div
            id="mobile-menu"
            className="mobile-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
          >
            <div className="drawer-top">
              <strong>{site.brand}</strong>
              <button type="button" onClick={onClose} aria-label="Close menu">
                ×
              </button>
            </div>
            <nav aria-label="Mobile navigation links">
              {site.nav.map((item) => (
                <a key={item.id} className={active === item.id ? "active" : ""} href={item.href} onClick={onClose}>
                  {item.label}
                </a>
              ))}
            </nav>
            <MailtoLink className="button button-primary" intent={pilotIntent} onClick={onClose}>
              Request a $149 pilot
            </MailtoLink>
          </m.div>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
