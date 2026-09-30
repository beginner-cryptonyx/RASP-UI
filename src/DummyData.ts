import { type StatisticProps } from "./Lib/types";
import type { IconCardProps, ImageCardProps } from "./Registery/Content/Cards/Cards";

import type { TimelineElement } from "./Registery/Content/Timeline";
import type { ProductPageProps } from "./Registery/Marketing/ProductPage";

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
    price?: {
      price: number | React.ReactNode | string;
      priceLabel?: string;
      priceSuffix?: string;
    };
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
    price: {
      price: "$ 100",
      priceLabel: "starting from",
      priceSuffix: "per year",
    },
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

// Export 1: Feature List (Defines the rows for the pricing table)
export const coffeeFeatureList: string[] = [
  "Deliveries",
  "Bags per delivery",
  "Rare & Micro-lot brews",
  "Custom grind options",
  "Tasting notes & brew guides",
  "Store discount",
  "Virtual cupping sessions",
] as const;

// Export 2: Plans Data (Keys in `feature` match `coffeeFeatureList` exactly)
export const coffeePlans: {
  name: string;
  feature: Record<
    (typeof coffeeFeatureList)[number],
    string | number | boolean
  >;
  price: number | string;
  priceSuffix?: string;
  description?: string;
}[] = [
  {
    name: "The Casual Sip",
    price: 18,
    priceSuffix: "/month",
    description:
      "Great for everyday coffee drinkers wanting freshly roasted staple beans monthly.",
    feature: {
      Deliveries: "1 / Month",
      "Bags per delivery": 1,
      "Rare & Micro-lot brews": false,
      "Custom grind options": true,
      "Tasting notes & brew guides": false,
      "Store discount": "10%",
      "Virtual cupping sessions": false,
    },
  },
  {
    name: "Roaster’s Choice",
    price: 32,
    priceSuffix: "/month",
    description:
      "Designed for coffee enthusiasts looking to explore rotating seasonal micro-lots.",
    feature: {
      Deliveries: "1 / Month",
      "Bags per delivery": 2,
      "Rare & Micro-lot brews": true,
      "Custom grind options": true,
      "Tasting notes & brew guides": true,
      "Store discount": "15%",
      "Virtual cupping sessions": false,
    },
  },
  {
    name: "The Connoisseur",
    price: 58,
    priceSuffix: "/month",
    description:
      "Our premier plan featuring competition-grade brews delivered twice monthly.",
    feature: {
      Deliveries: "2 / Month",
      "Bags per delivery": 2,
      "Rare & Micro-lot brews": true,
      "Custom grind options": true,
      "Tasting notes & brew guides": true,
      "Store discount": "20%",
      "Virtual cupping sessions": true,
    },
  },
];

export const gymProgressionTimeline: TimelineElement[] = [
  {
    icon: "UserCheck",
    title: "Program Onboarding & Assessment",
    description:
      "Kick off your New Year special plan with a full-body composition scan, baseline strength testing, and custom macro setup with your personal trainer.",
    date: { year: 2026, month: 1, day: 5 },
    fade: true,
  },
  {
    icon: "Flame",
    title: "Adaptation Phase Complete",
    description:
      "Your neuromuscular system has adapted to progressive overload. Expect steady endurance gains, improved sleep quality, and lower resting heart rate.",
    date: { year: 2026, month: 2, day: 20 },
    fade: true,
  },
  {
    icon: "TrendingUp",
    title: "Visible Muscle Definition",
    description:
      "Consistent fat loss and lean hypertrophy reveal increased vascularity in arms and shoulders. First mid-program re-assessment and diet adjustment.",
    date: { year: 2026, month: 4, day: 15 },
    fade: true,
  },
  {
    icon: "Dumbbell",
    title: "Mid-Year Strength Milestone",
    description:
      "Hit major PRs in compound lifts. Your trainer introduces advanced intensity techniques like cluster sets and eccentric tempo work.",
    date: { year: 2026, month: 6, day: 10 },
    fade: true,
  },
  {
    icon: "Activity",
    title: "Conditioning & Deload Refinement",
    description:
      "A targeted recovery block paired with high-intensity interval conditioning reduces systemic fatigue while pushing cardiovascular threshold.",
    date: { year: 2026, month: 7, day: 25 },
    fade: true,
  },
  {
    icon: "Trophy",
    title: "Full Body Transformation Peak",
    description:
      "Body scan confirms peak muscular density and target body-fat percentage. Celebrate reaching your primary physical and strength targets.",
    date: { year: 2026, month: 9, day: 15 },
    fade: true,
  },
  {
    icon: "Award",
    title: "Autonomous Maintenance & Lifestyle Mastery",
    description:
      "Transition from intensive 1-on-1 coaching into a self-directed long-term training schedule with monthly check-ins and sustained habits.",
    date: { year: 2026, month: 11, day: 20 },
    fade: true,
  },
];

export const coffeeProcessTimeline: TimelineElement[] = [
  {
    icon: "Sprout",
    title: "High-Altitude Seed Planting",
    description:
      "Arabiya seeds are planted in nutrient-dense volcanic soil at 1,800+ meters elevation, encouraging slow cherry maturation for higher natural sugar density.",
    date: "Day 0: Plantation Sowing",
    fade: true,
  },
  {
    icon: "Sun",
    title: "Selective Hand-Harvesting",
    description:
      "Pickers selectively hand-harvest only peak red cherries with perfect Brix sugar levels, discarding under-ripe green beans on the spot.",
    date: "3 Years Later: Harvest Day",
    fade: true,
  },
  {
    icon: "Droplets",
    title: "Anaerobic Fermentation",
    description:
      "Cherries are sealed in oxygen-free stainless steel tanks for 72 hours, unlocking complex fruity esters and vibrant acidity.",
    date: "2 Days Post-Harvest",
    fade: true,
  },
  {
    icon: "Wind",
    title: "Raised Bed Sun Drying",
    description:
      "Beans are spread across raised African beds and turned hourly for 14 days until moisture stabilizes at an optimal 11%.",
    date: "2 Weeks Post-Fermentation",
    fade: true,
  },
  {
    icon: "Flame",
    title: "Precision Micro-Batch Roasting",
    description:
      "Roaster profiles follow precise thermal curves to highlight delicate floral notes without imparting smoky or scorched undertones.",
    date: "1 Month Before Extraction",
    fade: true,
  },
  {
    icon: "Gauge",
    title: "Sub-Zero Cryogenic Grinding",
    description:
      "Roasted beans are ground under liquid nitrogen cooling to retain fragile aromatic compounds that traditional burr heat destroys.",
    date: "3 Days Before Extraction",
    fade: true,
  },
  {
    icon: "Coffee",
    title: "Cold Pressure Concentration",
    description:
      "Gentle cold filtration extracts rich solubles at 4°C over 18 hours, yielding a silky, shelf-stable liquid coffee essence.",
    date: "Day of Packaging",
    fade: true,
  },
];

export const coffeeProducts: Record<
  string,
  ProductPageProps & { defaultSelected: Record<string, string> }
> = {
  "sharkbrew-original-instant": {
    title: "SharkBrew Original Instant",
    StarsProps: {
      stars: 4.7,
      displayExactStarCount: true,
      numberOfReviews: "428",
    },
    starPosition: "below price",
    images: [
      "/coffee/products/instant/original instant/1.png",
      "/coffee/products/instant/original instant/2.png",
      "/coffee/products/instant/original instant/3.png",
    ],
    price: "₹499",
    pricePosition: "below title",
    variant: "carousel only",
    breadcrumbs: [
      { label: "home", href: "/" },
      { label: "coffee", href: "/services/coffee" },
      { label: "instant coffee" },
      { label: "sharkbrew original" },
    ],
    textPosition: "left",
    textWidth: 5,
    description:
      "SharkBrew's everyday instant coffee: a smooth medium roast with milk chocolate, caramel, and lightly toasted nut notes. Designed to dissolve quickly while retaining the character of freshly brewed coffee.",
    Variants: {
      weight: { type: "text", props: { labels: ["50g", "100g", "200g"] } },
    },
    defaultSelected: { weight: "100g" },
  },
  "deep-dive-dark-roast": {
    title: "Deep Dive Dark Roast",
    StarsProps: {
      stars: 4.8,
      displayExactStarCount: true,
      numberOfReviews: "316",
    },
    starPosition: "below price",
    images: [
      "/coffee/products/instant/dark roast/1.png",
      "/coffee/products/instant/dark roast/2.png",
      "/coffee/products/instant/dark roast/3.png",
    ],
    price: "₹549",
    pricePosition: "below title",
    variant: "carousel only",
    breadcrumbs: [
      { label: "home", href: "/" },
      { label: "coffee", href: "/services/coffee" },
      { label: "instant coffee" },
      { label: "deep dive dark roast" },
    ],
    textPosition: "left",
    textWidth: 5,
    description:
      "A bold dark-roasted instant coffee with intense roasted cocoa, toasted almond, and dark caramel notes. Built for drinkers who prefer a stronger, heavier cup.",
    Variants: {
      weight: { type: "text", props: { labels: ["50g", "100g", "200g"] } },
    },
    defaultSelected: { weight: "100g" },
  },
  "morning-fin": {
    title: "Morning Fin",
    StarsProps: {
      stars: 4.6,
      displayExactStarCount: true,
      numberOfReviews: "271",
    },
    starPosition: "below price",
    images: [
      "/coffee/products/instant/morning fin/1.png",
      "/coffee/products/instant/morning fin/2.png",
      "/coffee/products/instant/morning fin/3.png",
    ],
    price: "₹499",
    pricePosition: "below title",
    variant: "carousel only",
    breadcrumbs: [
      { label: "home", href: "/" },
      { label: "coffee", href: "/services/coffee" },
      { label: "instant coffee" },
      { label: "morning fin" },
    ],
    textPosition: "left",
    textWidth: 5,
    description:
      "A lighter instant roast with bright citrus, honey, and soft floral notes. Crisp and approachable, designed specifically for a lighter morning cup.",
    Variants: {
      weight: { type: "text", props: { labels: ["50g", "100g", "200g"] } },
    },
    defaultSelected: { weight: "100g" },
  },
  "great-white-blend": {
    title: "Great White Blend",
    StarsProps: {
      stars: 4.9,
      displayExactStarCount: true,
      numberOfReviews: "683",
    },
    starPosition: "below price",
    images: [
      "/coffee/products/beans/great white/1.png",
      "/coffee/products/beans/great white/2.png",
      "/coffee/products/beans/great white/3.png",
    ],
    price: "₹549",
    pricePosition: "below title",
    variant: "carousel only",
    breadcrumbs: [
      { label: "home", href: "/" },
      { label: "coffee", href: "/services/coffee" },
      { label: "coffee beans" },
      { label: "great white blend" },
    ],
    textPosition: "left",
    textWidth: 5,
    description:
      "SharkBrew's signature house blend. Medium-roasted beans combining milk chocolate, caramel, and toasted nuts with a balanced body that works well across espresso, filter, and French press.",
    Variants: {
      weight: { type: "text", props: { labels: ["250g", "500g", "1kg"] } },
      grind: {
        type: "text",
        props: { labels: ["Whole Bean", "Espresso", "Filter", "French Press"] },
      },
    },
    defaultSelected: { weight: "250g", grind: "Whole Bean" },
  },
  "coral-coast-colombia": {
    title: "Coral Coast Colombia",
    StarsProps: {
      stars: 4.8,
      displayExactStarCount: true,
      numberOfReviews: "342",
    },
    starPosition: "below price",
    images: [
      "/coffee/products/beans/coral coast columbia/1.png",
      "/coffee/products/beans/coral coast columbia/2.png",
      "/coffee/products/beans/coral coast columbia/3.png",
    ],
    price: "₹649",
    pricePosition: "below title",
    variant: "carousel only",
    breadcrumbs: [
      { label: "home", href: "/" },
      { label: "coffee", href: "/services/coffee" },
      { label: "single origin" },
      { label: "coral coast colombia" },
    ],
    textPosition: "left",
    textWidth: 5,
    description:
      "A Colombian single-origin coffee with red fruit acidity, caramel sweetness, and a subtle citrus finish. A lighter, brighter bean intended for filter brewing.",
    Variants: {
      weight: { type: "text", props: { labels: ["250g", "500g", "1kg"] } },
      grind: {
        type: "text",
        props: { labels: ["Whole Bean", "Filter", "French Press"] },
      },
    },
    defaultSelected: { weight: "250g", grind: "Whole Bean" },
  },
  "deepwater-brazil": {
    title: "Deepwater Brazil",
    StarsProps: {
      stars: 4.7,
      displayExactStarCount: true,
      numberOfReviews: "298",
    },
    starPosition: "below price",
    images: [
      "/coffee/products/beans/deepwater brazil/1.png",
      "/coffee/products/beans/deepwater brazil/2.png",
      "/coffee/products/beans/deepwater brazil/3.png",
    ],
    price: "₹599",
    pricePosition: "below title",
    variant: "carousel only",
    breadcrumbs: [
      { label: "home", href: "/" },
      { label: "coffee", href: "/services/coffee" },
      { label: "single origin" },
      { label: "deepwater brazil" },
    ],
    textPosition: "left",
    textWidth: 5,
    description:
      "A full-bodied Brazilian coffee featuring milk chocolate, hazelnut, and brown sugar notes. Low in acidity and naturally sweet, making it particularly versatile for espresso and milk drinks.",
    Variants: {
      weight: { type: "text", props: { labels: ["250g", "500g", "1kg"] } },
      grind: {
        type: "text",
        props: { labels: ["Whole Bean", "Espresso", "Filter"] },
      },
    },
    defaultSelected: { weight: "250g", grind: "Whole Bean" },
  },
  "sharkbrew-burr-grinder": {
    title: "SharkBrew Burr Grinder",
    StarsProps: {
      stars: 4.6,
      displayExactStarCount: true,
      numberOfReviews: "184",
    },
    starPosition: "below price",
    images: [
      "/coffee/products/gear/burr grinder/1.png",
      "/coffee/products/gear/burr grinder/2.png",
      "/coffee/products/gear/burr grinder/3.png",
    ],
    price: "₹3,499",
    pricePosition: "below title",
    variant: "carousel only",
    breadcrumbs: [
      { label: "home", href: "/" },
      { label: "coffee", href: "/services/coffee" },
      { label: "brewing equipment" },
      { label: "grinders" },
      { label: "sharkbrew burr grinder" },
    ],
    textPosition: "left",
    textWidth: 5,
    description:
      "A compact burr grinder with adjustable grind settings for espresso, pour-over, French press, and cold brew. Designed for consistent grinding without taking up excessive counter space.",
    Variants: {
      color: {
        type: "color",
        props: {
          ColorButtons: [
            { color: "black", colorCode: "#000000" },
            { color: "white", colorCode: "#FFFFFF" },
            { color: "sand", colorCode: "#C2B280" },
          ],
          Variant: "circle",
        },
      },
    },
    defaultSelected: { color: "black" },
  },
  "dive-press": {
    title: "Dive Press",
    StarsProps: {
      stars: 4.8,
      displayExactStarCount: true,
      numberOfReviews: "239",
    },
    starPosition: "below price",
    images: [
      "/coffee/products/gear/dive press/1.png",
      "/coffee/products/gear/dive press/2.png",
      "/coffee/products/gear/dive press/3.png",
    ],
    price: "₹1,299",
    pricePosition: "below title",
    variant: "carousel only",
    breadcrumbs: [
      { label: "home", href: "/" },
      { label: "coffee", href: "/services/coffee" },
      { label: "brewing equipment" },
      { label: "french press" },
      { label: "dive press" },
    ],
    textPosition: "left",
    textWidth: 5,
    description:
      "A 350ml French press combining heat-resistant glass with a stainless-steel filter and minimalist frame. Designed for simple full-bodied coffee brewing.",
    Variants: {
      size: { type: "text", props: { labels: ["350ml", "600ml", "1L"] } },
    },
    defaultSelected: { size: "350ml" },
  },
  "current-pour-over": {
    title: "Current Pour-Over",
    StarsProps: {
      stars: 4.7,
      displayExactStarCount: true,
      numberOfReviews: "156",
    },
    starPosition: "below price",
    images: [
      "/coffee/products/gear/current pourover/1.png",
      "/coffee/products/gear/current pourover/2.png",
      "/coffee/products/gear/current pourover/3.png",
    ],
    price: "₹899",
    pricePosition: "below title",
    variant: "carousel only",
    breadcrumbs: [
      { label: "home", href: "/" },
      { label: "coffee", href: "/services/coffee" },
      { label: "brewing equipment" },
      { label: "pour over" },
      { label: "current pour-over" },
    ],
    textPosition: "left",
    textWidth: 5,
    description:
      "A minimalist ceramic pour-over brewer engineered for controlled water flow and even extraction. Fits standard coffee filters and sits directly over most mugs and servers.",
    Variants: {
      color: {
        type: "color",
        props: {
          ColorButtons: [
            { color: "white", colorCode: "#FFFFFF" },
            { color: "black", colorCode: "#000000" },
            { color: "sand", colorCode: "#C2B280" },
          ],
          Variant: "circle",
        },
      },
    },
    defaultSelected: { color: "white" },
  },
  "sharkbrew-classic-mug": {
    title: "SharkBrew Classic Mug",
    StarsProps: {
      stars: 4.9,
      displayExactStarCount: true,
      numberOfReviews: "376",
    },
    starPosition: "below price",
    images: [
      "/coffee/products/merch/classic mug/1.png",
      "/coffee/products/merch/classic mug/2.png",
      "/coffee/products/merch/classic mug/3.png",
    ],
    price: "₹699",
    pricePosition: "below title",
    variant: "carousel only",
    breadcrumbs: [
      { label: "home", href: "/" },
      { label: "coffee", href: "/services/coffee" },
      { label: "merchandise" },
      { label: "mugs" },
      { label: "classic mug" },
    ],
    textPosition: "left",
    textWidth: 5,
    description:
      "A simple ceramic coffee mug featuring the SharkBrew wordmark and the brand's friendly line-art shark. Designed as the everyday SharkBrew mug.",
    Variants: {
      color: {
        type: "color",
        props: {
          ColorButtons: [
            { color: "black", colorCode: "#000000" },
            { color: "white", colorCode: "#FFFFFF" },
            { color: "cream", colorCode: "#FFFDD0" },
          ],
          Variant: "circle",
        },
      },
    },
    defaultSelected: { color: "black" },
  },
  "sharkbrew-travel-tumbler": {
    title: "SharkBrew Travel Tumbler",
    StarsProps: {
      stars: 4.6,
      displayExactStarCount: true,
      numberOfReviews: "191",
    },
    starPosition: "below price",
    images: [
      "/coffee/products/merch/tumbler/1.png",
      "/coffee/products/merch/tumbler/2.png",
      "/coffee/products/merch/tumbler/3.png",
    ],
    price: "₹999",
    pricePosition: "below title",
    variant: "carousel only",
    breadcrumbs: [
      { label: "home", href: "/" },
      { label: "coffee", href: "/services/coffee" },
      { label: "merchandise" },
      { label: "drinkware" },
      { label: "travel tumbler" },
    ],
    textPosition: "left",
    textWidth: 5,
    description:
      "An insulated stainless-steel tumbler designed to keep coffee hot while travelling. Features a secure lid, slim cup-holder-friendly shape, and understated SharkBrew branding.",
    Variants: {
      color: {
        type: "color",
        props: {
          ColorButtons: [
            { color: "black", colorCode: "#000000" },
            { color: "white", colorCode: "#FFFFFF" },
          ],
          Variant: "circle",
        },
      },
      size: { type: "text", props: { labels: ["350ml", "500ml"] } },
    },
    defaultSelected: { color: "black", size: "350ml" },
  },
  "coffee-shark-tote": {
    title: "Coffee Shark Tote",
    StarsProps: {
      stars: 4.8,
      displayExactStarCount: true,
      numberOfReviews: "164",
    },
    starPosition: "below price",
    images: [
      "/coffee/products/merch/coffee shark tote/1.png",
      "/coffee/products/merch/coffee shark tote/2.png",
      "/coffee/products/merch/coffee shark tote/3.png",
    ],
    price: "₹799",
    pricePosition: "below title",
    variant: "carousel only",
    breadcrumbs: [
      { label: "home", href: "/" },
      { label: "coffee", href: "/services/coffee" },
      { label: "merchandise" },
      { label: "bags" },
      { label: "coffee shark tote" },
    ],
    textPosition: "left",
    textWidth: 5,
    description:
      "A durable reusable canvas tote featuring a playful illustrated shark carrying a coffee cup. Large enough for coffee equipment, groceries, books, or everyday items.",
    Variants: {
      color: {
        type: "color",
        props: {
          ColorButtons: [
            { color: "natural canvas", colorCode: "#EED9B7" },
            { color: "black", colorCode: "#000000" },
            { color: "cream", colorCode: "#FFFDD0" },
          ],
          Variant: "circle",
        },
      },
    },
    defaultSelected: { color: "natural canvas" },
  },
};
