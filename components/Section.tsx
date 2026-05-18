import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  containerClassName?: string
  innerClassName?: string
  variant?: "default" | "muted" | "dark" | "accent"
}

export function Section({
  children,
  className,
  containerClassName,
  innerClassName,
  variant = "default",
  ...props
}: SectionProps) {
  const variants = {
    default: "bg-background",
    muted: "bg-slate-50",
    dark: "bg-secondary text-white",
    accent: "bg-accent text-white",
  }

  return (
    <section
      className={cn("py-14 md:py-20 overflow-hidden", variants[variant], className)}
      {...props}
    >
      <div className={cn("container mx-auto px-4 md:px-6", containerClassName)}>
        <div className={cn("max-w-7xl mx-auto", innerClassName)}>
          {children}
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = false,
  className,
  dark = false,
}: {
  title?: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
  dark?: boolean
}) {
  return (
    <div className={cn(
      "max-w-3xl mb-10 md:mb-14 space-y-3",
      centered && "mx-auto text-center",
      className
    )}>
      {subtitle && (
        <span className={cn(
          "inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.15em]",
          dark ? "bg-white/10 text-white/80" : "bg-accent/10 text-accent"
        )}>
          {subtitle}
        </span>
      )}
      {title && (
        <h2 className={cn(
          "text-2xl md:text-4xl font-bold tracking-tight leading-snug",
          dark ? "text-white" : "text-primary"
        )}>
          {title}
        </h2>
      )}
      {description && (
        <p className={cn(
          "text-sm md:text-base font-normal leading-relaxed",
          dark ? "text-white/60" : "text-slate-500"
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
