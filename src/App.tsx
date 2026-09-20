import CTA from "./Registy/Marketing/CTA";
import Statistic from "./Registy/Content/Statistic";
import { statistics } from "./DummyData";
import useTheme from "./Theme/UseTheme";

function App() {
  const themeSystem = useTheme()
  return (
    <div>
      <h1>This Could be used as a playground for testing</h1>
      <CTA></CTA>
      <div className="grid grid-cols-3 ">
        {statistics.map((stat) => (
          <Statistic {...stat}></Statistic>
        ))}
      </div>
      <button onClick={() => {themeSystem.setColorScheme("Coffee")}}>Koffee</button>
      <button onClick={() => {themeSystem.toggleMode()}}>Toggle Modeee</button>
    </div>
  );
}

export default App;
