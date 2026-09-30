import { cn } from "../../../Lib/utils";
import Icon from "../../Meta/Icon";
import type { IconCardProps } from "./Cards";
import { CardText } from "./CardText";

export function IconCard({
  icon,
  iconAlign = "center",
  miniCard = false,
  className,
  ...textProps
}: IconCardProps) {
  const fullAlign = {
    left: { icon: "mr-auto", glow: "left-0", text: "text-left" },
    center: {
      icon: "mx-auto",
      glow: "left-1/2 -translate-x-1/2",
      text: "text-center",
    },
    right: { icon: "ml-auto", glow: "right-0 left-auto", text: "text-right" },
  }[iconAlign];
  return (
    <div
      className={cn(
        "rounded-xl shadow-xl overflow-hidden bg-background3 cursor-pointer hover:scale-105 transition-all duration-200 group hover:bg-background4",
        miniCard ? "flex items-center gap-3 p-2 m-2" : "p-6 m-4",
        // In mini mode, "right" flips the icon to the end of the row
        miniCard && iconAlign === "right" && "flex-row-reverse",
        className,
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "relative z-10 flex shrink-0 items-center justify-center rounded-xl bg-color2/10 text-textPrimary transition-all duration-300 group-hover:bg-color1/20",
          miniCard ? "h-10 w-10" : "mb-5 h-14 w-14 min-w-14",
          !miniCard && fullAlign.icon,
        )}
      >
        {/* Icon glow */}
        <div
          className={cn(
            "pointer-events-none absolute -inset-8 rounded-full bg-accentHover/60 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            !miniCard && fullAlign.glow,
          )}
        />
        <Icon
          className={cn("text-color3", miniCard ? "text-lg" : "text-xl")}
          name={icon}
        />
      </div>

      {/* Text */}
      {miniCard ? (
        <p className="text-center mb-0"> {textProps.title}</p>
      ) : (
        <CardText
          {...textProps}
          className={cn("relative z-10", !miniCard && fullAlign.text)}
        />
      )}
    </div>
  );
}
