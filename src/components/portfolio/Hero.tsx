import { useEffect, useState } from "react";
import { ArrowDownRight, Download, Mail, MapPin, Phone } from "lucide-react";
import avatarHero from "@/assets/avatar-hero.png";
import { experience, profile, socials, withUrl } from "@/content/portfolio";
import { CurvedArrow, Sparkle } from "./Doodles";
import { SocialIcon } from "./SocialIcon";

export function Hero() {
  const links = withUrl(socials);
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-6xl grid-cols-12 gap-x-6 px-5 sm:px-8">
        {/* Left: name and intro */}
        <div className="col-span-12 lg:col-span-7 lg:pt-10">
          <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1" aria-live="polite">
            <span className="relative flex h-2 w-2">
              <span className="ping-dot absolute inset-0 rounded-full bg-annotation" />
              <span className="relative h-2 w-2 rounded-full bg-annotation" />
            </span>
            <span>Currently</span>
            <span className="h-px w-8 bg-foreground/30" />
            <RotatingWord words={profile.currently} />
          </p>

          <h1 className="mt-6 font-display leading-[0.86] tracking-[-0.035em] text-foreground">
            <span className="block text-[clamp(3.6rem,11vw,8.5rem)]">{profile.firstName}</span>
            <span className="relative block pl-[0.6em] text-[clamp(3.6rem,11vw,8.5rem)] italic">
              {profile.lastName}
              <Sparkle className="absolute -top-2 right-[8%] h-7 w-7 text-annotation sm:right-[18%]" />
            </span>
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="chip bg-card">{profile.role}</span>
            <span className="font-hand text-2xl text-annotation">&</span>
            <span className="chip bg-lavender">{profile.focus}</span>
          </div>

          <p className="mt-8 max-w-xl font-display text-2xl leading-snug text-foreground sm:text-[1.7rem]">
            {profile.intro}
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">{profile.summary}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn btn-ink">
              View projects <ArrowDownRight className="h-4 w-4" />
            </a>
            <a href={profile.resumeUrl} download={profile.resumeFileName} className="btn btn-paper">
              Download résumé <Download className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-annotation">
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phoneHref}`} className="inline-flex items-center gap-2 hover:text-annotation">
                <Phone className="h-4 w-4" /> {profile.phone}
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" /> {profile.location}
            </li>
          </ul>
          {links.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Profiles">
              {links.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="chip transition-colors hover:bg-butter"
                    aria-label={`${s.label} profile`}
                  >
                    <SocialIcon id={s.id} className="h-3.5 w-3.5" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* Right: avatar composition */}
        <div className="relative col-span-12 mt-16 lg:col-span-5 lg:mt-0">
          <div className="relative mx-auto max-w-[26rem] lg:ml-auto lg:mr-0">
            {/* Backdrop panel */}
            <div className="absolute inset-x-4 bottom-0 top-24 -rotate-2 bg-sky graph-paper shadow-pin sm:inset-x-6" />
            <div className="tape right-2 top-[5.4rem] rotate-[8deg] sm:right-3" />

            <figure className="relative h-[34rem] overflow-hidden sm:h-[38rem]">
              <img
                src={avatarHero}
                alt="Illustrated portrait of Kushagra in an oatmeal sweater, holding a notebook and pencil"
                width={768}
                height={1152}
                className="absolute inset-x-0 top-0 mx-auto w-[92%] max-w-none"
                fetchPriority="high"
              />
            </figure>

            {/* Annotation: that's me */}
            <div className="pointer-events-none absolute -left-2 top-10 hidden w-36 sm:block lg:-left-20">
              <p className="font-hand text-2xl leading-none text-annotation -rotate-6">that's me — usually mid-debug</p>
              <CurvedArrow className="ml-10 mt-1 h-12 w-16 text-annotation" />
            </div>

            {/* Pinned notes */}
            <div className="pin-card float-a absolute -left-1 bottom-36 rotate-[-4deg] sm:bottom-24 bg-butter paper px-4 py-3 sm:-left-8">
              <p className="eyebrow text-butter-ink">CGPA</p>
              <p className="font-display text-3xl leading-none">
                {profile.cgpa}
                <span className="text-base text-muted-foreground"> / {profile.cgpaScale}</span>
              </p>
            </div>

            <div className="pin-card float-b absolute -right-1 bottom-56 max-w-[12rem] rotate-[3deg] bg-sage paper px-4 py-3 sm:-right-6 sm:bottom-40">
              <p className="eyebrow text-sage-ink">Last stop</p>
              <p className="mt-1 text-sm font-medium leading-snug">
                {experience.dell.role}, {experience.dell.company}
              </p>
              <p className="mt-1 font-mono text-[0.65rem] text-muted-foreground">Jun – Jul 2026</p>
            </div>

            <div className="absolute bottom-6 left-1/2 w-[82%] -translate-x-1/2 rotate-[-1deg] border border-foreground/15 bg-card px-4 py-3 font-mono text-[0.7rem] leading-relaxed shadow-pin">
              <span className="text-annotation">$</span> whoami
              <br />
              <span className="text-muted-foreground">→ engineer · ML tinkerer · product builder</span>
              <br />
              <span className="text-muted-foreground">→ based in {profile.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="mx-auto mt-14 flex w-fit flex-col items-center gap-3 pb-6 text-muted-foreground hover:text-foreground"
        aria-label="Scroll to About"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative block h-14 w-px bg-foreground/15">
          <span className="scroll-line absolute inset-0 bg-annotation" />
        </span>
      </a>
    </section>
  );
}

function RotatingWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = window.setInterval(() => setI((n) => (n + 1) % words.length), 2600);
    return () => window.clearInterval(t);
  }, [words.length]);
  return (
    <span key={i} className="word-in text-foreground">
      {words[i]}
    </span>
  );
}
