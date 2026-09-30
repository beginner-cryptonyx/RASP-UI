import { cva, type VariantProps } from "class-variance-authority";
import { isIconName, type IconName } from "../../Lib/types";
import { cn } from "../../Lib/utils";
import Icon from "../Meta/Icon";

export const BadgeVariants = cva(
  "py-0 my-0 h-fit px-2 w-fit text-xs flex items-center justify-center shadow-sm",
  {
    variants: {
      color: {
        green: "bg-green-100 text-green-900 border-green-500",
        red: "bg-red-100 text-red-900 border-red-500",
        blue: "bg-blue-200/90 text-blue-900 border-blue-500",
        yellow: "bg-yellow-200/90 text-yellow-900 border-yellow-500",
        gray: "bg-gray-200/90 text-gray-900 border-gray-500",
        purple: "bg-purple-200/90 text-purple-900 border-purple-500",
        pink: "bg-pink-200/90 text-pink-900 border-pink-500",
      },
      shape: {
        rounded: "rounded-md",
        square: "rounded-none",
        pill: "rounded-full",
      },
      border: {
        true: "border",
        false: "",
      },
    },
    defaultVariants: {
      color: "red",
      shape: "rounded",
      border: false,
    },
  },
);

export interface BadgeProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof BadgeVariants> {
  displayPiece?: IconName | React.ReactElement;
  text: string | number;
}
export default function Badge({
  displayPiece,
  text,
  color,
  shape,
  border,
  className,
  ...rest
}: BadgeProps) {
  return (
    <div className={cn(BadgeVariants({ color, shape, border }))} {...rest}>
      {isIconName(displayPiece) ? (
        <Icon name={displayPiece} className="scale-60  -m-px"></Icon>
      ) : (
        displayPiece
      )}
      {<span className="text-nowrap">{text}</span>}
    </div>
  );
}
