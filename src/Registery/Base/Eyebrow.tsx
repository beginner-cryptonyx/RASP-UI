import type { ReactNode } from "react";
import { cn } from "../../Lib/utils";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={cn("text-sm text-color3 font-semibold m-0 p-0 ", className)}>
      {children}
    </p>
  );
}