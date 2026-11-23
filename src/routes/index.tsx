import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Skills } from "@/components/portfolio/Skills";

const title = "Kushagra Agrawal — Software Engineer, AI/ML & Generative AI";
const description =
  "Portfolio of Kushagra Agrawal, a CSE undergraduate at UPES building software, ML systems and products — Dell Technologies intern and co-founder of VIRASAT.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-card focus:px-4 focus:py-2">
        Skip to content
      </a>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
