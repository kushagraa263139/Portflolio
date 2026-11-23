import { ArrowUpRight } from "lucide-react";
import { experience } from "@/content/portfolio";
import { CurvedArrow } from "./Doodles";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Scatter of log clusters with one circled outlier. Illustrative only. */
function LogClusters() {
  const clusters = [
    { cx: 70, cy: 70, n: 14, r: 22 },
    { cx: 160, cy: 120, n: 16, r: 26 },
    { cx: 90, cy: 160, n: 10, r: 18 },
  ];
  const dots: [number, number][] = [];
  clusters.forEach((c, ci) => {
    for (let i = 0; i < c.n; i++) {
      const a = (i * 137.5 + ci * 40) * (Math.PI / 180);
      const d = c.r * Math.sqrt((i + 1) / c.n);
      dots.push([c.cx + Math.cos(a) * d, c.cy + Math.sin(a) * d]);
    }
  });
  return (
    <svg viewBox="0 0 260 210" className="h-auto w-full" role="img" aria-label="Illustration: log events grouped into clusters, with one unusual event circled as an anomaly">
      {clusters.map((c) => (
        <circle key={`${c.cx}`} cx={c.cx} cy={c.cy} r={c.r + 8} fill="none" stroke="var(--sky-ink)" strokeOpacity="0.25" strokeDasharray="3 4" />
      ))}
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.6" fill="var(--sky-ink)" opacity="0.55" />
      ))}
      <circle cx="222" cy="44" r="3.4" fill="var(--annotation)" />
      <circle cx="222" cy="44" r="13" fill="none" stroke="var(--annotation)" strokeWidth="1.5" />
      <text x="168" y="22" fontFamily="var(--font-hand)" fontSize="18" fill="var(--annotation)">
        unusual!
      </text>
      <text x="10" y="204" fontFamily="var(--font-mono)" fontSize="8" fill="var(--sky-ink)" letterSpacing="1">
        LOG EVENTS · CLUSTERED (ILLUSTRATIVE)
      </text>
    </svg>
  );
}

export function Experience() {
  const { dell, virasat } = experience;
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          number="03"
          kicker="Experience"
          title={
            <>
              Where I've <span className="italic">shipped</span> things.
            </>
          }
          aside="one team, one product of my own"
        />

        {/* Dell — prominent */}
        <Reveal className="relative mt-16">
          <article className="relative grid overflow-hidden border border-foreground/10 bg-sky graph-paper shadow-pin lg:grid-cols-12">
            <div className="p-7 sm:p-10 lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="chip bg-card">{dell.period}</span>
                <span className="chip bg-card">{dell.mode}</span>
              </div>
              <h3 className="mt-6 font-display text-5xl leading-none tracking-tight sm:text-6xl">{dell.company}</h3>
              <p className="mt-3 font-display text-xl italic text-sky-ink">{dell.role}</p>

              <ul className="mt-8 space-y-4">
                {dell.points.map((p, i) => (
                  <li key={p} className="grid grid-cols-[2rem_1fr] gap-2 leading-relaxed">
                    <span className="font-mono text-xs leading-7 text-sky-ink">{String(i + 1).padStart(2, "0")}</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-8 flex flex-wrap gap-2">
                {dell.tags.map((t) => (
                  <li key={t} className="chip bg-card">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative border-t border-foreground/10 bg-card/60 p-7 sm:p-10 lg:col-span-5 lg:border-l lg:border-t-0">
              <p className="eyebrow text-sky-ink">The problem, sketched</p>
              <p className="mt-2 font-display text-2xl leading-snug">
                Thousands of Kubernetes log lines. <span className="italic">Which ones matter?</span>
              </p>
              <div className="mt-6">
                <LogClusters />
              </div>
            </div>
          </article>
        </Reveal>

        {/* VIRASAT — product story */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-5 lg:col-start-1 lg:pt-10">
            <p className="font-hand text-3xl leading-tight text-annotation">
              building a product, not just writing code —
            </p>
            <CurvedArrow className="mt-2 hidden h-16 w-24 rotate-[-20deg] text-annotation lg:ml-40 lg:block" />
            <blockquote className="mt-6 border-l-2 border-annotation pl-5 font-display text-2xl italic leading-snug">
              "{virasat.problem}"
            </blockquote>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            <article className="relative rotate-[0.6deg] bg-butter paper p-7 shadow-pin sm:p-10">
              <div className="tape -top-3 right-10 rotate-[5deg]" />
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display text-5xl tracking-tight">{virasat.company}</h3>
                <span className="chip bg-card">{virasat.period}</span>
              </div>
              <p className="mt-2 font-display text-xl italic text-butter-ink">{virasat.role}</p>

              <ol className="mt-8 grid gap-px bg-foreground/10 sm:grid-cols-2">
                {virasat.journey.map((j, i) => (
                  <li key={j.step} className="bg-butter p-5">
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-butter-ink">
                      {String(i + 1).padStart(2, "0")} · {j.step}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed">{j.text}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <ul className="flex flex-wrap gap-2">
                  {virasat.tags.map((t) => (
                    <li key={t} className="chip bg-card">
                      {t}
                    </li>
                  ))}
                </ul>
                {virasat.url ? (
                  <a href={virasat.url} target="_blank" rel="noreferrer" className="btn btn-paper">
                    Visit VIRASAT <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
