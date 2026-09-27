// ToDo: defaultFade isn't respected per-item in AlternatingTimeline

import type { IconName } from "../../Lib/types";
import { FormatDate, type dateFormats } from "../../Lib/utils";
import ResponsiveView from "../Layout/ResponsiveView";
import type { FadeProps } from "../Meta/Fade";
import Fade from "../Meta/Fade";
import Icon from "../Meta/Icon";

export interface TimelineElement {
  icon: IconName;
  title: string;
  description?: string | React.ReactNode;
  date?:
    | { day: number; month: number; year: number; dateFormat?: dateFormats }
    | string;
  fade?: boolean | FadeProps;
}

export interface TimelineProps {
  elements: TimelineElement[];
  defaultFade?: boolean | FadeProps;
  defaultDateFormat?: dateFormats;
  alternating?: boolean | "left" | "right";
  defaultTextPosition?: "above title" | "below title";
}

function AlternatingTimelineComponent({
  icon,
  title,
  description,
  date,
  fade,
  side,
  dateFormat,
  defaultTextPosition,
}: TimelineElement & {
  side: "left" | "right";
  dateFormat: dateFormats;
  defaultTextPosition?: "above title" | "below title";
}) {
  const isLeft = side === "left";
  return (
    <Fade {...(typeof fade === "object" ? fade : {})}>
      <div className="relative transition-all duration-600 flex items-center mb-16">
        {/* Left side */}
        <div className={`w-1/2 pr-12 ${isLeft ? "text-right" : ""}`}>
          {isLeft && (
            <div className="mt-1">
              {date && defaultTextPosition === "above title" && (
                <p className="text-color1 text-sm mb-0.5">
                  {typeof date === "string"
                    ? date
                    : FormatDate(date.day, date.month, date.year, dateFormat)}
                </p>
              )}
              <h3 className="text-xl font-semibold text-textPrimary mb-0">
                {title}
              </h3>
              {date && defaultTextPosition === "below title" && (
                <p className="text-color1 text-xs mb-2">
                  {typeof date === "string"
                    ? date
                    : FormatDate(date.day, date.month, date.year, dateFormat)}
                </p>
              )}
              {description && (
                <p className="text-textPrimary/60 text-sm leading-relaxed mt-2">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Center icon */}
        <div className="absolute left-1/2 -translate-x-1/2 w-13 h-13 rounded-full bg-background2 border border-accent/30 flex items-center justify-center z-10 shadow-sm">
          <Icon className="w-7 h-7 text-accent" name={icon} />
        </div>

        {/* Right side */}
        <div className="w-1/2 pl-12">
          {!isLeft && (
            <div className="mt-1">
              {date && defaultTextPosition === "above title" && (
                <p className="text-color1 text-sm mb-0.5">
                  {typeof date === "string"
                    ? date
                    : FormatDate(date.day, date.month, date.year, dateFormat)}
                </p>
              )}
              <h3 className="text-xl font-semibold text-textPrimary mb-0">
                {title}
              </h3>
              {date && defaultTextPosition === "below title" && (
                <p className="text-color1 text-xs">
                  {typeof date === "string"
                    ? date
                    : FormatDate(date.day, date.month, date.year, dateFormat)}
                </p>
              )}
              {description && (
                <p className="text-textPrimary/60 text-sm leading-relaxed mt-2">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
export function AlternatingTimeline({
  elements,
  defaultFade = true,
  defaultDateFormat = "do MMMM, yyy",
  defaultTextPosition = "above title",
}: TimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div
        className={`absolute left-1/2 -translate-x-1/2 -top-12 -bottom-8 w-px border-l-2 border-dashed`}
      />
      {elements.map((item, i) => {
        const direction: "left" | "right" = i % 2 === 0 ? "right" : "left";

        return (
          <AlternatingTimelineComponent
            {...item}
            side={direction}
            dateFormat={defaultDateFormat}
            defaultTextPosition={defaultTextPosition}
            fade={defaultFade}
          />
        );
      })}
    </div>
  );
}

function DirectionedTimelineComponent({
  icon,
  title,
  description,
  date,
  fade,
  side,
  dateFormat,
  defaultTextPosition,
}: TimelineElement & {
  side: "left" | "right";
  dateFormat: dateFormats;
  defaultTextPosition?: "above title" | "below title";
}) {
  const isLeft = side === "left";
  return (
    <Fade {...(typeof fade === "object" ? fade : {})}>
      <div
        className={`relative transition-all duration-600 flex items-center mb-10 ${
          isLeft ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Icon */}
        <div className="w-13 h-13 shrink-0 rounded-full bg-background2 border border-accent/30 flex items-center justify-center z-10 shadow-sm">
          <Icon className="w-7 h-7 text-accent" name={icon} />
        </div>

        {/* Content */}
        <div
          className={`mt-1 ${isLeft ? "pr-6 text-right" : "pl-6 text-left"}`}
        >
          {date && defaultTextPosition === "above title" && (
            <p className="text-color1 text-sm mb-0.5">
              {typeof date === "string"
                ? date
                : FormatDate(date.day, date.month, date.year, dateFormat)}
            </p>
          )}
          <h3 className="text-xl font-semibold text-textPrimary mb-0">
            {title}
          </h3>
          {date && defaultTextPosition === "below title" && (
            <p className="text-color1 text-xs mb-2">
              {typeof date === "string"
                ? date
                : FormatDate(date.day, date.month, date.year, dateFormat)}
            </p>
          )}
          {description && (
            <p className="text-textPrimary/60 text-sm leading-relaxed mt-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </Fade>
  );
}

export function DirectionedTimeline({
  elements,
  defaultFade = true,
  defaultDateFormat = "do MMMM, yyy",
  defaultTextPosition = "above title",
  direction = "right",
}: TimelineProps & { direction?: "left" | "right" }) {
  return (
    <div className={`relative max-w-xl`}>
      <div
        className={`absolute top-0 bottom-0 w-px border-l-2 border-dashed ${
          direction === "left" ? "right-6.5" : "left-6.5"
        }`}
      />
      {elements.map((item, i) => (
        <DirectionedTimelineComponent
          key={i}
          {...item}
          side={direction}
          dateFormat={defaultDateFormat}
          defaultTextPosition={defaultTextPosition}
          fade={item.fade ?? defaultFade}
        />
      ))}
    </div>
  );
}

export default function Timeline({
  alternating = true,
  ...props
}: TimelineProps) {
  if (typeof alternating === "boolean") {
    return (
      <ResponsiveView
        desktop={<AlternatingTimeline {...props} />}
        mobile={<DirectionedTimeline {...props} direction={"right"} />}
      ></ResponsiveView>
    );
  } else {
    return <DirectionedTimeline {...props} direction={alternating} />;
  }
}
