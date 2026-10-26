import { cn } from "../../../Lib/utils";
import type { ImageCardProps } from "./Cards";
import CardText from "./CardText";

export default function ImageCard({
  imageType,
  imageSrc,
  imageAlt = "",
  imageAspectRatio = "square",
  className,
  // text props
  title,
  subtext,
  description,
  extraContent,
  // everything else (onClick, onKeyDown, id, aria-*, etc.)
  ...divProps
}: ImageCardProps) {
  return (
    <div {...divProps}
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
          <CardText
            title={title}
            subtext={subtext}
            description={description}
            extraContent={extraContent}
            className="relative z-10 p-4 text-white"
          />
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
          <CardText
            title={title}
            subtext={subtext}
            description={description}
            extraContent={extraContent}
            className="px-4"
          />
        </div>
      )}
    </div>
  );
}
