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