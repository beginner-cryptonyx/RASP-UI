import CTA from "./Registy/Marketing/CTA";
import Statistic from "./Registy/Content/Statistic";
import { ImageCard } from "./Registy/Content/Card";
import { statistics } from "./DummyData";
import useTheme from "./Theme/UseTheme";

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
      <button
        onClick={() => {
          themeSystem.setColorScheme("Ocean");
        }}
      >
        Koffee
      </button>
      <button
        onClick={() => {
          themeSystem.toggleMode();
        }}
      >
        Toggle Modeee
      </button>
      <ImageCard
        imageType="contain"
        imageSrc="https://picsum.photos/200/300"
        title="New York"
        subtext="At an affordable price"
        description="The central hub of the US"
        className="w-[200px]"
      ></ImageCard>
    </div>
  );
}

export default App;

