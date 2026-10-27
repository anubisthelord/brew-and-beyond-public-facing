
type SectionHeadingProps = {
    label?: string;
    title: string;
    highlight?: string;
    description?: string;
    as?: "h2" | "h3";
    align?: "left" | "center" | "right";
    variant?: "light" | "dark" | "white";
    className?: string;
  };
  
  export default function SectionHeading({
    label,
    title,
    highlight,
    description,
    as = "h2",
    align = "left",
    variant = "light",
    className = "",
  }: SectionHeadingProps) {
    const HeadingTag = as;
  
    const alignment = {
      left: "items-start text-left",
      center: "items-center text-center",
      right: "items-end text-right",
    };
  
    const headingSize = {
      h2: "text-2xl sm:text-4xl lg:text-5xl",
      h3: "text-xl sm:text-3xl lg:text-4xl",
    };
  
    const colors = {
      light: {
        label: "!text-[#329D94]",
        title: "!text-[#181D23]",
        description: "!text-[#626970]",
        highlight: "text-[#258B83]",
      },
      dark: {
        label: "!text-[#45C3B8]",
        title: "!text-[#FFF5E6]",
        description: "!text-[#C4CBD2]",
        highlight: "text-[#45C3B8]",
      },
      white: {
        label: "!text-[#B7DCCF]",
        title: "!text-white",
        description: "!text-[#F1F3F5]",
        highlight: "text-[#B7DCCF]",
      },
    };
  
    const color = colors[variant];
  
    const renderTitle = () => {
      if (!highlight || !title.includes(highlight)) {
        return title;
      }
  
      const parts = title.split(highlight);
  
      return parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && (
            <span className={color.highlight}>{highlight}</span>
          )}
        </span>
      ));
    };
  
    return (
      <div
        className={`flex w-full flex-col ${alignment[align]} ${className}`}
      >
        {label && (
          <div className="relative inline-flex w-fit items-center animate-label-in">
            <span
              aria-hidden="true"
              className="absolute inset-0 -skew-x-12 rounded-sm bg-[#D9A441]"
            />
            <p className="relative px-3 sm:py-0.5 !text-[10px] uppercase !text-white sm:!text-sm">
              {label}
            </p>
          </div>
        )}
  
        <HeadingTag
          className={`${
            label ? "mt-1.5 sm:mt-2.5" : "mt-0"
          } !font-medium ${headingSize[as]} !tracking-tight !leading-[1.125] ${color.title}`}
        >
          {renderTitle()}
        </HeadingTag>
  
        {description && (
          <p
            className={`${
              label ? "mt-1" : "mt-2"
            } max-w-2xl !text-sm !font-medium leading-snug sm:!text-base ${color.description}`}
          >
            {description}
          </p>
        )}
      </div>
    );
  }
  