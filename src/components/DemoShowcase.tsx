import { AnimatePresence, LayoutGroup, m } from "motion/react";
import { KeyboardEvent, useRef, useState } from "react";
import { site } from "../content/site";
import { DemoPlayer } from "./DemoPlayer";
import { SectionReveal } from "./SectionReveal";

export function DemoShowcase() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const current = site.demo.tabs[active];

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const last = site.demo.tabs.length - 1;
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? last
          : event.key === "ArrowRight"
            ? (active + 1) % (last + 1)
            : active === 0
              ? last
              : active - 1;
    setActive(next);
    refs.current[next]?.focus();
  }

  return (
    <section id="demo" className="section-shell demo-section" aria-labelledby="demo-title">
      <SectionReveal>
        <div className="section-heading">
          <p className="eyebrow">Format preview</p>
          <h2 id="demo-title">{site.demo.heading}</h2>
          <p>{site.demo.copy}</p>
        </div>
        <LayoutGroup>
          <div className="demo-grid">
            <div className="tabs-panel">
              <div className="tabs" role="tablist" aria-label="Demo formats" onKeyDown={onKeyDown}>
                {site.demo.tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    ref={(node) => {
                      refs.current[index] = node;
                    }}
                    type="button"
                    role="tab"
                    aria-selected={active === index}
                    aria-controls={`panel-${tab.id}`}
                    id={`tab-${tab.id}`}
                    tabIndex={active === index ? 0 : -1}
                    onClick={() => setActive(index)}
                  >
                    {active === index ? <m.span className="tab-indicator" layoutId="active-tab" /> : null}
                    <span>{tab.label}</span>
                    <small>{tab.ratio}</small>
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <m.div
                  key={current.id}
                  id={`panel-${current.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${current.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="tab-copy"
                >
                  <h3>{current.label}</h3>
                  <p>{current.duration}</p>
                  <ul>
                    {current.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </m.div>
              </AnimatePresence>
            </div>
            <DemoPlayer tab={current} active />
          </div>
        </LayoutGroup>
        <div className="demo-proof-row" aria-label="Sample disclosure summary">
          <span>Click a format to change the framing</span>
          <span>Licensed concept photography</span>
          <span>No client work is claimed</span>
        </div>
        <p className="disclosure">{site.demo.disclosure}</p>
      </SectionReveal>
    </section>
  );
}
