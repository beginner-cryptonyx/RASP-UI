import type React from "react";
import type { BreadcrumbsProps } from "../Navigation/Breadcrumbs";
import type { StarsProps } from "./Stars";
import Stars from "./Stars";
import Breadcrumbs from "../Navigation/Breadcrumbs";

interface RenderImageProps {
  images: string[];
  variant: "carousel" | "choice" | "both";
}

interface RenderTitleProps {
  title: string;
  price?: { price: number; pricePosition: "beside title" | "below title" };
  description?: string;
  stars?: {
    StarsProps: StarsProps;
    starPosition: "below title" | "above title";
  };
  breadcrumbs?: BreadcrumbsProps;
  aboveTitleElement?: React.ReactNode; // for stuff like badges or extra lables (ill put this below breadcrumbs though)
}

export interface ProductPageProps {
  image: RenderImageProps;
  title: RenderTitleProps;
  textPosition: "right"|"left"
  textWidth: number //between 0-100
}

function RenderTitle({
  title,
  description,
  price,
  stars,
  aboveTitleElement,
  breadcrumbs,
}: RenderTitleProps) {
  return (
    <div className="flex flex-col">
      {breadcrumbs && <Breadcrumbs {...breadcrumbs}></Breadcrumbs>}
      {aboveTitleElement && aboveTitleElement}
      {stars && stars.starPosition === "above title" && (
        <Stars {...stars.StarsProps}></Stars>
      )}
      {price ? (
        price.pricePosition === "beside title" ? (
          <div className="flex justify-end">
            {title}
            {price.price}
          </div>
        ) : (
          <h3>{title}</h3>
        )
      ) : (
        <h3>{title}</h3>
      )}
      {price && price.pricePosition === "below title" && (
        <h2 className="text-accent">{price.price}</h2>
      )}
      {stars && stars.starPosition === "below title" && (
        <Stars {...stars.StarsProps}></Stars>
      )}
      {description && <p>{description}</p>}
    </div>
  );
}


function RenderImage() {
    function CarouselImages(){}
    
}

function RenderVariants() {}

function RenderExtraContent() {}

export default function ProductPage() {}
