import CTA from "./Registy/Marketing/CTA";
import Statistic from "./Registy/Content/Statistic";
import { ImageCard } from "./Registy/Content/Card";
import { statistics, destinations } from "./DummyData";
import useTheme from "./Theme/UseTheme";
import {  Themes, type ThemeName  } from "./Theme/theme";

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
        {Object.keys(Themes).map((theme) => (
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
      {/* <ImageCard
        imageType="contain"
        imageSrc="https://picsum.photos/200/300"
        title="New York"
        subtext="At an affordable price"
        description="The central hub of the US"
        className="w-[200px]"
      ></ImageCard> */}
      <div className="grid grid-cols-4 mx-10">
        {destinations.map((destination) => (
          <ImageCard {...destination}></ImageCard>
        ))}
      </div>
    </div>
  );
}

export default App;
