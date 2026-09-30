import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./pages/App.tsx";
import Coffee from "./pages/coffee/Coffee.tsx";
import Gym from "./pages/Gym.tsx";
import CoffeeProduct from "./pages/coffee/CoffeeProduct.tsx";
import { NavLayout } from "./Registery/Navigation/NavLayout.tsx";
import SwitchThemeButton from "./Registery/Base/SwitchThemeButton.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>

        <Route
          element={
            <NavLayout
              services={[{ href: "/", label: "home" }]}
              logo={
                <img
                  src={"/coffee/logo transperent.png"}
                  className="w-25 invert"
                ></img>
              }
              rightSlot={<SwitchThemeButton />}
            />
          }
        >
          <Route index path="/services/coffee" element={<Coffee />}></Route>
          <Route
            path="/services/coffee/:productID"
            element={<CoffeeProduct />}
          ></Route>
        </Route>

        <Route path="/services/gym" element={<Gym />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
