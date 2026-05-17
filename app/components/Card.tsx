interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export default function Card({
  children,
  className = "",
  hoverable = false,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={`bg-cream-100 rounded-card shadow-card p-8 ${
        hoverable
          ? "transition-card cursor-pointer hover:-translate-y-0.5 hover:shadow-card-hover"
          : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
