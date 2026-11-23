import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [active, setActive] = useState<string>("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between border px-4 py-2.5 transition-all duration-500 sm:px-5",
          scrolled ? "border-border bg-card/90 shadow-pin backdrop-blur-sm" : "border-transparent bg-transparent",
        )}
      >
        <a href="#home" className="group flex items-baseline gap-2" aria-label={`${profile.name} — home`}>
          <span className="font-display text-xl italic leading-none">K.</span>
          <span className="font-display text-xl leading-none">Agrawal</span>
          <span className="hidden font-hand text-lg text-annotation transition-transform group-hover:-rotate-3 sm:inline">
            portfolio
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "px-3 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] transition-colors",
                  active === item.id ? "scribble-underline text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="fixed inset-0 top-0 z-[-1] bg-cream paper px-6 pt-28 lg:hidden">
          <ul className="space-y-1">
            {navItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-border py-3"
                >
                  <span className="font-mono text-xs text-annotation">0{i + 1}</span>
                  <span className={cn("font-display text-3xl", active === item.id && "italic")}>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
