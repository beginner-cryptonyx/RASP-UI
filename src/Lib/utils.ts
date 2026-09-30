import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from 'date-fns';

export type dateFormats =
  | "MMM Do, yyyy"
  | "do MMM, yyy"
  | "do MMM"
  | "MMM do"
  | "MMMM Do, yyyy"
  | "do MMMM, yyy"
  | "do MMMM"
  | "MMMM do";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function FormatDate(day:number, month:number, year:number, dateFormat:dateFormats){
  const dateObj = new Date(year, month - 1, day);
  return format(dateObj, dateFormat)
}

export interface PricingRule {
  match: Record<string, string>; // every key here must equal the selection
  price: number;
}

export function getPrice(
  selected: Record<string, string>,
  pricingModel: PricingRule[],
): number | undefined {
  let best: PricingRule | undefined;
  let bestSpecificity = -1;

  for (const rule of pricingModel) {
    const keys = Object.keys(rule.match);

    // rule applies only if every key it names matches the current selection
    const matches = keys.every((key) => selected[key] === rule.match[key]);
    if (!matches) continue;

    // more keys matched = more specific; strict ">" means the first rule wins ties
    if (keys.length > bestSpecificity) {
      best = rule;
      bestSpecificity = keys.length;
    }
  }

  return best?.price;
}

