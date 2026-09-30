import type { BaseCardProps } from "./Cards";

export function CardText({
  title,
  subtext,
  description,
  extraContent,
  className,
}: BaseCardProps) {
  return (
    <div className={className}>
      {title ? <h4 className="leading-snug">{title}</h4> : <></>}
      {subtext ? (
        <h6 className="opacity-70 -mt-4 text-xs">{subtext}</h6>
      ) : (
        <></>
      )}
      {description ? <p>{description}</p> : <></>}

      {extraContent}
    </div>
  );
}