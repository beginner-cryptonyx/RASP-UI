import React from "react";

interface ResponsiveViewProps {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
  tablet?: React.ReactNode;
  className?: string;
}

export default function ResponsiveView({
  mobile,
  desktop,
  tablet,
  className,
}: ResponsiveViewProps) {
  return (
    <div className={className}>
      {tablet ? (
        <>
          <div className="block sm:hidden">{mobile}</div>
          <div className="hidden sm:block lg:hidden">{tablet}</div>
          <div className="hidden lg:block">{desktop}</div>
        </>
      ) : (
        <>
          <div className="block md:hidden">{mobile}</div>
          <div className="hidden md:block">{desktop}</div>
        </>
      )}
    </div>
  );
}
