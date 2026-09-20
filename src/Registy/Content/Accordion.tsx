import { useState, type ReactNode } from "react";
import { cn } from "../../Lib/utils";

interface AccordionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function Accordion({
  title,
  icon,
  children,
  defaultOpen = false,
  className,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("border-b border-accent mx-3 hover:bg-background2 transition-all duration-150 group", className)}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className={cn(
          "flex w-full items-center gap-4 py-5 justify-center",
          "text-left transition-colors",
          "cursor-pointer",
          "border-y px-2 border-accent"
        )}
      >
        {icon && <span className="shrink-0 text-accent">{icon}</span>}

        <h4 className="flex-1 text-textPrimary my-0">{title}</h4>

        <span
          className={cn(
            "shrink-0 text-2xl m-0 p-0 leading-none text-textPrimary",
            "transition-transform duration-300",
            "font-black",
            "transition-all duration-200"
          )}
          aria-hidden="true"
        >
          {isOpen ? "×" : "+"}
        </span>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-5 text-textSecondary mt-2 mx-2 px-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
