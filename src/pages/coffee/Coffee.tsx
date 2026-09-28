import { useEffect } from "react";
import {
  coffeePlans,
  coffeeFeatureList,
  coffeeProcessTimeline,
} from "../../DummyData";
import Eyebrow from "../../Registy/Base/Eyebrow";
import Timeline from "../../Registy/Content/Timeline";
import PricingTable from "../../Registy/Marketing/Pricing";
import { NavLayout } from "../../Registy/Navigation/NavLayout";
import useTheme from "../../Theme/UseTheme";
import Grid from "../../Registy/Layout/Grid";
import { SvgBackground } from "../../Registy/Layout/SvgBackground";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/parallax";
import ResponsiveView from "../../Registy/Layout/ResponsiveView";
import TextDivider from "../../Registy/Base/TextDivider";

export default function Coffee() {
  const { setColorScheme } = useTheme();

  useEffect(() => {
    setColorScheme("Coffee");
  }, [setColorScheme]);

  return (
    <NavLayout
      services={[{ href: "/", label: "home" }]}
      logo={
        <img src={"/coffee/logo transperent.png"} className="w-25 invert"></img>
      }
    >
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
        <TextDivider><h3 className="">Our Products</h3></TextDivider>
        <ResponsiveView
          desktop={
            <Grid
              columns={6}
              className="sm:mx-50 my-10 gap-10 *:hover:scale-105 *:transition-all *:duration-300 *:cursor-pointer *:shadow-md"
            >
              <img src="/coffee/prod3.jpg" alt="" className="col-span-2" />
              <img src="/coffee/prod4.jpg" alt="" className="col-span-2" />
              <img src="/coffee/prod5.jpg" alt="" className="col-span-2" />
              <img src="/coffee/prod1.webp" alt="" className="col-span-3" />
              <img
                src="/coffee/prod2.jpg"
                alt=""
                className="col-span-3 w-full"
              />
              <img src="/coffee/prod6.jpg" alt="" className="col-span-2" />
              <img src="/coffee/prod7.jpg" alt="" className="col-span-2" />
              <img src="/coffee/prod9.jpg" alt="" className="col-span-2" />
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
        <h2 className="font-bold text-center ">View our plans</h2>
        <PricingTable
          plans={coffeePlans}
          FeatureList={coffeeFeatureList}
          variant="complex"
        ></PricingTable>
      </SvgBackground>
    </NavLayout>
  );
}
