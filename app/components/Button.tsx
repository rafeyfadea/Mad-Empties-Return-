import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  as?: "a";
  href?: string;
}

const base =
  "inline-flex items-center justify-center text-sm font-medium transition-btn rounded-button focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-mad-rose-500 text-white px-8 py-4 hover:-translate-y-px active:translate-y-0",
  secondary:
    "bg-transparent text-mad-rose-700 border border-mad-rose-200 px-8 py-4 hover:bg-mad-rose-50 hover:-translate-y-px active:translate-y-0",
  tertiary:
    "bg-transparent text-mad-rose-500 px-2 py-1 underline-offset-2 hover:underline",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", fullWidth, className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
