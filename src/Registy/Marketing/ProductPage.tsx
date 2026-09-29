import type React from "react";
import type { BreadcrumbsProps } from "../Navigation/Breadcrumbs";
import type { StarsProps } from "./Stars";
import Stars from "./Stars";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import Icon from "../Meta/Icon";
import { useRef, useState } from "react";
import ResponsiveView from "../Layout/ResponsiveView";

interface RenderImageProps {
  images: string[];
  variant: "carousel" | "choice" | "both";
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

export interface ProductPageProps extends RenderImageProps, RenderTitleProps {
  breadcrumbs?: BreadcrumbsProps["items"];
  textPosition: "right" | "left";
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
    <div className="flex flex-col">
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
        <h2 className="text-accent">{price}</h2>
      )}
      {StarsProps && starPosition === "below price" && (
        <Stars {...StarsProps}></Stars>
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
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 text-accent"
      >
        <Icon name="ChevronLeft" className="w-10 h-10 cursor-pointer" />
      </button>
      <button
        onClick={() => swiper?.slideNext()}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 text-accent"
      >
        <Icon name="ChevronRight" className="w-10 h-10 cursor-pointer" />
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
  return (
    <div className="">
      <CarouselImages images={images} />
    </div>
  );
}

function RenderVariants() {}

function RenderExtraContent() {}

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
  textPosition,
  textWidth = 6,
}: ProductPageProps) {
  return (
    <div className="grid grid-cols-10 gap-10 bg-background3 w-full max-w-[90vw] p-10 my-15 mx-auto rounded-2xl">
      <div
        className="flex flex-col shrink-0 bg-green-300/10"
        style={{ gridColumn: `span ${textWidth} /  span ${textWidth}` }}
      >
        {breadcrumbs && <Breadcrumbs items={breadcrumbs}></Breadcrumbs>}
        <RenderTitle
          price={price}
          pricePosition={pricePosition}
          title={title}
          StarsProps={StarsProps}
          aboveTitleElement={aboveTitleElement}
          description={description}
          starPosition={starPosition}
        ></RenderTitle>
      </div>
      <div className="min-w-0 " style={{ gridColumn: `span ${10- textWidth} /  span ${10- textWidth}` }}>
        <RenderImage images={images} variant={variant}></RenderImage>
      </div>
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
  textPosition,
  textWidth=6,
}: ProductPageProps) {
  return (
    <div className="flex flex-col bg-background3 w-fit  my-15 mx-auto rounded-2xl max-w-[90vw]">
      {breadcrumbs && <Breadcrumbs items={breadcrumbs}></Breadcrumbs>}
      <div className="flex-1">
        <RenderImage images={images} variant={variant}></RenderImage>
      </div>
      <RenderTitle
        price={price}
        pricePosition={pricePosition}
        title={title}
        StarsProps={StarsProps}
        aboveTitleElement={aboveTitleElement}
        description={description}
        
        starPosition={starPosition}
      ></RenderTitle>
    </div>
  );
}

export default function ProductPage({ ...props }: ProductPageProps) {
  return (
    <ResponsiveView
      desktop={<ProductPageDesktop {...props} />}
      mobile={<ProductPageMobile {...props} />}
    ></ResponsiveView>
  );
}
