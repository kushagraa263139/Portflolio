import { describe, expect, it } from "vitest";
import { experience, practice, profile, visibleProjects, withUrl } from "@/content/portfolio";

describe("portfolio content rules", () => {
  it("hides links that have no URL instead of inventing one", () => {
    const links = withUrl([
      { id: "a", url: "https://github.com/kushagraa263139" },
      { id: "b", url: "" },
      { id: "c", url: "   " },
    ]);
    expect(links.map((l) => l.id)).toEqual(["a"]);
  });

  it("shows only YouTube Mind-RAG and Chest X-Ray as projects", () => {
    expect(visibleProjects.map((p) => p.id)).toEqual(["youtube-mind-rag", "chest-xray"]);
  });

  it("keeps the resume facts exact", () => {
    expect(profile.cgpa).toBe("9.01");
    expect(experience.dell.period).toBe("June 2026 – July 2026");
    expect(practice.map((p) => p.figure)).toEqual(["300+", "1421", "998"]);
  });
});
