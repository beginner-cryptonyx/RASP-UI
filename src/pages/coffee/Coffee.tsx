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

export default function Coffee() {
  const { setColorScheme } = useTheme();

  useEffect(() => {
    setColorScheme("Coffee");
  }, [setColorScheme]);

  return (
    <NavLayout services={[{href:"/", label:"home"}]} logo={<img src={"/coffee/logo transperent.png"}  className="w-25 invert"></img>}>
      <img src={"/coffee/heroimage1.webp"} alt="Coffee" />
      <Grid columns={6} className="mx-30 my-20 gap-10 *:hover:scale-105 *:transition-all *:duration-300 *:cursor-pointer *:shadow-md">
        <img src="/coffee/prod1.webp" alt="" className="col-span-3" />
        <img src="/coffee/prod2.jpg" alt="" className="col-span-3 w-full"/>

        <img src="/coffee/prod3.jpg" alt="" className="col-span-2" />
        <img src="/coffee/prod4.jpg" alt="" className="col-span-2" />
        <img src="/coffee/prod5.jpg" alt="" className="col-span-2" />

        <img src="/coffee/prod6.jpg" alt="" className="col-span-2" />
        <img src="/coffee/prod7.jpg" alt="" className="col-span-2" />
        <img src="/coffee/prod9.jpg" alt="" className="col-span-2" />


      </Grid>
        <Eyebrow className="text-center">Why us?</Eyebrow>
        <h2 className="font-bold text-center m-0 p-0 mb-15 ">
          Our extraction process
        </h2>
        <Timeline elements={coffeeProcessTimeline}></Timeline>

      <SvgBackground className="p-10" svg="/coffee/coffee-bean.svg" maskSize={100}>
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
