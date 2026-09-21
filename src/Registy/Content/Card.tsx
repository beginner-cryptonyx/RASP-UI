import { cn } from "../../Lib/utils";
import { type IconName } from "../../Lib/types";
import Icon from "../Meta/Icon";

export interface BaseCardProps {
  title?: string;
  subtext?: string;
  description?: string;
  extraContent?: React.ReactNode;
  className?: string;
}

export interface ImageCardProps extends BaseCardProps {
  imageType: "full" | "contain";
  imageSrc: string;
  imageAlt?: string;
  imageAspectRatio?: "square" | "landscape" | "portrait";
}

export interface IconCardProps extends BaseCardProps {
  icon: IconName;
  miniCard?: boolean;
  iconAlign?: "left" | "center" | "right";
}

export function CardText({
  title,
  subtext,
  description,
  extraContent,
  className,
}: BaseCardProps) {
  return (
    <div className={className}>
      <h4 className="leading-snug">{title}</h4>
      <h6 className="opacity-70 -mt-4 text-xs">{subtext}</h6>
      <p>{description}</p>
      {extraContent}
    </div>
  );
}

export function ImageCard({
  imageType,
  imageSrc,
  imageAlt = "",
  imageAspectRatio = "square",
  className,
  ...textProps
}: ImageCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl shadow-xl overflow-hidden bg-background3 m-4 cursor-pointer hover:scale-105 transition-all duration-200 group hover:bg-background4",
        className,
      )}
    >
      {imageType === "full" ? (
        <div className={cn("relative overflow-hidden min-h-64")}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className={cn("absolute inset-0  h-full w-full  object-cover")}
          />
          <div className="absolute inset-0 h-full w-full object-cover bg-black/60"></div>
          <CardText {...textProps} className="relative z-10 p-4 text-white" />
        </div>
      ) : (
        <div className={cn("flex flex-col")}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className={cn(
              "m-2 border object-cover rounded-xl",
              imageAspectRatio === "square"
                ? "aspect-square"
                : imageAspectRatio === "landscape"
                  ? "aspect-video"
                  : "aspect-[3/4]",
            )}
          />
          <CardText {...textProps} className="px-4" />
        </div>
      )}
    </div>
  );
}

export function IconCard({
  icon,
  iconAlign = "center",
  miniCard = false,
  className,
  ...textProps
}: IconCardProps) {
  const fullAlign = {
  left: { icon: "mr-auto", glow: "left-0", text: "text-left" },
  center: { icon: "mx-auto", glow: "left-1/2 -translate-x-1/2", text: "text-center" },
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
          fullAlign.icon
        )}
      >
        {/* Icon glow */}
        <div
          className={cn(
            "pointer-events-none absolute -inset-8 rounded-full bg-accentHover/60 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            fullAlign.glow
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
          className={cn(
            "relative z-10",
            fullAlign.text
          )}
        />
      )}
    </div>
  );
}
