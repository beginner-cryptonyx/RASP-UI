import { cn } from "../../Lib/utils";

interface ChoiceButtonProps {
  choices: string[];
  selected: string;
  onSelect: (choice:string) => void;
}
export default function ChoiceButton({ choices, selected, onSelect }: ChoiceButtonProps) {
    if (!choices.includes(selected)){
        selected = choices[0]
    }
  return (
    <div className="relative" role="tablist">
      <div className="flex rounded-xl overflow-hidden">
        {choices.map((choice) => (
          <button
          onClick={() => onSelect(choice)}
          role="tab"
          key={choice}
            className={cn(
              "px-4 py-2 rounded-xl w-30 text-center cursor-pointer  transition-all duration-300",
                choice === selected ? "bg-accent" : "bg-transparent"
            )}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}
