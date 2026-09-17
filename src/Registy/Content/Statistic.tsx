import { type StatisticProps } from "../../Lib/types"

export default function Statistic({value, suffix, label}: StatisticProps) {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-text">{value}</span>
                <span className="text-xl font-bold mb-auto mt-0.5 text-accent">{suffix}</span>
            </div> 
            <span className="tesx-sm text-secondary">{label}</span>
        </div>
    )
}