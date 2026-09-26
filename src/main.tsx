import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./pages/App.tsx";
import Coffee from "./pages/Coffee.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/services/coffee" element={<Coffee />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
