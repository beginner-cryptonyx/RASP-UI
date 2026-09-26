import React, { useState } from "react";
import { cn } from "../../Lib/utils";
import { CircleCheck, X, ShoppingCart, Ban, Check } from "lucide-react";
import Grid from "../layout/Grid";

// export default function PricingTable({

export function PriceCard({ name, price, priceSuffix, description }: Plan) {
  return (
    <div className="border border-borderDefault rounded-lg p-4  flex flex-col gap-2">
      <h3 className="text-base font-semibold m-0">{name}</h3>
      <p className="text-xl font-bold">
        <span className="text-4xl">${price}</span>{priceSuffix}
      </p>
      {description && <p className="text-sm text-gray-400">{description}</p>}
    </div>
  );
}

export interface Plan {
  name: string;
  feature: Record<string, string | number | boolean>;
  price: number | string;
  priceSuffix?: string;
  description?: string;
}

export interface PricingTableProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  FeatureList: string[];
  plans: Plan[];
}

export default function Pricing({
  FeatureList,
  plans,
  className,
}: PricingTableProps) {
  return (
    <div className={cn("mx-10 py-10", className)}>
      <Grid columns={4}>
        <div className=""></div>
        {plans.map((plan) => (
          <PriceCard {...plan}></PriceCard>
        ))}
        <div className="col-span-4 text-md">
          {FeatureList.map((feature) => (
            <Grid columns={4} className="py-3 border-b border-gray-600">
              <span className="px-2">{feature}</span>
              {plans.map((plan) => (
                <span className="mx-5">
                  {typeof plan.feature[feature] === "boolean" ? (
                    plan.feature[feature] ? (
                      <Check className="mx- text-green-500" />
                    ) : (
                      <X className="mx- text-red-600" />
                    )
                  ) : plan.feature[feature] !== undefined ? (
                    plan.feature[feature]
                  ) : (
                    <span className="text-gray-500">—</span>
                  )}
                </span>
              ))}
            </Grid>
          ))}
        </div>
      </Grid>
    </div>
  );
}
