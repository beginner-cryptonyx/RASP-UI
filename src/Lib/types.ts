import * as Icons from "lucide-react";
import type { ReactNode } from "react";

export type IconName = keyof typeof Icons;
export type Attributes = Record<string, string|boolean|number>
export type Tags = string[]


export function isIconName(value: unknown): value is IconName {
  return typeof value === "string" && value in Icons;
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
export interface StarsProps {
    stars: number
    numberOfReviews?: number | string
    displayExactStarCount?: boolean
    className?: string
}export interface AccordionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

