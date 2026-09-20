import { cn } from "../../Lib/utils";

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
