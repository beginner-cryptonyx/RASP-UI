import { type LinkProps, Link } from "react-router";
import { buttonVariants, type ButtonProps } from "./Button";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../Lib/utils";

interface LinkButtonProps
  extends LinkProps, VariantProps<typeof buttonVariants> {
  className?: string;
}

export default function LinkButton({
  className,
  variant,
  size,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      {...props}
      className={cn(buttonVariants({ variant, size }), className)}
    ></Link>
  );
}
