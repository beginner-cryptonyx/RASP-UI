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
  description: string;
  stars?: {
    StarsProps: StarsProps;
    starPosition: "below title" | "above title";
  };
  breadcrumbs?: BreadcrumbsProps;
  aboveTitleElement?: React.ReactNode; // for stuff like badges or extra lables (ill put this below breadcrumbs though)
}

export interface ProductPageProps {
  render: RenderImageProps;
  price: number;
  stars?: StarsProps;
}

function RenderTitle({
  title,
  description,
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
      <h3>{title}</h3>
      {stars && stars.starPosition === "below title" && (
        <Stars {...stars.StarsProps}></Stars>
      )}
      <p>{description}</p>
    </div>
  );
}
function RenderImage() {}

function RenderVariants(){}

function RenderExtraContent(){}

export default function ProductPage() {}
