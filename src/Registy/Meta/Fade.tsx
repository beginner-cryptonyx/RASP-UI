import { cva, type VariantProps } from "class-variance-authority";
import { useEffect, useRef, useState, type HTMLAttributes } from "react";
import { cn } from "../../Lib/utils";

const FadeVariants = cva("transition-all opacity-0", {
  variants: {
    speed: {
      extremelySlow: "duration-1000",
      verySlow: "duration-700",
      slow: "duration-500",
      normal: "duration-300",
      fast: "duration-200",
      veryFast: "duration-150",
      extremelyFast: "duration-100",
      superFast: "duration-75",
    },
  },
});

export function useFadeIn(threshold: number = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only animate once
        }
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
// const distancePx: Record<number, number> = { 1: 4, 2: 8, 3: 12, 4: 16, 5: 20 };

const directionOffset: Record<string, (px: number) => string> = {
  up: (px) => `translateY(-${px}px)`,
  down: (px) => `translateY(${px}px)`,
  left: (px) => `translateX(${px}px)`,
  right: (px) => `translateX(-${px}px)`,
};

interface FadeProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof FadeVariants> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  threshold?: number
}


export default function Fade({
  threshold = 0.1,
  direction = "down",
  speed = "slow",
  distance = 15,
  children,
  className,
  style,
  ...props
}: FadeProps) {
  const { ref, visible } = useFadeIn(threshold);
  return (
    <div
      ref={ref}
      className={cn(FadeVariants({ speed }), visible && "opacity-100", className)}
      style={{
        transform: visible ? "none" : directionOffset[direction](distance*3),
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}