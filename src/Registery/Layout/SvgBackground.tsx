import React from "react";

interface SvgBackgroundProps {
  svg: string;
  color?: string;
  maskSize?: number | string;
  className?: string;
  children?: React.ReactNode;
}

export function SvgBackground({
  svg,
  color = "rgba(100, 100, 100, 0.05)",
  maskSize = 200,
  className,
  children,
}: SvgBackgroundProps) {
  const size = typeof maskSize === "number" ? `${maskSize}px` : maskSize;

  return (
    <div className={`relative isolate ${className ?? ""}`}>
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundColor: color,
          maskImage: `url('${svg}')`,
          WebkitMaskImage: `url('${svg}')`,
          maskRepeat: "repeat",
          WebkitMaskRepeat: "repeat",
          maskSize: size,
          WebkitMaskSize: size,
        }}
      />

      {children}
    </div>
  );
}