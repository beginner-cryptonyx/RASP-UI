import { cn } from "../../../Lib/utils";
import Icon from "../../Meta/Icon";
import type { ProductCardProps } from "./Cards";

export default function ProductCard({
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
      {button}
    </div>
  );
}
