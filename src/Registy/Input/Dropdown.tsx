import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "../../Lib/utils";

interface DropdownProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange"
> {
  options: string[];
  defaultLabel?: string;
  onChange?: (value: string) => void;
}

export default function Dropdown({
  options,
  defaultLabel = "Select an option",
  onChange,
  className,
  ...divProps
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(defaultLabel);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <div className="relative w-64" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        {...divProps}
        className={cn(
          "w-full flex items-center justify-between px-4 py-2.5 bg-background1 border border-borderDefault rounded-lg shadow-sm text-sm hover:bg-background2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accentHover transition cursor-pointer",
          className,
        )}
      >
        <span className="text-textPrimary">{selected}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
  className={cn(
    "absolute z-20 mt-1 w-full rounded-lg shadow-lg bg-background4 border border-gray-200 transition-all duration-250 ease-in-out grid",
    isOpen 
      ? "grid-rows-1 opacity-100 scale-100" 
      : "grid-rows-0 opacity-0 scale-95 pointer-events-none"
  )}
      >
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => handleSelect(option)}
            className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-left text-accent hover:bg-accent hover:text-accentText transition cursor-pointer"
          >
            {option}
            {selected === option && <Check className="w-4 h-4" />}
          </button>
        ))}
      </div>
    </div>
  );
}
