import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource/martian-mono/400.css";
import "@fontsource/martian-mono/600.css";
import "@fontsource/martian-mono/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
