import { cn } from "../../Lib/utils";

interface BaseCardProps {
  title?: string;
  subtext?: string;
  description?: string;
  className?: string;
}

interface ImageCardProps extends BaseCardProps {
  imageType: "full" | "contain";
  imageSrc: string;
  imageAlt?: string;
}

function CardText({
  title,
  subtext,
  description,
  className,
}: BaseCardProps){
  return (
    <div className={className}>
      <h4>{title}</h4>
      <h6 className="opacity-70 -mt-4 text-xs">{subtext}</h6>
      <p>{description}</p>
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
    <div className={cn("rounded-xl shadow-xl overflow-hidden bg-background3 m-4", className)}>
      {imageType === "full" ? (
        <div className={cn("relative overflow-hidden")}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 h-full w-full object-cover bg-black/40"></div>
          <CardText {...textProps} className="relative z-10 p-4 text-white" />
        </div>
      ) : (
        <div className={cn("flex flex-col")}>
          <img src={imageSrc} alt={imageAlt} className="m-2 border aspect-video object-cover rounded-xl" />
          <CardText {...textProps} className="px-4" />
        </div>
      )}
    </div>
  );
}
