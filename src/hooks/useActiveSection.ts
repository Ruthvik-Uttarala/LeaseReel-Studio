import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]): string {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      if (window.scrollY < Math.min(240, window.innerHeight * 0.3)) {
        setActiveId("");
        return;
      }

      const marker = 128;
      let next = "";

      for (const id of sectionIds) {
        const node = document.getElementById(id);
        if (!node) continue;
        if (node.getBoundingClientRect().top <= marker) next = id;
      }

      setActiveId(next);
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [sectionIds]);

  return activeId;
}
