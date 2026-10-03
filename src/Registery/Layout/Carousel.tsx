import React, { useEffect, useRef, useState } from "react";

interface CarouselProps {
  children: React.ReactNode;
  duration?: number;
  loop?: boolean;
  width?: string | number;
}

export default function Carousel({
  children,
  duration = 500,
  loop = true,
  width = "100vw",
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dragging, setDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    startTime: number;
    delta: number;
  } | null>(null);
  const didDragRef = useRef(false);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, []);

  const items = React.Children.toArray(children).filter(
    (c) => c !== null && c !== undefined,
  );
  const count = items.length;

  if (count === 0) return null;
  if (count === 1) return <>{items[0]}</>;

  const prevItem = loop || index > 0 ? items[(index - 1 + count) % count] : null;
  const nextItem = loop || index < count - 1 ? items[(index + 1) % count] : null;
  const slides = [prevItem, items[index], nextItem];

  const busy = animating || dragging;
  const canPrev = !busy && (loop || index > 0);
  const canNext = !busy && (loop || index < count - 1);

  function commitSlide(direction: 1 | -1) {
    const grid = gridRef.current;
    if (!grid) return;
    grid.style.transition = "none";
    grid.style.transform = "translateX(0)";
    setIndex((i) => (i + direction + count) % count);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        grid.style.transition = `transform ${duration}ms ease`;
        setAnimating(false);
      });
    });

    timerRef.current = null;
  }

  function slide(direction: 1 | -1) {
    const grid = gridRef.current;
    if (!grid || animating) return;
    if (direction === -1 && !loop && index === 0) return;
    if (direction === 1 && !loop && index === count - 1) return;

    setAnimating(true);
    grid.style.transition = `transform ${duration}ms ease`;
    grid.style.transform =
      direction === 1
        ? "translateX(calc(-100% / 3))"
        : "translateX(calc(100% / 3))";
    timerRef.current = window.setTimeout(() => commitSlide(direction), duration);
  }

  function onPointerDown(e: React.PointerEvent) {
    if (animating) return;
    if ((e.target as Element).closest("button")) return;

    const grid = gridRef.current;
    const container = containerRef.current;
    if (!grid || !container) return;

    dragRef.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startTime: Date.now(),
      delta: 0,
    };
    didDragRef.current = false;

    grid.style.transition = "none";
    container.setPointerCapture(e.pointerId);
    setDragging(true);
  }

  function onPointerMove(e: React.PointerEvent) {
    const drag = dragRef.current;
    const grid = gridRef.current;
    if (!drag || !grid || e.pointerId !== drag.pointerId) return;

    let delta = e.clientX - drag.startX;
    drag.delta = delta;

    if (Math.abs(delta) > 5) didDragRef.current = true;

    // Rubber-band at the edges when not looping.
    if (!loop) {
      if (index === 0 && delta > 0) delta *= 0.3;
      if (index === count - 1 && delta < 0) delta *= 0.3;
    }

    grid.style.transform = `translateX(${delta}px)`;
  }

  function endDrag(e: React.PointerEvent, cancelled: boolean) {
    const drag = dragRef.current;
    const grid = gridRef.current;
    const container = containerRef.current;
    if (!drag || !grid) return;
    if (e.pointerId !== drag.pointerId) return;

    dragRef.current = null;
    setDragging(false);
    if (container?.hasPointerCapture(e.pointerId)) {
      container.releasePointerCapture(e.pointerId);
    }

    const containerW = container?.clientWidth ?? 0;
    const threshold = containerW * 0.2;
    const dt = Math.max(1, Date.now() - drag.startTime);
    const velocity = drag.delta / dt; // px / ms

    const goNext =
      !cancelled &&
      (drag.delta < -threshold || (velocity < -0.5 && drag.delta < -10)) &&
      (loop || index < count - 1);

    const goPrev =
      !cancelled &&
      (drag.delta > threshold || (velocity > 0.5 && drag.delta > 10)) &&
      (loop || index > 0);

    if (goNext) {
      setAnimating(true);
      grid.style.transition = `transform ${duration}ms ease`;
      grid.style.transform = "translateX(calc(-100% / 3))";
      timerRef.current = window.setTimeout(() => commitSlide(1), duration);
    } else if (goPrev) {
      setAnimating(true);
      grid.style.transition = `transform ${duration}ms ease`;
      grid.style.transform = "translateX(calc(100% / 3))";
      timerRef.current = window.setTimeout(() => commitSlide(-1), duration);
    } else {
      grid.style.transition = `transform ${duration}ms ease`;
      grid.style.transform = "translateX(0)";
    }

    // Clear the flag on the next tick, after any synthetic click has fired.
    setTimeout(() => {
      didDragRef.current = false;
    }, 0);
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden select-none"
      style={{ width, touchAction: "pan-y" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={(e) => endDrag(e, false)}
      onPointerCancel={(e) => endDrag(e, true)}
      onClickCapture={(e) => {
        if (didDragRef.current) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
    >
      <p className="bg-black text-white text-2xl px-4">
        {index}/{count - 1}
      </p>

      <div className="absolute z-10 flex w-[90%] justify-between">
        <button
          onClick={() => slide(-1)}
          disabled={!canPrev}
          className="cursor-pointer bg-black text-white text-2xl disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={() => slide(1)}
          disabled={!canNext}
          className="cursor-pointer bg-black text-white text-2xl disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-3 grid-rows-1"
        style={{ width: "300%", marginLeft: "-100%" }}
      >
        <div className="overflow-hidden">{slides[0]}</div>
        <div className="overflow-hidden">{slides[1]}</div>
        <div className="overflow-hidden">{slides[2]}</div>
      </div>
    </div>
  );
}