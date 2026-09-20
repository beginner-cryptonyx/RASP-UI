import CTA from "./Registy/Marketing/CTA";
import Statistic from "./Registy/Content/Statistic";
import { ImageCard } from "./Registy/Content/Card";
import { statistics } from "./DummyData";
import useTheme from "./Theme/UseTheme";

function App() {
  const themeSystem = useTheme();
  return (
    <div>
      <h1>This Could be used as a playground for testing</h1>
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
        imageType="full"
        imageSrc="https://picsum.photos/200/300"
        title="Your Dream Location"
        subtext="At an affordable price"
        description="Find your dream vaca spot right now! On this dummy website, you can do ANYTHING"
        className="w-[200px]"
      ></ImageCard>
    </div>
  );
}

export default App;

