import * as Icons from "lucide-react";

export type IconName = keyof typeof Icons;


export interface StatisticProps{
    value: string;
    suffix: string;
    label: string
}