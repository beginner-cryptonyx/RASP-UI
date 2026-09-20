import CTA from "./Registy/Marketing/CTA";
import Statistic from "./Registy/Content/Statistic";
import { IconCard, ImageCard } from "./Registy/Content/Card";
import { statistics, destinations, coffeeServices } from "./DummyData";
import useTheme from "./Theme/UseTheme";
import {  Themes, type ThemeName  } from "./Theme/theme";
import { Accordion } from "./Registy/Content/Accordion";

function App() {
  const themeSystem = useTheme();
  return (
    <div>
      <h1>Welcome to the EVERYTHING WEBSITE</h1>
      <CTA></CTA>
      <div className="grid grid-cols-3 ">
        {statistics.map((stat) => (
          <Statistic {...stat}></Statistic>
        ))}
      </div>
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

      <div className="grid grid-cols-4 mx-10">
        {destinations.map((destination) => (
          <ImageCard {...destination}></ImageCard>
        ))}
      </div>
      <div className="grid grid-cols-4 mx-10" data-theme="Coffee" data-mode={themeSystem.mode}>
        {coffeeServices.map((service) => (<IconCard {...service} ></IconCard>))}
      </div>
        <h2>why</h2>
      <Accordion children={"Ad in labore sit excepteur ullamco exercitation anim tempor sint eiusmod mollit minim culpa proident. Qui culpa dolor ipsum Lorem non veniam. Dolore Lorem ea labore adipisicing anim non cupidatat veniam ex eu aliquip ullamco qui ut. Magna irure consequat cupidatat velit et labore. Excepteur irure proident dolor qui esse velit ex quis tempor consectetur et. Ad ut laborum sunt adipisicing elit ipsum elit magna consectetur consequat exercitation proident irure. Dolor quis anim mollit exercitation laboris duis do qui exercitation."} title="Why sell coffee?"></Accordion>
      <Accordion children={"Ad in labore sit excepteur ullamco exercitation anim tempor sint eiusmod mollit minim culpa proident. Qui culpa dolor ipsum Lorem non veniam. Dolore Lorem ea labore adipisicing anim non cupidatat veniam ex eu aliquip ullamco qui ut. Magna irure consequat cupidatat velit et labore. Excepteur irure proident dolor qui esse velit ex quis tempor consectetur et. Ad ut laborum sunt adipisicing elit ipsum elit magna consectetur consequat exercitation proident irure. Dolor quis anim mollit exercitation laboris duis do qui exercitation."} title="Why sell coffee?"></Accordion>
    </div>
  );
}

export default App;
