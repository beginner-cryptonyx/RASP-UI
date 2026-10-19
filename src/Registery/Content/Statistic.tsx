import { type StatisticProps } from "../../Lib/types"
import { cn } from "../../Lib/utils"

export default function Statistic({value, suffix, label, className}: StatisticProps) {
    return (
        <div className={cn("flex flex-col gap-1", className)}>
            <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-text">{value}</span>
                <span className="text-xl font-bold mb-auto mt-0.5 text-accent">{suffix}</span>
            </div> 
            <span className="tesx-sm text-secondary">{label}</span>
        </div>
    )
}