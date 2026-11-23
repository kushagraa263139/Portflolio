import { about, profile } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { HandCircle } from "./Doodles";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { toneBg } from "./tone";

const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-3", "rotate-1", "-rotate-1"];

export function About() {
  const [first, ...more] = about.paragraphs;
  return (
    <section id="about" className="relative border-y border-border bg-cream paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading
            number="02"
            kicker="About"
            title={
              <>
                Engineer by training,
                <br />
                <span className="relative inline-block italic">
                  builder
                  <HandCircle className="absolute -inset-x-4 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+2rem)] text-annotation" />
                </span>{" "}
                by habit.
              </>
            }
          />
          <Reveal className="mt-10 space-y-5 text-[1.075rem] leading-relaxed">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-annotation">
              {first}
            </p>
            {more.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </Reveal>
        </div>

        <div className="relative lg:col-span-5 lg:pt-28">
          <Reveal delay={150}>
            <p className="font-hand text-3xl text-annotation">things I keep coming back to —</p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {about.interests.map((it, i) => (
                <li
                  key={it.label}
                  className={cn(
                    "pin-card px-4 py-2.5 text-sm font-medium",
                    toneBg[it.tone],
                    tilts[i % tilts.length],
                    it.tone === "cream" && "border border-border bg-card",
                  )}
                >
                  {it.label}
                </li>
              ))}
            </ul>

            <dl className="mt-12 grid grid-cols-2 gap-px border border-border bg-border">
              {[
                ["Studying", "B.Tech CSE, UPES"],
                ["Based in", profile.location],
                ["CGPA", `${profile.cgpa} / ${profile.cgpaScale}`],
                ["Looking for", "SDE / AI-ML roles"],
              ].map(([k, v]) => (
                <div key={k} className="bg-card px-4 py-4">
                  <dt className="eyebrow">{k}</dt>
                  <dd className="mt-1 font-display text-lg leading-snug">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
