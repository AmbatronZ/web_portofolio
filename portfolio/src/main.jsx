import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // StrictMode dimatikan karena GSAP useLayoutEffect akan jalan 2x di dev mode
  // yang menyebabkan animasi intro dan ScrollTrigger bentrok
  <App />
);