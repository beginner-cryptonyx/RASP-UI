import { useEffect } from "react";
import {
  coffeePlans,
  coffeeFeatureList,
  coffeeProcessTimeline,
  coffeeProducts,
} from "../../DummyData";
import Eyebrow from "../../Registery/Base/Eyebrow";
import Timeline from "../../Registery/Content/Timeline";
import PricingTable from "../../Registery/Marketing/Pricing";
import { NavLayout } from "../../Registery/Navigation/NavLayout";
import useTheme from "../../Theme/UseTheme";
import Grid from "../../Registery/Layout/Grid";
import { SvgBackground } from "../../Registery/Layout/SvgBackground";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/parallax";
import ResponsiveView from "../../Registery/Layout/ResponsiveView";
import TextDivider from "../../Registery/Base/TextDivider";
import ProductPage from "../../Registery/Marketing/ProductPage";
import Badge from "../../Registery/Base/Badge";
import SwitchThemeButton from "../../Registery/Base/SwitchThemeButton";
import { Link } from "react-router";

export default function Coffee() {
  const { setColorScheme } = useTheme();

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
      <div className="w-[98.5vw] p-0 mx-auto mt-1">
        <Swiper
          slidesPerView={1}
          speed={1000}
          navigation
          loop
          parallax
          modules={[Navigation, Parallax]}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <SwiperSlide key={n}>
              <img
                data-swiper-parallax={`${-n * 50}px`}
                src={`/coffee/heroimage${n}.${n === 1 ? "webp" : "jpg"}`}
                alt="Coffee"
                className="block aspect-16/7 object-cover w-screen pointer-events-none"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

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
