interface BadgeProps {
  children: React.ReactNode;
  variant?: "rose" | "sage";
  className?: string;
}

export default function Badge({
  children,
  variant = "rose",
  className = "",
}: BadgeProps) {
  const styles = {
    rose: "bg-mad-rose-100 text-mad-rose-700",
    sage: "bg-sage-100 text-sage-700",
  };

  return (
    <span
      className={`inline-block text-xs font-medium px-3.5 py-1.5 rounded-badge ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
