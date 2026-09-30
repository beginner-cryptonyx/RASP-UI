import * as Icons from "lucide-react";

export type IconName = keyof typeof Icons;

export function isIconName(value: any): value is IconName {
  return value in Icons;
}
export interface StatisticProps {
  value: string;
  suffix: string;
  label: string;
}

export interface PricingRule {
  match: Record<string, string>; // partial match on the selection
  price: number;
}