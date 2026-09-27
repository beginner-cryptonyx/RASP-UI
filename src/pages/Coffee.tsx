import { coffeePlans, coffeeFeatureList, coffeeProcessTimeline } from "../DummyData";
import Eyebrow from "../Registy/Base/Eyebrow";
import Timeline from "../Registy/Content/Timeline";
import PricingTable from "../Registy/Marketing/Pricing";
import useTheme from "../Theme/UseTheme";

export default function Coffee() {
    const themeSystem = useTheme();
    
  return (
    <div className="">
      <div className="bg-background2 py-10 px-6">
        <Eyebrow className="text-center">Why us?</Eyebrow>
        <h2 className="font-bold text-center m-0 p-0 mb-15 ">Our extraction process</h2>
        <Timeline elements={coffeeProcessTimeline}></Timeline>
      </div>
        <div className="py-10">
          <Eyebrow className="text-center">Still Confused?</Eyebrow>
          <h2 className="font-bold text-center ">View our plans</h2>
                <PricingTable plans={coffeePlans} FeatureList={coffeeFeatureList} variant="complex"></PricingTable>
        </div>
    </div>
  );
}
