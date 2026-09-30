import useTheme from "../../Theme/UseTheme";
import Icon from "../Meta/Icon";

export default function SwitchThemeButton() {
  const { mode, setMode } = useTheme();
  return (
    <button className="cursor-pointer hover:scale-110 hover:-translate-y-px duration-200 transition-all hover:bg-background1/50 rounded-lg backdrop-blur-3xl"
      onClick={() => (mode === "light" ? setMode("dark") : setMode("light"))}
    >
      <Icon name={mode === "light" ? "Moon" : "Sun"} className="m-2"></Icon>
    </button>
  );
}
