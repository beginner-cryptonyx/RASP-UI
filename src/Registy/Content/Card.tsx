import { cn } from "../../Lib/utils";

interface BaseCardProps {
  title: string;
  subtext: string;
  description: string;
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
      <h3>{title}</h3>
      <h6>{subtext}</h6>
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
    <div className={cn("rounded-xl shadow-xl overflow-hidden", className)}>
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
          <img src={imageSrc} alt={imageAlt} className="m-2 border" />
          <CardText {...textProps} className="px-4" />
        </div>
      )}
    </div>
  );
}
