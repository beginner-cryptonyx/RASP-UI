// ToDo: actually implement the side drawer, currently just a placeholder for the future implementation

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

interface SideDrawerProps {
  direction: "left" | "right";
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export default function SideDrawer({
  direction,
  isOpen,
  onClose,
  children,
  title = "Solvinno",
}: SideDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const sideClass = direction === "right" ? "right-0" : "left-0";
  const closedTransform =
    direction === "right" ? "translate-x-full" : "-translate-x-full";

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        className={`fixed top-0 ${sideClass} h-full w-72 bg-[#1a2436] z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : closedTransform}`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="text-white font-bold text-lg">{title}</span>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white text-2xl leading-none"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </>
  );
}