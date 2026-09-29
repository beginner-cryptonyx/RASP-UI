import useTheme from "../../Theme/UseTheme";
import Icon from "../Meta/Icon";

export default function SwitchThemeButton() {
  const { mode, setMode } = useTheme();
  return (
    <button
      onClick={() => (mode === "light" ? setMode("dark") : setMode("light"))}
    >
      <Icon name={mode === "light" ? "Moon" : "Sun"}></Icon>
    </button>
  );
}
