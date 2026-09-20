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
}

export interface IconCardProps extends BaseCardProps {
  icon: IconName;
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
            className="absolute inset-0  h-full w-full  object-cover"
          />
          <div className="absolute inset-0 h-full w-full object-cover bg-black/60"></div>
          <CardText {...textProps} className="relative z-10 p-4 text-white" />
        </div>
      ) : (
        <div className={cn("flex flex-col")}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="m-2 border aspect-square object-cover rounded-xl"
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
  className,
  ...textProps
}: IconCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl shadow-xl overflow-hidden bg-background3 m-4 cursor-pointer hover:scale-105 transition-all duration-200 group hover:bg-background4 p-6",
        className,
      )}
    >
      {/* Icon glow */}


      {/* Icon */}
      <div
        className={cn(
          "relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-color2/10 text-textPrimary transition-all duration-300 group-hover:bg-color1/20",
          iconAlign === "left" && "mr-auto",
          iconAlign === "center" && "mx-auto",
          iconAlign === "right" && "ml-auto",
        )}
      >
              <div
        className={cn(
          "pointer-events-none absolute -inset-8 rounded-full bg-accentHover/60 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          iconAlign === "left" && "left-0",
          iconAlign === "center" && "left-1/2 -translate-x-1/2",
          iconAlign === "right" && "right-0 left-auto",
        )}
      />
        <Icon className="text-xl text-color3" name={icon}></Icon>
      </div>

      {/* Text */}
      <CardText
        {...textProps}
        className={cn(
          "relative z-10",
          iconAlign === "left" && "text-left",
          iconAlign === "center" && "text-center",
          iconAlign === "right" && "text-right",
        )}
      />
    </div>
  );
}