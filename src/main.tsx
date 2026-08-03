import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import App from "./App";
import "./styles/global.css";
import "./styles/premium.css";
import "./styles/hierarchy-fix.css";
import "./styles/framer-port.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <App />
      </LazyMotion>
    </MotionConfig>
  </StrictMode>
);
