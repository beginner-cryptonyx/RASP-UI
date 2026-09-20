import * as Icons from "lucide-react";
import type React from "react";
import type { IconName } from "../../Lib/types";

interface IconProps {
  name: IconName;
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  const LucideIcon = Icons[name] as React.ElementType;

  if (!LucideIcon) return null; // safety

  return <LucideIcon className={className} />;
}