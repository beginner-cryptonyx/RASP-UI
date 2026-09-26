import React, { useState } from "react";
import { cn } from "../../Lib/utils";
import { CircleCheck, X, ShoppingCart, Ban, Check } from "lucide-react";
import Grid from "../layout/Grid";
import ResponsiveView from "../layout/ResponsiveView";

// export default function PricingTable({

export function PriceCardDesktop({
  name,
  price,
  priceSuffix,
  description,
}: Plan) {
  return (
    <div className="border border-borderDefault rounded-lg p-4  flex flex-col gap-2">
      <h3 className="text-base font-semibold m-0">{name}</h3>
      <p className="text-xl font-bold">
        <span className="text-4xl">${price}</span>
        {priceSuffix}
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

export interface PricingTableProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "complex" | "simple";
  FeatureList: string[];
  plans: Plan[];
}

export function SimplePricing({
  FeatureList,
  plans,
  className,
}: PricingTableProps) {
  return (
    <Grid className="mx-10 py-10">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className="border border-borderDefault rounded-lg p-4  flex flex-col gap-2"
        >
          <h3 className="text-base font-semibold m-0">{plan.name}</h3>
          <p className="text-xl font-bold">
            <span className="text-4xl">${plan.price}</span>
            {plan.priceSuffix}
          </p>
          {plan.description && (
            <p className="text-sm text-gray-400">{plan.description}</p>
          )}
          <ul className="my-5 flex flex-col gap-2 text-sm px-6">
            {/* FIX: Map over FeatureList, then extract value from plan.feature */}
            {FeatureList.map((featureName, i) => {
              const value = plan.feature[featureName];

              // Skip rendering or show dash if feature doesn't exist for this plan
              if (value === undefined || value === false) return null;

              return (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500 shrink-0" />
                  <span>
                    {typeof value === "boolean"
                      ? featureName
                      : `${featureName}: ${value}`}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </Grid>
  );
}
export function IndepthPricingDesktop({
  FeatureList,
  plans,
  className,
}: PricingTableProps) {
  return (
    <div className={cn("mx-10 py-10", className)}>
      <Grid columns={4}>
        <div className=""></div>
        {plans.map((plan) => (
          <PriceCardDesktop {...plan}></PriceCardDesktop>
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

export default function PricingTable({
  variant = "complex",
  ...rest
}: PricingTableProps) {
  if (variant === "complex") {
    return <ResponsiveView desktop={<IndepthPricingDesktop {...rest}></IndepthPricingDesktop>} mobile={<SimplePricing {...rest}></SimplePricing>}></ResponsiveView>;
  }
  if (variant === "simple") {
    return <SimplePricing {...rest}></SimplePricing>;
  }
}
