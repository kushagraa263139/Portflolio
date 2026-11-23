import { ArrowUpRight } from "lucide-react";
import { education, practice, socialUrl } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Squiggle } from "./Doodles";
import { toneBg, toneInk } from "./tone";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          number="06"
          kicker="Education"
          title={
            <>
              Still <span className="italic">in session.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* University spread */}
          <Reveal className="lg:col-span-8">
            <article className="relative border border-border bg-card p-7 shadow-pin sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="max-w-md">
                  <p className="eyebrow">{education.period}</p>
                  <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">{education.university}</h3>
                  <p className="mt-2 font-display text-lg italic text-muted-foreground">{education.degree}</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-7xl leading-none tracking-tight sm:text-8xl">{education.cgpa}</p>
                  <p className="eyebrow mt-1">CGPA / 10</p>
                </div>
              </div>

              <Squiggle className="my-8 h-3 w-full text-border" />

              <p className="eyebrow">Relevant coursework</p>
              <ol className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {education.coursework.map((c, i) => (
                  <li key={c} className="flex items-baseline gap-3 border-b border-dashed border-border pb-2">
                    <span className="font-mono text-[0.7rem] text-annotation">CS-{String(i + 1).padStart(2, "0")}</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ol>
            </article>
          </Reveal>

          {/* School timeline */}
          <Reveal className="lg:col-span-4" delay={120}>
            <p className="font-hand text-2xl text-annotation">before UPES —</p>
            <ol className="relative mt-6 space-y-8 border-l border-foreground/20 pl-6">
              {education.school.map((s) => (
                <li key={s.level} className="relative">
                  <span className="absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border border-foreground bg-butter" />
                  <p className="font-mono text-xs text-muted-foreground">{s.year}</p>
                  <p className="mt-1 font-display text-2xl">
                    {s.level} <span className="text-base text-muted-foreground">· {s.board}</span>
                  </p>
                  <p className="font-display text-4xl italic">{s.score}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {/* Practice log */}
        <div className="mt-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">06 · b — Competitive programming</p>
              <h3 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                The <span className="italic">practice log.</span>
              </h3>
            </div>
            <p className="font-hand text-2xl text-annotation">the daily warm-up</p>
          </div>

          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {practice.map((p, i) => {
              const url = socialUrl(p.linkId);
              const inner = (
                <>
                  <div className="flex items-center justify-between">
                    <p className={cn("eyebrow", toneInk[p.tone])}>
                      No. {String(i + 1).padStart(3, "0")}
                    </p>
                    {url ? <ArrowUpRight className="h-4 w-4 opacity-60" aria-hidden="true" /> : null}
                  </div>
                  <p className="mt-5 font-display text-6xl leading-none tracking-tight">{p.figure}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{p.caption}</p>
                  <div className="my-5 border-t border-dashed border-foreground/25" />
                  <p className="font-mono text-sm uppercase tracking-[0.18em]">{p.platform}</p>
                </>
              );
              return (
                <li key={p.platform} className={cn(i === 1 && "md:mt-8")}>
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.platform} profile`}
                      className={cn("perforated pin-card block px-8 py-7", toneBg[p.tone], "paper")}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cn("perforated px-8 py-7", toneBg[p.tone], "paper")}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
