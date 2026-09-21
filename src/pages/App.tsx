import CTA from "../Registy/Marketing/CTA";
import Statistic from "../Registy/Content/Statistic";
import { IconCard, ImageCard, ProductCard } from "../Registy/Content/Card";
import {
  statistics,
  destinations,
  coffeeServices,
  ourServices,
} from "../DummyData";
import useTheme from "../Theme/UseTheme";
import { Themes, type ThemeName } from "../Theme/theme";
import { Accordion } from "../Registy/Content/Accordion";
import { Link } from "react-router";

function App() {
  const themeSystem = useTheme();
  return (
    <div>
      <section
        className="px-20 py-20 bg-linear-to-b from-background3 to-background2"
        data-theme="Ocean"
        data-mode="dark"
      >
        <div className=" flex flex-col w-[60%] text-wrap overflow-hidden">
          <h1>RASP-UI</h1>
          <p>Rapid - Aesthetic - Scalable - Personalised</p>
          <p>
            UI system that suits all your needs and can build frontend systems{" "}
            <span className="text-color1">BLAZING</span> fast. No developer wait
            times, no stressing about theming - All encompassing UI tool
          </p>
        </div>
        <div
          className="grid grid-cols-4 mt-5 gap-0 h-fit"
          data-theme="Ocean"
          data-mode="dark"
        >
          <IconCard
            iconAlign="center"
            title="Rapid"
            miniCard
            icon="FastForward"
            className="text-center"
          ></IconCard>
          <IconCard
            iconAlign="left"
            title="Aesthetic"
            miniCard
            icon="Sparkles"
          ></IconCard>
          <IconCard
            iconAlign="left"
            title="Scalable"
            miniCard
            icon="Anvil"
          ></IconCard>
          <IconCard
            iconAlign="left"
            title="Personalised"
            miniCard
            icon="Badge"
          ></IconCard>
        </div>
      </section>
      <CTA></CTA>
      <div className="grid grid-cols-3 mx-20">
        {statistics.map((stat) => (
          <Statistic {...stat}></Statistic>
        ))}
      </div>
      <h2 className="text-center underline decoration-accent">Our Services</h2>
      <div className="grid grid-cols-3">
        {Themes.map((theme) => (
          <button
            onClick={() => {
              themeSystem.setColorScheme(theme as ThemeName);
            }}
          >
            {theme}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          themeSystem.toggleMode();
        }}
      >
        Toggle Modeee
      </button>

<div className="grid grid-cols-3 mx-auto gap-8 w-[80%] mb-10">
  {Object.entries(ourServices).map(([serviceName, service]) => (
    <ProductCard
      key={serviceName}
      title={serviceName}
      imageSrc={service.imageSrc}
      features={service.features}
      // price={service.price}
      button={service.buttonItems}
      titlePosition="top"
    />
  ))}
</div>

      {/* <div className="grid grid-cols-4 mx-10">
        {destinations.map((destination) => (
          <ImageCard {...destination} imageAspectRatio="landscape"></ImageCard>
        ))}
      </div>
      <div className="grid grid-cols-4 mx-10" data-theme="Coffee" data-mode={themeSystem.mode}>
        {coffeeServices.map((service) => (<IconCard {...service} iconAlign="center" ></IconCard>))}
      </div>
        <h2>why</h2> */}
    </div>
  );
}

export default App;
