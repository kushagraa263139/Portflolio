import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import avatarWave from "@/assets/avatar-wave.png";
import { profile, socials, withUrl } from "@/content/portfolio";
import { LoopArrow } from "./Doodles";
import { Reveal } from "./Reveal";
import { SocialIcon } from "./SocialIcon";

export function Contact() {
  const links = withUrl(socials);
  return (
    <section id="contact" className="relative px-4 pb-10 pt-10 sm:px-6">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden bg-peach paper shadow-pin">
        <div className="grid lg:grid-cols-12">
          <div className="p-8 sm:p-12 lg:col-span-8 lg:p-16">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-annotation">07</span>
              <span className="h-px w-10 bg-foreground/30" />
              <span className="eyebrow text-peach-ink">Contact</span>
            </div>
            <h2 className="mt-6 font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Have something interesting in mind? <span className="italic">Let's build it.</span>
            </h2>

            <a
              href={`mailto:${profile.email}`}
              className="mt-10 inline-flex flex-wrap items-center gap-3 font-display text-2xl break-all hover:text-annotation sm:text-3xl"
            >
              <Mail className="h-6 w-6 shrink-0" strokeWidth={1.4} />
              <span className="scribble-underline">{profile.email}</span>
            </a>

            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <li>
                <a href={`tel:${profile.phoneHref}`} className="inline-flex items-center gap-2 hover:text-annotation">
                  <Phone className="h-4 w-4" /> {profile.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {profile.location}
              </li>
              <li>
                <a href={profile.resumeUrl} download={profile.resumeFileName} className="inline-flex items-center gap-2 hover:text-annotation">
                  <Download className="h-4 w-4" /> Résumé (PDF)
                </a>
              </li>
            </ul>

            {links.length > 0 ? (
              <ul className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {links.map((s) => (
                  <li key={s.id}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 border border-foreground/15 bg-card/40 px-4 py-3 transition-colors hover:bg-card"
                    >
                      <span className="flex items-center gap-3">
                        <SocialIcon id={s.id} className="h-4 w-4" />
                        <span className="text-sm font-medium">{s.label}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="relative min-h-[20rem] lg:col-span-4">
            <img
              src={avatarWave}
              alt="Illustrated Kushagra waving hello"
              width={800}
              height={800}
              loading="lazy"
              className="absolute bottom-0 right-0 w-full max-w-[26rem] lg:max-w-none"
            />
            <div className="absolute left-6 top-8 lg:-left-6 lg:top-16">
              <p className="font-hand text-3xl leading-none text-annotation -rotate-6">say hi!</p>
              <LoopArrow className="mt-1 h-10 w-24 text-annotation" />
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-4 px-2 pb-4 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
        <span>© 2026 {profile.name} · {profile.location}</span>
        <a href="#home" className="hover:text-foreground">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}
