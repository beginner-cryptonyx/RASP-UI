import type React from "react";
import type { BreadcrumbsProps } from "../Navigation/Breadcrumbs";
import type { StarsProps } from "./Stars";
import Stars from "./Stars";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Icon from "../Meta/Icon";
import { useState } from "react";
import ResponsiveView from "../Layout/ResponsiveView";
import { SelectColors, type SelectColorsProps } from "./SelectColors";
import {
  SelectTextVariants,
  type SelectTextVariantsProps,
} from "./SelectTextVariants";

interface RenderImageProps {
  images: string[];
  variant: "carousel only" | "image selection";
}

interface RenderTitleProps {
  title: string;
  price: number | string;
  pricePosition: "beside title" | "below title";
  description?: string;
  StarsProps?: StarsProps;
  starPosition?: "below title" | "above title" | "below price";
  aboveTitleElement?: React.ReactNode; // for stuff like badges or extra lables (ill put this below breadcrumbs though)
}

export interface ProductPageProps
  extends RenderImageProps, RenderTitleProps, RenderVariantsProps {
  breadcrumbs?: BreadcrumbsProps["items"];
  textPosition: "right" | "left";
  extraContent?: React.ReactNode
  extraContentPosition?: "below text"|"below image"|"below all content";
  textWidth: 3 | 4 | 5 | 6 | 7;
}

function RenderTitle({
  title,
  description,
  price,
  StarsProps,
  starPosition = "below title",
  pricePosition = "below title",
  aboveTitleElement,
}: RenderTitleProps) {
  return (
    <div className="flex flex-col pl-5 py-4">
      {aboveTitleElement && aboveTitleElement}
      {StarsProps && starPosition === "above title" && (
        <Stars {...StarsProps}></Stars>
      )}
      {price ? (
        pricePosition === "beside title" ? (
          <div className="flex justify-end">
            <h3 className="mb-0">{title}</h3>
            <h2 className="text-accent mb-0">{price}</h2>
          </div>
        ) : (
          <h3 className="mb-0">{title}</h3>
        )
      ) : (
        <h3 className="mb-0">{title}</h3>
      )}
      {StarsProps && starPosition === "below title" && (
        <Stars {...StarsProps}></Stars>
      )}
      {price && pricePosition === "below title" && (
        <h2 className="text-accent mb-0">{price}</h2>
      )}
      {StarsProps && starPosition === "below price" && (
        <Stars {...StarsProps} className="pb-6"></Stars>
      )}
      {description && <p>{description}</p>}
    </div>
  );
}

function CarouselImages({ images }: { images: string[] }) {
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <div className="relative">
      <button
        onClick={() => swiper?.slidePrev()}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 text-accent cursor-pointer"
        aria-label="Previous Image"
      >
        <Icon name="ChevronLeft" className="w-10 h-10" />
      </button>
      <button
        onClick={() => swiper?.slideNext()}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 text-accent cursor-pointer"
        aria-label="Next Image"
      >
        <Icon name="ChevronRight" className="w-10 h-10" />
      </button>

      <Swiper
        onSwiper={setSwiper}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        loop
      >
        {images.map((image, i) => (
          <SwiperSlide key={image + i}>
            <img src={image} alt="" className="block w-full h-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function RenderImage({ images, variant }: RenderImageProps) {
  const includeImageSelector = variant === "image selection";
  return (
    <div className="shrink-0 flex flex-col">
      <CarouselImages images={images} />
      {includeImageSelector && <div>{/* Add image selection here */}</div>}
    </div>
  );
}

interface RenderVariantsProps {
  Variants?: Record<
    string,
    | {
        type: "color";
        props: SelectColorsProps;
      }
    | {
        type: "text";
        props: SelectTextVariantsProps;
      }
    | {
        type: "none";
        props?: never;
      }
  >;
}

interface InternalRenderVariantProps extends RenderVariantsProps {
  selected: Record<string, string>;
  onSelect: (variantName: string, value: string) => void;
}
function RenderVariants({
  Variants,
  selected,
  onSelect,
}: InternalRenderVariantProps) {
  if (!Variants) return null;

  const items = Object.keys(Variants);

  return (
    <div className="flex flex-col">
      {items.map((variantName) => {
        const variant = Variants[variantName];

        if (variant.type === "color") {
          return (
            <div key={variantName} className="flex flex-col mb-2.5 gap-1">
              <h6 className="text-accent mb-0">{variantName}</h6>

              <SelectColors
                {...variant.props}
                value={selected[variantName]}
                onChange={(value) => onSelect(variantName, value)}
              />
            </div>
          );
        }

        if (variant.type === "text") {
          return (
            <div key={variantName} className="flex flex-col mb-2.5 gap-1">
              <h6 className="text-accent mb-0">{variantName}</h6>

              <SelectTextVariants
                {...variant.props}
                value={selected[variantName]}
                onChange={(value) => onSelect(variantName, value)}
              />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

// function RenderExtraContent() {}

function ProductPageDesktop({
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
  // textPosition,
  onSelect,
  selected,
  Variants,
  extraContent,
  extraContentPosition="below text",
  textWidth = 6,
}: ProductPageProps & {
  selected: Record<string, string>;
  onSelect: (variantName: string, value: string) => void;
}) {
  return (
    <div className="grid grid-cols-10 gap-10 bg-background2 w-full max-w-[90vw] px-10 py-6 rounded-2xl shadow-2xl border-borderDefault/50 border">
      <div
        className="flex flex-col shrink-0 "
        style={{ gridColumn: `span ${textWidth} /  span ${textWidth}` }}
      >
        {breadcrumbs && (
          <Breadcrumbs items={breadcrumbs} className="pl-5 pt-5"></Breadcrumbs>
        )}
        <RenderTitle
          price={price}
          pricePosition={pricePosition}
          title={title}
          StarsProps={StarsProps}
          aboveTitleElement={aboveTitleElement}
          description={description}
          starPosition={starPosition}
        ></RenderTitle>
        <div className="pl-5">
          <RenderVariants
            Variants={Variants}
            onSelect={onSelect}
            selected={selected}
          ></RenderVariants>
        </div>
        {extraContent && extraContentPosition === "below text" && <div className="pl-5 pt-5">{extraContent}</div> }
      </div>
      <div
        className="min-w-0 "
        style={{
          gridColumn: `span ${10 - textWidth} /  span ${10 - textWidth}`,
        }}
      >
        <RenderImage images={images} variant={variant}></RenderImage>
        {extraContent && extraContentPosition === "below image" && <div className="pl-5 pt-5">{extraContent}</div> }
      </div>
        {extraContent && extraContentPosition === "below all content" && <div className="pl-5 pt-5 col-span-10">{extraContent}</div> }

    </div>
  );
}

function ProductPageMobile({
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
  onSelect,
  selected,
  Variants,
  extraContent
}: ProductPageProps & {
  selected: Record<string, string>;
  onSelect: (variantName: string, value: string) => void;
}) {
  return (
    <div className="flex flex-col bg-background2 w-full my-5 mx-auto max-w-[100vw]">
      {breadcrumbs && (
        <Breadcrumbs items={breadcrumbs} className="pl-5 pt-3 pb-2" />
      )}

      <div className="w-full">
        <RenderImage images={images} variant={variant} />
      </div>

      <RenderTitle
        price={price}
        pricePosition={pricePosition}
        title={title}
        StarsProps={StarsProps}
        aboveTitleElement={aboveTitleElement}
        description={description}
        starPosition={starPosition}
      />

      <div className="px-5 pb-5">
        <RenderVariants
          Variants={Variants}
          onSelect={onSelect}
          selected={selected}
        />
      </div>
      {extraContent && <div className="pl-5">{extraContent}</div>}
    </div>
  );
} 

export default function ProductPage({
  defaultSelected,
  ...props
}: ProductPageProps & { defaultSelected: Record<string, string> }) {
  const [selectedVariants, setSelectedVariants] =
    useState<Record<string, string>>(defaultSelected);

  return (
    <ResponsiveView
      desktop={
        <ProductPageDesktop
          {...props}
          selected={selectedVariants}
          onSelect={(name, value) =>
            setSelectedVariants((prev) => ({ ...prev, [name]: value }))
          }
        />
      }
      mobile={
        <ProductPageMobile
          {...props}
          selected={selectedVariants}
          onSelect={(name, value) =>
            setSelectedVariants((prev) => ({ ...prev, [name]: value }))
          }
        />
      }
    ></ResponsiveView>
  );
}
