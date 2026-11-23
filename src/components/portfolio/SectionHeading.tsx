import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  number,
  kicker,
  title,
  aside,
  className,
}: {
  number: string;
  kicker: string;
  title: ReactNode;
  aside?: ReactNode;
  className?: string | undefined;
}) {
  return (
    <header className={cn("relative", className)}>
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-annotation">{number}</span>
        <span className="h-px w-10 bg-foreground/30" />
        <span className="eyebrow">{kicker}</span>
      </div>
      <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-tight text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {aside ? <div className="mt-3 font-hand text-2xl text-annotation">{aside}</div> : null}
    </header>
  );
}
