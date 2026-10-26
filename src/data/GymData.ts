import type { StatisticProps, Tags } from "../Lib/types";
import type { TimelineProps } from "../Registery/Content/Timeline";

interface Trainer {
  name: string;
  shortDescription: string;
  longDescription: string;
  imagePath: string;
  tags: Tags;
  experienceYears: number;
  achievements: string[];
  certifications: string[];
  programs: string[];
}

interface Program {
  name: string;
  description: string;
  images: string[];
  tags: Tags;
  experience: ("beginner" | "intermediate" | "advanced")[];
  goals: ("strength" | "hypertrophy" | "endurance")[];
  durationWeeks: number;
  daysPerWeek: number;
  trainerIds: string[];
  statistics: StatisticProps[];
}

interface FeaturedProgram extends Program {
  theme: string;
  progression: TimelineProps;
}

interface MembershipPlan {
  name: string;
  price: number;
  currency: string;
  duration: string;
  description: string;
  features: string[];
  tags: Tags;
}

const Trainers: Record<string, Trainer> = {};


const Programs: Record<string, Program> = {};

const Membership: Record<string, MembershipPlan> = {};

const FeaturedPrograms: Record<string, FeaturedProgram> = {
  "winter-arc": {
    name: "Winter Arc",
    description:
      "A high-volume, muscle-building phase designed to maximize strength and hypertrophy during the winter season. Focuses on heavy compound lifts and structured progressive overload.",
    images: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200",
    ],
    tags: ["Bulking", "Hypertrophy", "Strength", "WinterArc"],
    experience: ["beginner", "intermediate", "advanced"],
    goals: ["strength", "hypertrophy"],
    durationWeeks: 17, // Sep 1 to Dec 31 (~17 weeks)
    daysPerWeek: 6,
    trainerIds: ["00000"],
    theme: "Ocean",
    statistics: [
      {
        value: "540",
        suffix: "+",
        label: "Lifters Joined",
      },
      {
        value: "400",
        suffix: "+",
        label: "PRs Broken",
      },
      {
        value: "150",
        suffix: "%",
        label: "Avg Strength Gain",
      },
      {
        value: "94",
        suffix: "%",
        label: "Program Completion Rate",
      },
    ],
    progression: {
      alternating: "right",
      defaultTextPosition: "below title",
      elements: [
        {
          icon: "ClipboardCheck",
          title: "Baseline & Setup",
          description:
            "Full body analysis, macro calorie surplus calculated, and workout split finalized.",
          date: { day: 1, month: 9, year: 2026 },
        },
        {
          icon: "Dumbbell",
          title: "Progressive Overload Starts",
          description:
            "Start hitting structured progressive overload and setting new PRs on primary compound exercises.",
          date: { day: 15, month: 10, year: 2026 },
        },
        {
          icon: "TrendingUp",
          title: "Peak Mass & Strength Phase",
          description:
            "Noticeable muscle fullness and massive strength gains across all major movement patterns.",
          date: { day: 1, month: 11, year: 2026 },
        },
        {
          icon: "Flame",
          title: "Max Hypertrophy Push",
          description:
            "Final push for maximum fiber recruitment and hypertrophy capacity.",
          date: { day: 1, month: 12, year: 2026 },
        },
        {
          icon: "Trophy",
          title: "Transformation & Peak Strength",
          description:
            "Achieve anywhere from 1.2x to 2.5x strength gains on core lifts before transitioning.",
          date: { day: 31, month: 12, year: 2026 },
        },
      ],
    },
  },

  "summer-shred": {
    name: "Summer Shred",
    description:
      "A targeted fat-loss and muscle retention program aimed at maximizing definition and conditioning. Features moderate volume resistance training paired with strategic cardio conditioning.",
    images: [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200",
    ],
    tags: ["Cutting", "Fat Loss", "Conditioning", "SummerShred"],
    experience: ["beginner", "intermediate", "advanced"],
    goals: ["hypertrophy", "endurance"],
    durationWeeks: 17, // Jan 1 to Apr 30 (~17 weeks)
    daysPerWeek: 4,
    trainerIds: ["00000"],
    theme: "Sunset",
    statistics: [
      {
        value: "620",
        suffix: "+",
        label: "Active Athletes",
      },
      {
        value: "4.8",
        suffix: "kg",
        label: "Avg Fat Lost",
      },
      {
        value: "98",
        suffix: "%",
        label: "Muscle Retention Rate",
      },
      {
        value: "89",
        suffix: "%",
        label: "Sub-10% Bodyfat Goal Met",
      },
    ],
    progression: {
      alternating: "right",
      defaultTextPosition: "below title",
      elements: [
        {
          icon: "Utensils",
          title: "Calorie Deficit Setup",
          description:
            "Sustainable calorie deficit meal plan created for seamless fat loss without crashing.",
          date: { day: 1, month: 1, year: 2027 },
        },
        {
          icon: "BatteryCharging",
          title: "Energy Stabilization",
          description:
            "Adapt to the cutting energy levels; minor strength adjustments (e.g. -2kg on bench) while keeping high energy.",
          date: { day: 15, month: 1, year: 2027 },
        },
        {
          icon: "Activity",
          title: "Visual Definition Begins",
          description:
            "Notice initial body composition changes and drop around 2-3 kg of body fat.",
          date: { day: 28, month: 2, year: 2027 },
        },
        {
          icon: "ShieldCheck",
          title: "Strength Plateau Defense",
          description:
            "Strength stabilizes completely—fat loss continues without sacrificing lean tissue.",
          date: { day: 15, month: 3, year: 2027 },
        },
        {
          icon: "Sun",
          title: "Peak Conditioning & Ab Definition",
          description:
            "Sharp abdominal definition, optimal vascularity, and beach-ready body composition.",
          date: { day: 30, month: 4, year: 2027 },
        },
      ],
    },
  },
};

export {FeaturedPrograms }