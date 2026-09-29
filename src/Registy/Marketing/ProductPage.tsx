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
  price: number|string;
  pricePosition: "beside title" | "below title";
  description?: string;
  StarsProps?: StarsProps;
  starPosition?: "below title" | "above title";
  breadcrumbs?: BreadcrumbsProps["items"];
  aboveTitleElement?: React.ReactNode; // for stuff like badges or extra lables (ill put this below breadcrumbs though)
}

export interface ProductPageProps extends RenderImageProps, RenderTitleProps {
  textPosition: "right" | "left";
  textWidth: number; //between 0-100
}

function RenderTitle({
  title,
  description,
  price,
  StarsProps,
  starPosition = "below title",
  pricePosition = "below title",
  aboveTitleElement,
  breadcrumbs,
}: RenderTitleProps) {
  return (
    <div className="flex flex-col">
      {breadcrumbs && <Breadcrumbs items={breadcrumbs}></Breadcrumbs>}
      {aboveTitleElement && aboveTitleElement}
      {StarsProps && starPosition === "above title" && (
        <Stars {...StarsProps}></Stars>
      )}
      {price ? (
        pricePosition === "beside title" ? (
          <div className="flex justify-end">
            {title}
            {price}
          </div>
        ) : (
          <h3>{title}</h3>
        )
      ) : (
        <h3>{title}</h3>
      )}
      {price && pricePosition === "below title" && (
        <h2 className="text-accent">{price}</h2>
      )}
      {StarsProps && starPosition === "below title" && (
        <Stars {...StarsProps}></Stars>
      )}
      {description && <p>{description}</p>}
    </div>
  );
}

function RenderImage({ images, variant }: RenderImageProps) {
  function CarouselImages() {}
  return <div className="hidden">{variant}</div>;
}

function RenderVariants() {}

function RenderExtraContent() {}

export default function ProductPage({
  images,
  price,
  pricePosition,
  title,
  variant,
  StarsProps,
  aboveTitleElement,
  breadcrumbs,
  description,
  starPosition,
  textPosition,
  textWidth,
}: ProductPageProps) {
  return (
    <div className="flex">
      <RenderTitle
        price={price}
        pricePosition={pricePosition}
        title={title}
        StarsProps={StarsProps}
        aboveTitleElement={aboveTitleElement}
        breadcrumbs={breadcrumbs}
        description={description}
        starPosition={starPosition}
      ></RenderTitle>
      <RenderImage images={images} variant={variant}></RenderImage>
    </div>
  );
}
