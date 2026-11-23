import type { SVGProps } from "react";

/** Hand-drawn style marks. Stroke uses currentColor so callers set the ink. */

export function CurvedArrow({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden="true" className={className} {...props}>
      <path
        className="draw-path"
        d="M6 10c22-6 58 0 74 22 9 12 12 25 12 38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M82 60l10 12 10-13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LoopArrow({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 140 70" fill="none" aria-hidden="true" className={className} {...props}>
      <path
        className="draw-path"
        d="M4 40c18 4 34-2 44-14 8-10 2-22-8-18-12 5-4 30 18 36 22 6 48-6 72-20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M118 16l12 8-13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Squiggle({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 14" fill="none" aria-hidden="true" preserveAspectRatio="none" className={className} {...props}>
      <path
        d="M2 8c14-8 26 6 40 0s26-8 40 0 26 6 40 0 26-8 40 0 22 4 36-1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sparkle({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...props}>
      <path
        d="M12 2c.6 4.6 2.4 7.4 8 10-5.6 2.6-7.4 5.4-8 10-.6-4.6-2.4-7.4-8-10 5.6-2.6 7.4-5.4 8-10z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandCircle({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 80" fill="none" aria-hidden="true" preserveAspectRatio="none" className={className} {...props}>
      <path
        d="M30 12C70 2 160 4 186 26c18 16-14 42-86 46C38 76 6 60 10 38 13 22 50 10 120 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
