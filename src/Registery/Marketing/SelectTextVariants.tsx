import { cn } from "../../Lib/utils";

export interface SelectTextVariantsProps {
    labels: string[]
}

interface InternalSelectTextVariantsProps extends SelectTextVariantsProps {
  value: string;
  onChange: (variant: string) => void;
}

export function SelectTextVariants({
  labels,
  value,
  onChange,
}: InternalSelectTextVariantsProps) {
  return (
    <div className="flex flex-row gap-2">
      {labels.map((label) => (
        <button
          key={label}
          onClick={() => onChange(label)}
          className={cn(
            "cursor-pointer rounded-md px-3 py-2 transition-all duration-150",
            value === label
              ? "bg-accent text-accentText ring-2 ring-accent ring-offset-1"
              : "bg-background2 text-textSecondary hover:bg-background3 hover:text-textPrimary"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}