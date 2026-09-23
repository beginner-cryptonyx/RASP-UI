import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../Lib/utils";

export const buttonVariants = cva(
  "transition-all duration-300 disabled:pointer-events-none m-1",
  {
    variants: {
      variant: {
        default: "bg-accent hover:bg-accent/90 cursor-pointer rounded-md hover:scale-[102%] active:scale-[98%] hover:-translate-y-0.5 hover:-translate-x-0.5 active:translate-0" ,
        outline: "border-2 border-accent bg-background1 hover:bg-accent cursor-pointer rounded-sm",
        ghost: "hover:bg-accent hover:text-background1",
        maximalist: "flex items-center justify-center border-b-2 border-r-2 border-t border-l bg-accent text-center hover:border-b-[6px] hover:border-r-8 transition-all duration-150 text-white"
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-base",
        full: "w-full h-13"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
