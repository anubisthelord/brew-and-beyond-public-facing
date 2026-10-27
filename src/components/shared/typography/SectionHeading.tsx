
type SectionHeadingProps = {
    label: string;
    title: string;
    description?: string;
    as?: "h2" | "h3";
    align?: "left" | "center" | "right";
    variant?: "light" | "dark" | "white";
    className?: string;
};

export default function SectionHeading({
    label,
    title,
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
        },
        dark: {
            label: "!text-[#45C3B8]",
            title: "!text-[#FFF5E6]",
            description: "!text-[#C4CBD2]",
        },
        white: {
            label: "!text-[#B7DCCF]",
            title: "!text-white",
            description: "!text-[#F1F3F5]",
        },
    };

    const color = colors[variant];

    return (
        <div
            className={`flex w-full flex-col ${alignment[align]} ${className}`}
        >


            <div className="relative inline-flex w-fit items-center animate-label-in">
                <span
                    aria-hidden="true"
                    className="absolute inset-0 -skew-x-12 rounded-sm bg-[#D9A441]"
                />

                <p
                    className={`relative px-3 sm:py-0.5 !text-[10px]  uppercase  !text-[#fff] sm:text-sm`}
                >
                    {label}
                </p>
            </div>



            <HeadingTag
                className={`mt-2.5 !font-medium ${headingSize[as]} !tracking-tight !leading-[1.125] ${color.title}`}
            >
                {title}
            </HeadingTag>

            {description && (
                <p
                    className={`mt-2 max-w-2xl !text-sm !font-medium leading-snug sm:text-base ${color.description}`}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
