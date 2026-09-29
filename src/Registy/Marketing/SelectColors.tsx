import { cn } from "../../Lib/utils";

export interface SelectColorsProps {
  ColorButtons: { color: string; colorCode: string }[];
  Variant: "square" | "circle";
}

interface InternalSelectColorsProps extends SelectColorsProps {
  value: string;
  onChange: (color: string) => void;
}

export function SelectColors({
  ColorButtons,
  Variant,
  value,
  onChange,
}: InternalSelectColorsProps) {
  return (
    <div className="flex flex-row gap-2">
      {ColorButtons.map((color) => (
        <button
          key={color.color}
          className={cn(
            "w-8 h-8 cursor-pointer transition-all duration-150",
            Variant === "circle" && "rounded-full",
            value === color.color ? "ring-2 ring-accent ring-offset-1" : "hover:scale-105 hover:ring ring-color3",
          )}
          style={{ backgroundColor: color.colorCode }}
          onClick={() => onChange(color.color)}
        ></button>
      ))}
    </div>
  );
}
