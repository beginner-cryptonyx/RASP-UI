import { cn } from "../../Lib/utils";

interface ChoiceButtonProps {
  choices: string[];
  selected: string;
  onSelect: (choice:string) => void;
  className?: string
}
export default function ChoiceButton({ choices, selected, onSelect, className }: ChoiceButtonProps) {
    if (!choices.includes(selected)){
        selected = choices[0]
    }
  return (
    <div className={cn("relative", className)} role="tablist">
      <div className="flex rounded-xl overflow-hidden bg-background3">
        {choices.map((choice) => (
          <button
          onClick={() => onSelect(choice)}
          role="tab"
          key={choice}
            className={cn(
              "px-4 py-2 rounded-xl w-30 text-center cursor-pointer transition-all duration-300",
                choice === selected ? "bg-accent  text-white " : "bg-tansparent text-color1 hover:bg-accent/10"
            )}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}
