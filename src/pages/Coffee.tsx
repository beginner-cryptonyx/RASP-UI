import { coffeePlans, coffeeFeatureList } from "../DummyData";
import PricingTable from "../Registy/Marketing/Pricing";
import useTheme from "../Theme/UseTheme";

export default function Coffee() {
    const themeSystem = useTheme();
    
  return (
    <div className="">
        <h2 className="font-bold text-center mt-10">View our plans</h2>
      <PricingTable plans={coffeePlans} FeatureList={coffeeFeatureList} variant="complex"></PricingTable>
    </div>
  );
}
