import { cn } from "../../../Lib/utils";
import type { ImageCardProps } from "./Cards";
import { CardText } from "./CardText";

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
                  : "aspect-3/4",
            )}
          />
          <CardText {...textProps} className="px-4" />
        </div>
      )}
    </div>
  );
}