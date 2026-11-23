import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowUpRight, Github, X } from "lucide-react";
import { socialUrl, visibleProjects, type Project } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { LoopArrow } from "./Doodles";
import { ConfusionSketch, RagVisual, XrayVisual } from "./ProjectVisuals";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { toneBg, toneInk } from "./tone";

function Visual({ project, className }: { project: Project; className?: string | undefined }) {
  if (project.id === "youtube-mind-rag") return <RagVisual className={className} />;
  if (project.id === "chest-xray") return <XrayVisual className={className} />;
  return null;
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <>
      {project.githubUrl ? (
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
          <Github className="h-4 w-4" /> GitHub
        </a>
      ) : null}
      {project.demoUrl ? (
        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
          Live demo <ArrowUpRight className="h-4 w-4" />
        </a>
      ) : null}
    </>
  );
}

function ProjectDialog({ project, children }: { project: Project; children: React.ReactNode }) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-overlay backdrop-blur-[2px] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 max-h-[92vh] w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-border bg-background paper shadow-lift data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0">
          <div className={cn("relative px-6 pb-6 pt-8 sm:px-10", toneBg[project.tone])}>
            <DialogPrimitive.Close className="absolute right-4 top-4 p-2 hover:text-annotation" aria-label="Close">
              <X className="h-5 w-5" />
            </DialogPrimitive.Close>
            <p className={cn("eyebrow", toneInk[project.tone])}>
              Project {project.index} · {project.category}
            </p>
            <DialogPrimitive.Title className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              {project.title}
            </DialogPrimitive.Title>
            <p className="mt-1 font-display text-lg italic text-muted-foreground">{project.subtitle}</p>
            <div className="mt-6 border border-foreground/10 bg-card/70 p-4">
              <Visual project={project} className="h-auto w-full" />
            </div>
          </div>

          <div className="grid gap-10 px-6 py-8 sm:px-10 md:grid-cols-[1.3fr_1fr]">
            <div>
              <h3 className="eyebrow">Overview</h3>
              <DialogPrimitive.Description className="mt-3 text-base leading-relaxed">
                {project.description}
              </DialogPrimitive.Description>

              <h3 className="eyebrow mt-8">How it works — what I built</h3>
              <ol className="mt-4 space-y-3">
                {project.built.map((b, i) => (
                  <li key={b} className="flex gap-4">
                    <span className="mt-0.5 font-mono text-xs text-annotation">{String(i + 1).padStart(2, "0")}</span>
                    <span className="leading-snug">{b}</span>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="space-y-8">
              {project.id === "chest-xray" ? (
                <figure>
                  <ConfusionSketch className="h-auto w-full max-w-[16rem]" />
                  <figcaption className="mt-2 font-hand text-xl leading-tight text-annotation">
                    evaluated with a confusion matrix — layout sketch, not results
                  </figcaption>
                </figure>
              ) : null}
              <div>
                <h3 className="eyebrow">Stack</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-6">
                <ProjectLinks project={project} />
              </div>
            </aside>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function ProjectCard({ project, size }: { project: Project; size: "large" | "medium" }) {
  const large = size === "large";
  return (
    <article className={cn("group relative pin-card paper", toneBg[project.tone], large ? "rotate-[-0.6deg]" : "rotate-[0.8deg]")}>
      <div className="tape -top-3 left-8 rotate-[-6deg]" />
      <div className={cn("p-6", large ? "sm:p-9" : "sm:p-7")}>
        <div className="flex items-start justify-between gap-4">
          <p className={cn("eyebrow", toneInk[project.tone])}>{project.category}</p>
          <span className={cn("font-display italic leading-none text-foreground/20", large ? "text-7xl" : "text-6xl")}>
            {project.index}
          </span>
        </div>

        <h3 className={cn("mt-2 font-display leading-[1.02] tracking-tight", large ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl")}>
          {project.title}
        </h3>
        <p className="mt-1 font-display text-lg italic text-muted-foreground">{project.subtitle}</p>

        <div className={cn("mt-6 border border-foreground/10 bg-card/70", large ? "p-5" : "p-4")}>
          <Visual project={project} className="h-auto w-full" />
        </div>

        <p className="mt-6 max-w-prose text-[1.02rem] leading-relaxed">{project.oneLiner}</p>

        <div className="mt-6">
          <p className="eyebrow">What I built</p>
          <ul className="mt-2 grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
            {project.built.slice(0, large ? 6 : 4).map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-annotation">—</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-foreground/10 pt-5">
          <ProjectDialog project={project}>
            <button type="button" className="btn btn-ink">
              View details <ArrowUpRight className="h-4 w-4" />
            </button>
          </ProjectDialog>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [first, ...rest] = visibleProjects;
  const github = socialUrl("github");
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <SectionHeading
            className="lg:col-span-7"
            number="04"
            kicker="Selected work"
            title={
              <>
                Things I've built <span className="italic">to learn</span>
                <br className="hidden sm:block" /> — and to use.
              </>
            }
          />

        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {first ? (
            <Reveal className="lg:col-span-7 lg:row-span-2">
              <ProjectCard project={first} size="large" />
            </Reveal>
          ) : null}
          {rest.map((p, i) => (
            <Reveal key={p.id} className={cn("lg:col-span-5", i === 0 && "lg:mt-24")} delay={120}>
              <ProjectCard project={p} size="medium" />
            </Reveal>
          ))}
          {github ? (
            <Reveal className="lg:col-span-5" delay={200}>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="group relative block rotate-[-1.5deg] border border-dashed border-foreground/30 bg-card dot-paper p-7 transition-transform hover:rotate-0"
              >
                <p className="eyebrow">The rest of the notebook</p>
                <p className="mt-3 font-display text-3xl leading-tight">
                  Smaller experiments <span className="italic">live on GitHub.</span>
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest group-hover:text-annotation">
                  <Github className="h-4 w-4" /> github.com/kushagraa263139 <ArrowUpRight className="h-4 w-4" />
                </span>
                <LoopArrow className="absolute -right-4 -top-10 hidden h-12 w-28 text-annotation sm:block" />
              </a>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
