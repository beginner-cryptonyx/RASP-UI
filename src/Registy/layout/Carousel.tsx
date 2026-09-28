import useEmblaCarousel from "embla-carousel-react";
import { Children, type ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  loop?: boolean;
  className?: string;
}

export function Carousel({
  children,
  loop = false,
  className,
}: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop });

  return (
    <div className={className}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {Children.map(children, (child) => (
            <div className="min-w-0 flex-[0_0_100%]">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}