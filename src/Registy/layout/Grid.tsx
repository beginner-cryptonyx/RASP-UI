import { cn } from "../../Lib/utils"
import type { HTMLAttributes } from "react"

type ColCount = 1|2|3|4|5|6|7|8|9|10|11|12

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: ColCount
  smallScreenColumns?: ColCount
  midScreenColumns?: ColCount
}

const colsMap: Record<ColCount, string> = {
  1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4",
  5: "grid-cols-5", 6: "grid-cols-6", 7: "grid-cols-7", 8: "grid-cols-8",
  9: "grid-cols-9", 10: "grid-cols-10", 11: "grid-cols-11", 12: "grid-cols-12",
}

const smColsMap: Record<ColCount, string> = {
  1: "sm:grid-cols-1", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-4",
  5: "sm:grid-cols-5", 6: "sm:grid-cols-6", 7: "sm:grid-cols-7", 8: "sm:grid-cols-8",
  9: "sm:grid-cols-9", 10: "sm:grid-cols-10", 11: "sm:grid-cols-11", 12: "sm:grid-cols-12",
}

const mdColsMap: Record<ColCount, string> = {
  1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4",
  5: "md:grid-cols-5", 6: "md:grid-cols-6", 7: "md:grid-cols-7", 8: "md:grid-cols-8",
  9: "md:grid-cols-9", 10: "md:grid-cols-10", 11: "md:grid-cols-11", 12: "md:grid-cols-12",
}

export default function Grid({
  columns = 3,
  smallScreenColumns = 1,
  midScreenColumns = 2,
  className,
  children,
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        colsMap[smallScreenColumns],
        smColsMap[midScreenColumns],
        mdColsMap[columns],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}