
import { ElementType } from "react";

interface SectionHeaderProps {
  badgeText?: string;
  title: string;
  highlight?: string;
  description?: string;
  classN?: string;
  descriptionTextColor?: string;
  titleTextColor?: string;
  titleTextSize?: string;
  subTitleTextSize?: string;
  subtitleWidth?: string;

  tag?: ElementType;
}

export default function SectionHeader({
  title,
  highlight,
  description,
  classN,
  descriptionTextColor,
  titleTextSize = "text-[26px]",
  subTitleTextSize = "text-sm",
  subtitleWidth = "w-full",
  titleTextColor,
  tag: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${classN}`}>


      <Heading className={` ${titleTextSize ? titleTextSize : "text-[26px]"} md:text-4xl font-bold ${titleTextColor ? titleTextColor : "text-(--text-primary) "} mt-4`}>
        {title}{" "}
        {highlight && <span className="text-orange-500">{highlight}</span>}
      </Heading>

      {description && (
        <p className={`max-w-xl  md:w-[40%] mx-auto mt-3 ${subtitleWidth } ${descriptionTextColor ? descriptionTextColor : "text-gray-500"} ${subTitleTextSize ? subTitleTextSize : "text-sm"} leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
}