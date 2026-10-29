import Link from "next/link";
import { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type ActionButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | ActionButtonProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "!bg-[#D9A06D] !text-[#000] !font-medium hover:!bg-[#C48750] ",

  secondary:
    "!border-[#181D23]/30 !bg-[#0F1115] !text-[#C4CBD2] hover:!border-[#454B54] hover:!bg-[#212830]",

  ghost:
    "!bg-transparent !text-[#C4CBD2] hover:!bg-[#181D23] hover:!text-[#FFF5E6]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-1 text-xs",
  md: "px-5 py-2 text-sm",
  lg: "px-6 py-2.5 text-base",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium " +
  "transition-colors duration-200 " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9A06D] " +
  "disabled:pointer-events-none disabled:opacity-50";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.href !== undefined) {
    const { href, ...linkProps } = props;

    return (
      <Link href={href} className={styles} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}