export interface BaseCardProps {
  title?: string;
  subtext?: string;
  description?: string;
  extraContent?: React.ReactNode;
  className?: string;
}

export interface ImageCardProps extends BaseCardProps {
  imageType: "full" | "contain";
  imageSrc: string;
  imageAlt?: string;
  imageAspectRatio?: "square" | "landscape" | "portrait";
}

export interface IconCardProps extends BaseCardProps {
  icon: IconName;
  miniCard?: boolean;
  iconAlign?: "left" | "center" | "right";
}

export interface ProductCardProps extends Pick<
  BaseCardProps,
  "title" | "subtext" | "description" | "className"
> {
  // Provide one of these for the top visual
  icon?: IconName;
  imageSrc?: string;
  imageAlt?: string;
  features: React.ReactNode[];
  priceProperty?: {
    price: number | React.ReactNode | string;
    priceLabel?: string;
    priceSuffix?: string;
  };
  button: React.ReactNode;
  titlePosition: "top" | "center" | "middle left";
}