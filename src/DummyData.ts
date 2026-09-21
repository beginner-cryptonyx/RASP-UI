import { type StatisticProps } from "./Lib/types";
import {
  type ImageCardProps,
  type IconCardProps,
} from "./Registy/Content/Card";

export const statistics: StatisticProps[] = [
  {
    value: "9",
    suffix: "+",
    label: "Years of Self proclaimed Experience",
  },
  {
    value: "500",
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: "40",
    suffix: "+",
    label: "Global Clients",
  },
  {
    value: "98",
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    value: "24",
    suffix: "/7",
    label: "Dedicated Support",
  },
  {
    value: "20",
    suffix: "+",
    label: "Countries Served",
  },
];

export const destinations: ImageCardProps[] = [
  {
    title: "Japan",
    subtext: "East Asia",
    description:
      "A seamless blend of ancient traditions, tranquil gardens, and futuristic architecture.",
    imageType: "contain",
    imageSrc:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Scenic view of Japan featuring a historic pagoda and Mount Fuji",
  },
  {
    title: "Greece",
    subtext: "Southern Europe",
    description:
      "Sun-drenched Mediterranean coastlines, historic ruins, and iconic whitewashed villages.",
    imageType: "contain",
    imageSrc:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1600&auto=format&fit=crop",
    imageAlt:
      "Blue domed church overlooking the Aegean Sea in Santorini, Greece",
  },
  {
    title: "Canada",
    subtext: "North America",
    description:
      "Vast wilderness landscapes, pristine glacial lakes, and dramatic alpine mountain ranges.",
    imageType: "contain",
    imageSrc:
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Turquoise glacial water at Moraine Lake in Banff, Canada",
  },
  {
    title: "Italy",
    subtext: "Southern Europe",
    description:
      "Renowned art, centuries of rich history, and breathtaking coastal cliffside towns.",
    imageType: "contain",
    imageSrc:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Colorful houses on the cliffside coast of Cinque Terre, Italy",
  },
  {
    title: "Switzerland",
    subtext: "Central Europe",
    description:
      "Soaring Alpine peaks, crystal-clear lakes, and picturesque mountain villages.",
    imageType: "contain",
    imageSrc:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Snow-capped Swiss Alps rising above a green mountain valley",
  },
  {
    title: "Iceland",
    subtext: "Northern Europe",
    description:
      "Dramatic volcanic scenery, glowing northern lights, roaring waterfalls, and massive glaciers.",
    imageType: "contain",
    imageSrc:
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Waterfall flowing down black volcanic rock in Iceland",
  },
  {
    title: "Australia",
    subtext: "Oceania",
    description:
      "Sun-soaked beaches, vibrant marine ecosystems, and rugged desert outback landscapes.",
    imageType: "contain",
    imageSrc:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Sydney Opera House and harbor skyline in Australia",
  },
  {
    title: "France",
    subtext: "Western Europe",
    description:
      "World-class art collections, historic châteaux, lavender fields, and iconic city landmarks.",
    imageType: "contain",
    imageSrc:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Eiffel Tower framed by spring trees in Paris, France",
  },
  // {
  //   title: "Norway",
  //   subtext: "Northern Europe",
  //   description: "Deep coastal fjords, towering snow-capped mountains, and enchanting aurora borealis displays.",
  //   imageType: "contain",
  //   imageSrc: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?q=80&w=1600&auto=format&fit=crop",
  //   imageAlt: "Fjord waters surrounded by steep mountains in Norway"
  // },
  // {
  //   title: "Brazil",
  //   subtext: "South America",
  //   description: "Tropical rainforests, lively coastal cities, and iconic white-sand oceanfront beaches.",
  //   imageType: "contain",
  //   imageSrc: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1600&auto=format&fit=crop",
  //   imageAlt: "Aerial view of Rio de Janeiro coastline and mountains in Brazil"
  // }
];

export const coffeeServices: IconCardProps[] = [
  {
    title: "Artisanal Roasting",
    subtext: "Craftsmanship",
    description:
      "Small-batch single-origin beans roasted daily to highlight unique flavor profiles.",
    icon: "Bean",
    iconAlign: "left",
  },
  {
    title: "Custom Blends",
    subtext: "Flavor Profile",
    description:
      "Tailor-made espresso and filter roasts crafted to match your exact taste preferences.",
    icon: "CupSoda",
    iconAlign: "left",
  },
  {
    title: "Monthly Bean Club",
    subtext: "Subscriptions",
    description:
      "Freshly roasted specialty coffees delivered straight to your doorstep every two weeks.",
    icon: "PackageCheck",
    iconAlign: "left",
  },
  {
    title: "Masterclass Workshops",
    subtext: "Education",
    description:
      "Hands-on espresso extraction and latte art training led by certified baristas.",
    icon: "Award",
    iconAlign: "left",
  },
];

export const ourServices: Record<
  "coffee" | "agency" | "gym",
  {
    features: string[];
    imageSrc: string;
    imageType: "full" | "contain";
    buttonItems: { label: string; url: string };
  }
> = {
  agency: {
    features: [
      "Custom Web Applications",
      "UI/UX Prototyping",
      "E-commerce Solutions",
      "SEO & Analytics",
      "24/7 Maintenance",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    imageType: "full",
    buttonItems: { label: "View Portfolio", url: "/services/agency" },
  },
  gym: {
    features: [
      "24/7 Facility Access",
      "1-on-1 Personal Training",
      "Group Fitness Classes",
      "Sauna & Recovery Spa",
      "Custom Nutrition Plans",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    imageType: "full",
    buttonItems: { label: "Explore Memberships", url: "/services/gym" },
  },
  coffee: {
    features: [
      "Single-Origin Beans",
      "Monthly Tasting Box",
      "Wholesale Supply",
      "Barista Equipment",
      "In-Store Pickup",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    imageType: "full",
    buttonItems: { label: "Shop Roasts", url: "/services/coffee" },
  },
};