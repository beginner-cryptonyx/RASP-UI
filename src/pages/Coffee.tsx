import { coffeePlans, coffeeFeatureList, coffeeProcessTimeline } from "../DummyData";
import Timeline from "../Registy/Content/Timeline";
import PricingTable from "../Registy/Marketing/Pricing";
import useTheme from "../Theme/UseTheme";

export default function Coffee() {
    const themeSystem = useTheme();
    
  return (
    <div className="">
      <div className="bg-background2 py-10 px-6">
        <h2 className="font-bold text-center mb-15">Our extraction process</h2>
        <Timeline elements={coffeeProcessTimeline}></Timeline>
      </div>
        <h2 className="font-bold text-center mt-10">View our plans</h2>
      <PricingTable plans={coffeePlans} FeatureList={coffeeFeatureList} variant="complex"></PricingTable>
    </div>
  );
}
