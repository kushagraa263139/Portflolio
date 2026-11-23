import { Braces, Code2, Layers, ScatterChart, Sparkles, Wrench, type LucideIcon } from "lucide-react";
import { skills } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { toneBg, toneInk } from "./tone";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  braces: Braces,
  scatter: ScatterChart,
  layers: Layers,
  sparkle: Sparkles,
  wrench: Wrench,
};

// Hand-tuned placement so the board reads as composed, not gridded.
const layout = [
  "lg:col-span-4 lg:rotate-[-1.2deg]",
  "lg:col-span-4 lg:mt-12 lg:rotate-[0.8deg]",
  "lg:col-span-4 lg:rotate-[-0.4deg]",
  "lg:col-span-5 lg:-mt-4 lg:rotate-[0.6deg]",
  "lg:col-span-7 lg:mt-6 lg:rotate-[-0.8deg]",
  "lg:col-span-6 lg:col-start-4 lg:rotate-[0.5deg]",
];

export function Skills() {
  return (
    <section id="skills" className="relative border-y border-border bg-cream paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-8"
            number="05"
            kicker="Skills"
            title={
              <>
                The toolkit, <span className="italic">pinned up.</span>
              </>
            }
          />
          <p className="self-end font-hand text-2xl leading-tight text-annotation lg:col-span-4">
            no percentages — just what I've actually used
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {skills.map((group, i) => {
            const Icon = icons[group.icon] ?? Code2;
            const isLanguages = group.title === "Programming Languages";
            return (
              <Reveal key={group.title} className={cn(layout[i])} delay={i * 60}>
                <article
                  className={cn(
                    "pin-card relative h-full p-6 sm:p-7",
                    toneBg[group.tone],
                    group.tone === "cream" ? "border border-border bg-card" : "paper",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={cn("eyebrow", toneInk[group.tone])}>{String(i + 1).padStart(2, "0")}</p>
                      <h3 className="mt-1 font-display text-2xl leading-tight">{group.title}</h3>
                    </div>
                    <Icon className={cn("h-5 w-5 shrink-0", toneInk[group.tone])} strokeWidth={1.4} aria-hidden="true" />
                  </div>
                  <p className="mt-1 font-hand text-xl text-annotation">{group.note}</p>

                  {isLanguages ? (
                    <ul className="mt-5 flex flex-wrap items-baseline gap-x-5">
                      {group.items.map((s) => (
                        <li key={s} className="font-display text-5xl italic leading-tight">
                          {s}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((s) => (
                        <li key={s} className="chip">
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
