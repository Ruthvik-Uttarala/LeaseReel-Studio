import { AnimatePresence, m } from "motion/react";
import { useState } from "react";
import { site } from "../content/site";
import { SectionReveal } from "./SectionReveal";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-shell faq" aria-labelledby="faq-title">
      <SectionReveal>
        <div className="section-heading">
          <p className="eyebrow">Questions</p>
          <h2 id="faq-title">What property teams usually ask first.</h2>
        </div>
        <div className="faq-list">
          {site.faq.map((item, index) => {
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            const isOpen = open === index;
            return (
              <article key={item.question} className="faq-item">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <m.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="faq-panel"
                    >
                      <p>{item.answer}</p>
                    </m.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </SectionReveal>
    </section>
  );
}
