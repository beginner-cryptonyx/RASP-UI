import { useEffect } from "react";
import {
  coffeePlans,
  coffeeFeatureList,
  coffeeProcessTimeline,
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
      rightSlot={<SwitchThemeButton />}
    >
      <ProductPage
        aboveTitleElement={
          <Badge
            text={"cold brew"}
            displayPiece={"Snowflake"}
            border
            shape={"pill"}
            color={"blue"}
          />
        }
        title="Arabic Coffee"
        StarsProps={{
          stars: 4.6,
          displayExactStarCount: true,
          numberOfReviews: "90k",
        }}
        starPosition="below price"
        images={[
          "/coffee/bestsellerbeans1.jpg",
          "/coffee/bestsellerbeans2.jpg",
          "/coffee/bestsellerbeans3.jpg",
        ]}
        price={"$10"}
        pricePosition="below title"
        variant="carousel only"
        breadcrumbs={[
          { label: "home", href: "/" },
          { label: "coffee", href: "/services/coffee" },
          { label: "cold brews" },
          { label: "dark arab coffee", href: "/services/coffee/buy" },
        ]}
        textPosition="left"
        textWidth={5}
        description={
          "Why is this in a weird place? well, I'm testing this feature. Here is some more dummy text to fill the space. Elit aliqua labore ullamco minim veniam elit veniam cillum anim duis duis. Amet Lorem aliqua eu magna id aliqua laboris incididunt nostrud. Laboris excepteur elit excepteur sit amet pariatur ut dolore labore. Laboris ad proident dolore do. Ex eu aliqua in ad voluptate sit pariatur veniam laboris amet aute eiusmod. Commodo nulla eiusmod commodo nulla occaecat."
        }
        Variants={{
          "package colors": {
            type: "color",
            props: {
              ColorButtons: [
                { color: "red", colorCode: "#FF2222" },
                { color: "blue", colorCode: "#2222FF" },
                { color: "black", colorCode: "#000000" },
                { color: "white", colorCode: "#FFFFFF" },
              ],
              Variant: "circle",
            },
          },
          weight: { type: "text", props: { labels: ["50g", "100g", "200g"] } },
          
        }}
        extraContent={<h2>hi</h2>}
        defaultSelected={{ "package colors": "white", "weight":"100g" }}
      ></ProductPage>
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
    </NavLayout>
  );
}
