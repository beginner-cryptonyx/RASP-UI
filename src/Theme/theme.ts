type Colors = {
  background1: string;
  background2: string;
  background3: string;
  background4: string;
  accent: string;
  accentHover: string;
  accentText: string;
  borderDefault: string;
  textPrimary: string;
  textSecondary: string;
  color1: string;
  color2: string;
  color3: string;
};

export type ThemeName =
  | "Crimson"
  | "Ocean"
  | "Earth"
  | "Amethyst"
  | "Sunset"
  | "Coffee";

export type Mode = "light" | "dark";
type Theme = Record<Mode, Colors>;

export const Themes: Record<ThemeName, Theme> = {
  Crimson: {
    light: {
      background1: "#FFF8F8",
      background2: "#FFFFFF",
      background3: "#FBE9E9",
      background4: "#F5D6D6",
      accent: "#A50E26",
      accentHover: "#8C0B20",
      accentText: "#FFFFFF",
      borderDefault: "#E8C9C9",
      textPrimary: "#2A1215",
      textSecondary: "#6B4A4E",
      color1: "#D4AF37", // gold
      color2: "#7A1220", // deep crimson
      color3: "#C97B84", // muted rose
    },
    dark: {
      background1: "#140A0C",
      background2: "#1E1013",
      background3: "#2A1519",
      background4: "#381C21",
      accent: "#E03A4E",
      accentHover: "#F05A6C",
      accentText: "#FFFFFF",
      borderDefault: "#3A2024",
      textPrimary: "#F7E9EA",
      textSecondary: "#B99A9D",
      color1: "#E8C468", // gold
      color2: "#E63946", // bright crimson
      color3: "#C08497", // dusty rose
    },
  },

  Ocean: {
    light: {
      background1: "#F2F8FC",
      background2: "#FFFFFF",
      background3: "#E1EEF7",
      background4: "#CFE2F0",
      accent: "#0F6E9C",
      accentHover: "#0A5679",
      accentText: "#FFFFFF",
      borderDefault: "#C3DAEA",
      textPrimary: "#0A2233",
      textSecondary: "#4A6B80",
      color1: "#14B8A6", // teal
      color2: "#0E7490", // deep cyan
      color3: "#38BDF8", // sky
    },
    dark: {
      background1: "#07131C",
      background2: "#0C1D2A",
      background3: "#12293A",
      background4: "#1A374D",
      accent: "#38BDF8",
      accentHover: "#5CCBFA",
      accentText: "#04121C",
      borderDefault: "#1E3A50",
      textPrimary: "#E6F1F8",
      textSecondary: "#93B3C7",
      color1: "#2DD4BF", // teal
      color2: "#0EA5E9", // bright cyan
      color3: "#7DD3FC", // light sky
    },
  },

  Earth: {
    light: {
      background1: "#FAF7F0",
      background2: "#FFFFFF",
      background3: "#F0E9DA",
      background4: "#E3D8C3",
      accent: "#3E6B34",
      accentHover: "#2F5328",
      accentText: "#FFFFFF",
      borderDefault: "#D6C9B0",
      textPrimary: "#2A2417",
      textSecondary: "#6B5F4A",
      color1: "#8B5E34", // brown
      color2: "#5C7A3E", // moss
      color3: "#C19A6B", // camel / tan
    },
    dark: {
      background1: "#12100B",
      background2: "#1B1811",
      background3: "#262117",
      background4: "#332C1F",
      accent: "#8AB84F",
      accentHover: "#9CCB60",
      accentText: "#131A08",
      borderDefault: "#3D3524",
      textPrimary: "#F0EBDF",
      textSecondary: "#B3A88E",
      color1: "#C08552", // warm brown
      color2: "#9BB56A", // sage / moss
      color3: "#D9B382", // sand
    },
  },

  Amethyst: {
    light: {
      background1: "#FAF6FC",
      background2: "#FFFFFF",
      background3: "#F0E6F7",
      background4: "#E3D3EF",
      accent: "#7C3AED",
      accentHover: "#6425D0",
      accentText: "#FFFFFF",
      borderDefault: "#D8C6E8",
      textPrimary: "#241432",
      textSecondary: "#5F4A73",
      color1: "#EC4899", // pink
      color2: "#8B5CF6", // soft violet
      color3: "#C4B5FD", // lavender
    },
    dark: {
      background1: "#120B1A",
      background2: "#1B1026",
      background3: "#261635",
      background4: "#331F46",
      accent: "#A78BFA",
      accentHover: "#BCA5FB",
      accentText: "#160B26",
      borderDefault: "#3D2A52",
      textPrimary: "#F2EAFB",
      textSecondary: "#B8A3CE",
      color1: "#F472B6", // pink
      color2: "#C4B5FD", // lavender
      color3: "#E879F9", // fuchsia
    },
  },

  Sunset: {
    light: {
      background1: "#FFF9F4",
      background2: "#FFFFFF",
      background3: "#FDEDE0",
      background4: "#F9DCC6",
      accent: "#C2410C",
      accentHover: "#9A3309",
      accentText: "#FFFFFF",
      borderDefault: "#EFD3BB",
      textPrimary: "#331A0C",
      textSecondary: "#7A5843",
      color1: "#F59E0B", // amber
      color2: "#E11D48", // rose
      color3: "#FB923C", // light orange
    },
    dark: {
      background1: "#170E08",
      background2: "#22150D",
      background3: "#301E13",
      background4: "#40291A",
      accent: "#FB923C",
      accentHover: "#FDAA61",
      accentText: "#1F1005",
      borderDefault: "#4A3222",
      textPrimary: "#FBEFE5",
      textSecondary: "#C9A88E",
      color1: "#FBBF24", // amber
      color2: "#FB7185", // coral rose
      color3: "#FDBA74", // peach
    },
  },
  Coffee: {
    light: {
      background1: "#FAF6F0", // Fresh Cream / Porcelain
      background2: "#F3ECE2", // Warm Steamed Milk
      background3: "#E8DDD0", // Latte Foam
      background4: "#DCCCBD", // Soft Oat Milk Surface
      accent: "#6F4E37", // Classic Roasted Coffee
      accentHover: "#563A27", // Darker Espresso Hover
      accentText: "#FFFFFF", // Crisp White Text on Accent
      borderDefault: "#D3C2B2", // Light Warm Border
      textPrimary: "#2B1E16", // Deep Mocha Text
      textSecondary: "#6E5B4F", // Warm Roasted Taupe
      color1: "#8B5A2B", // Amber Roast
      color2: "#C68B59", // Caramel
      color3: "#D4A373", // Cinnamon
    },
    dark: {
      background1: "#1A1412", // Deep Espresso Ground
      background2: "#241C18", // Dark French Roast
      background3: "#302621", // Medium Dark Roast
      background4: "#3D312B", // Roasted Bean Surface
      accent: "#C68B59", // Warm Creamy Caramel
      accentHover: "#DA9C68", // Lighter Honey Caramel
      accentText: "#18120F", // Dark Coffee Text on Accent
      borderDefault: "#4A3B34", // Subtle Roast Border
      textPrimary: "#F5EBE6", // Sweet Cream White
      textSecondary: "#C3B1A7", // Warm Ash Brown
      color1: "#8B5A2B", // Amber Coffee
      color2: "#D4A373", // Cinnamon Spice
      color3: "#6F4E37", // Rich Coffee Brown
    },
  },
};
