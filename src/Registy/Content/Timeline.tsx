import { cva } from "class-variance-authority";
import type { IconName } from "../../Lib/types";
import type { FadeProps } from "../Meta/Fade";
import Icon from "../Meta/Icon";

export interface TimelineElement {
  icon: IconName;
  title: string;
  description?: string;
  date?: {year:number, month:number, day:number}|string
  fade?: boolean|FadeProps
}

interface TimelineProps{
    elements: TimelineElement[];
    splitDate?: boolean;
    alternating?: true
    dateFormat?: "DD/MM/YY"|"ddth of MMMM, YYYY"|"YYYY-MM-DD"
}

export function AlternatingTimeline({elements, splitDate=true}: TimelineProps) {
  return (
    <div className={`px-6 max-w-4xl mx-auto transition-all duration-600`}>

      <div className="relative">
        {/* Center vertical line */}
        <div className={`absolute left-1/2 -translate-x-1/2 -top-12 bottom-8 w-px border-l-2 border-dashed `}/>

        {elements.map((element, i) => {
            const isLeft = splitDate ? i % 2 === 0 : true;
            const visible = true
            // if (typeof element.date === "object"){
            //     const date = ""
            // }

          return (
            <div key={element.title} className={`relative transition-all duration-600 flex items-center mb-16 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

              <div className={`w-1/2 pr-12 ${isLeft ? "text-right" : ""}`}>
                {isLeft && (
                  <div className="mt-1">
                    <h5>{typeof element.date == 'string' && element.date}</h5>
                    <h3 className={`text-xl font-semibold  mb-2`}>{element.title}</h3>
                    <p className="text-text/60 text-sm leading-relaxed">{element.description}</p>
                  </div>
                )}
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 w-13 h-13 rounded-full bg-background4 border border-accent/30 flex items-center justify-center z-10 shadow-sm">
                <Icon className="w-7 h-7 text-accent" name={element.icon}/>
              </div>

              <div className="w-1/2 pl-12">
                {!isLeft && (
                  <>
                    <h3 className={`text-xl font-semibold mb-2`}>{element.title}</h3>
                    <p className="text-text/60 text-sm leading-relaxed">{element.description}</p>
                  </>
                )}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Timeline({elements, splitDate=true, alternating=true}:TimelineProps){
    if (alternating){
        return <AlternatingTimeline elements={elements} splitDate={splitDate}/>
    }
}