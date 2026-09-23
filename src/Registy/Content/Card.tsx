import { cn } from "../../Lib/utils";
import { type IconName } from "../../Lib/types";
import Icon from "../Meta/Icon";
import LinkButton from "../Base/LinkButton";
import type React from "react";

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

export interface ProductCardProps extends Pick<
  BaseCardProps,
  "title" | "subtext" | "description" | "className"
> {
  // Provide one of these for the top visual
  icon?: IconName;
  imageSrc?: string;
  imageAlt?: string;
  features: React.ReactNode[];
  priceProperty?: {
    price: number | React.ReactNode | string;
    priceLabel?: string;
    priceSuffix?: string;
  };
  button: { label: string; url: string };
  titlePosition: "top" | "center" | "middle left";
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

export function ProductCard({
  title,
  icon,
  imageSrc,
  imageAlt = "",
  features,
  button,
  titlePosition = "top",
  className,
  priceProperty,
}: ProductCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col  shadow-xl overflow-hidden bg-background3 m-4   transition-all duration-200 border border-background3 hover:border-accent",
        className,
      )}
    >
      {titlePosition === "top" ? (
        <h4 className="text-center uppercase mt-2 mb-4">{title}</h4>
      ) : (
        ""
      )}
      {/* 1. Icon / Image */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="mb-5 aspect-square w-full  object-cover"
        />
      ) : icon ? (
        <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-color2/10 transition-all duration-300 group-hover:bg-color1/20">
          <Icon className="text-xl text-color3" name={icon} />
        </div>
      ) : null}

      {/* Heading */}
      {titlePosition !== "top" ? (
        titlePosition === "center" ? (
          <h4 className="text-center">{title}</h4>
        ) : (
          <h4>{title}</h4>
        )
      ) : (
        ""
      )}

      {/* 2. Features */}
      <ul className="my-5 flex flex-col gap-2 text-sm px-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-color3">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* 3. Price (optional) */}
      {priceProperty?.price && (
        <div className="mt-3 mb-2 px-8">
          {priceProperty.priceLabel && (
            <span className="block text-xs opacity-70">
              {priceProperty.priceLabel}
            </span>
          )}
          <div className="flex items-baseline">
            <span className="text-xl font-bold text-accentHover">{priceProperty.price}</span>
            <span className="ml-1 -translate-y-0.5  block text-xs opacity-70">
                {priceProperty.priceSuffix}
              </span>
          </div>
        </div>
      )}

      {/* 4. Button pinned to the bottom */}
      <LinkButton
        to={button.url}
        className="m-0 mt-auto text-lg py-5.5"
        variant={"maximalist"}
      >
        {button.label}
      </LinkButton>
    </div>
  );
}
