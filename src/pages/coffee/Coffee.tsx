import { useEffect, useState } from "react";
import {
  coffeePlans,
  coffeeFeatureList,
  coffeeProcessTimeline,
  coffeeProducts,
} from "../../DummyData";
import Eyebrow from "../../Registery/Base/Eyebrow";
import Timeline from "../../Registery/Content/Timeline";
import PricingTable from "../../Registery/Marketing/Pricing";
import useTheme from "../../Theme/UseTheme";
import Grid from "../../Registery/Layout/Grid";
import { SvgBackground } from "../../Registery/Layout/SvgBackground";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import { Navigation, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/parallax";
import ResponsiveView from "../../Registery/Layout/ResponsiveView";
import TextDivider from "../../Registery/Base/TextDivider";
import { Link } from "react-router";
import Icon from "../../Registery/Meta/Icon";

export default function Coffee() {
  const { setColorScheme } = useTheme();
  const [swiper, setSwiper] = useState<SwiperClass>();

  useEffect(() => {
    setColorScheme("Coffee");
  }, [setColorScheme]);

  const galleryItems = [
    { slug: "sharkbrew-original-instant", imgIndex: 0, span: "col-span-2" },
    { slug: "deepwater-brazil", imgIndex: 1, span: "col-span-2" },
    { slug: "morning-fin", imgIndex: 1, span: "col-span-2" },
    {
      slug: "sharkbrew-burr-grinder",
      imgIndex: 2,
      span: "col-span-3 aspect-video",
    },
    { slug: "current-pour-over", imgIndex: 1, span: "col-span-3 aspect-video" },
    { slug: "sharkbrew-classic-mug", imgIndex: 2, span: "col-span-2" },
    { slug: "sharkbrew-travel-tumbler", imgIndex: 0, span: "col-span-2" },
    { slug: "coffee-shark-tote", imgIndex: 0, span: "col-span-2" },
  ];

  return (
    <>
      <div className="relative w-[98.5vw] p-0 mx-auto mt-1">
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
          slidesPerView={1}
          speed={1000}
          navigation
          loop
          parallax
          onSwiper={setSwiper}
          spaceBetween={0}
          grabCursor
          effect="slide"
        >
          <div
            slot="container-start"
            className="absolute left-0 top-0 w-[130%] h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://swiperjs.com/demos/images/abstract-1.jpg)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          {[1, 2, 3, 4, 5].map((n) => (
            <SwiperSlide key={n} className="box-border">
              <div className="flex relative overflow-hidden h-125!">
                <img
                  src={`/coffee/heroimage${n}.${n === 1 ? "webp" : "jpg"}`}
                  alt="Coffee"
                  className="absolute top-0 left-0 right-0 flex items-center justify-center aspect-16/7 object-cover w-screen pointer-events-none m-auto bottom-0"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <Carousel>
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            data-swiper-parallax={parallexAmount}
            data-swiper-opacity={0.5}
            className="flex relative overflow-hidden h-125!"
          >
            <img
              src={`/coffee/heroimage${n}.${n === 1 ? "webp" : "jpg"}`}
              alt="Coffee"
              className="absolute top-0 left-0 right-0 flex items-center justify-center aspect-16/7 object-cover w-screen pointer-events-none m-auto bottom-0"
            />
          </div>
        ))}
      </Carousel> */}

      <div className="py-20">
        {/* <h3 className="text-center ">Our Products</h3> */}
        <TextDivider>
          <h3 className="">Our Products</h3>
        </TextDivider>
        <ResponsiveView
          desktop={
            <Grid
              columns={6}
              className="sm:mx-50 my-10 gap-10 *:hover:scale-105 *:transition-all *:duration-300 *:cursor-pointer *:shadow-md"
            >
              {galleryItems.map((item, index) => {
                const product = coffeeProducts[item.slug];

                return (
                  <Link
                    key={index}
                    to={`/services/coffee/${item.slug}`} // Or href={`/products/${item.slug}`} for Next.js
                    className={`${item.span} block group overflow-hidden rounded-lg`}
                  >
                    <img
                      src={product.images[item.imgIndex]}
                      alt={product.title || ""}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                );
              })}
            </Grid>
          }
          mobile={
            <div className="w-[70vw] mx-auto my-10">
              <Swiper
                // spaceBetween={50}
                slidesPerView={1}
                navigation
                loop
                parallax
                modules={[Navigation, Parallax]}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide data-swiper-parallax="-300">
                  <img
                    src="/coffee/prod3.jpg"
                    alt=""
                    className="pointer-events-none"
                  />
                </SwiperSlide>
                <SwiperSlide data-swiper-parallax="-300">
                  <img
                    src="/coffee/prod4.jpg"
                    alt=""
                    className="pointer-events-none"
                  />
                </SwiperSlide>
                <SwiperSlide data-swiper-parallax="-300">
                  <img
                    src="/coffee/prod5.jpg"
                    alt=""
                    className="pointer-events-none"
                  />
                </SwiperSlide>
                <SwiperSlide data-swiper-parallax="-300">
                  <img src="/coffee/prod1.webp" alt="" className="col-span-3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/coffee/prod2.jpg" alt="" className="col-span-3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/coffee/prod6.jpg"
                    alt=""
                    className="pointer-events-none"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/coffee/prod7.jpg"
                    alt=""
                    className="pointer-events-none"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/coffee/prod9.jpg"
                    alt=""
                    className="pointer-events-none"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          }
        ></ResponsiveView>
      </div>
      <div className="py-20 bg-background1">
        <TextDivider>
          <h3>BEST SELLERS</h3>
        </TextDivider>
      </div>
      <div className="bg-background2 py-10">
        <Eyebrow className="text-center">Why us?</Eyebrow>
        <h2 className="font-bold text-center m-0 p-0 mb-15 ">
          Our extraction process
        </h2>
        <Timeline elements={coffeeProcessTimeline}></Timeline>
      </div>
      <SvgBackground
        className="p-10"
        svg="/coffee/coffee-bean.svg"
        maskSize={75}
      >
        <Eyebrow className="text-center">Still Confused?</Eyebrow>
        {/* <Stars stars={3.9} numberOfReviews={500} displayExactStarCount></Stars> */}
        <h2 className="font-bold text-center ">View our plans</h2>
        <PricingTable
          plans={coffeePlans}
          FeatureList={coffeeFeatureList}
          variant="complex"
        ></PricingTable>
      </SvgBackground>
    </>
  );
}
