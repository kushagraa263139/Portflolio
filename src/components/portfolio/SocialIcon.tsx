import type { SocialLink } from "@/content/portfolio";

/** Minimal monoline marks so platforms are recognisable without brand logos. */
export function SocialIcon({ id, className }: { id: SocialLink["id"]; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (id) {
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
        </svg>
      );
    case "github":
      return (
        <svg {...common}>
          <path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6.2 0C6.6 2.8 5.6 3.1 5.6 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
        </svg>
      );
    case "leetcode":
      return (
        <svg {...common}>
          <path d="M14 4 7 11a3 3 0 0 0 0 4l3 3a3 3 0 0 0 4 0l2-2M9 13h11" />
        </svg>
      );
    case "codechef":
      return (
        <svg {...common}>
          <path d="M6 14a4 4 0 0 1 1-7.9A5 5 0 0 1 17 6a4 4 0 0 1 1 8M7 14h10v6H7z" />
        </svg>
      );
    case "codeforces":
      return (
        <svg {...common}>
          <path d="M5 20V11M12 20V6M19 20v-6" />
        </svg>
      );
  }
}
