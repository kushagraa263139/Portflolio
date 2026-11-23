/** Drawn diagrams that explain each project's idea. Not screenshots. */

export function RagVisual({ className }: { className?: string | undefined }) {
  return (
    <svg viewBox="0 0 520 300" className={className} role="img" aria-label="Diagram: transcript lines are chunked, embedded as points, searched with a query, and turned into an answer">
      <g fontFamily="var(--font-mono)" fontSize="9" fill="var(--lavender-ink)">
        {/* transcript */}
        <text x="20" y="34" letterSpacing="1.5">TRANSCRIPT</text>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <g key={i}>
            <text x="20" y={62 + i * 26} opacity="0.7">{`0${i}:${(i * 17) % 60 < 10 ? "0" : ""}${(i * 17) % 60}`}</text>
            <rect x="54" y={55 + i * 26} width={70 + ((i * 37) % 50)} height="6" rx="1" fill="var(--lavender-ink)" opacity={i === 2 || i === 3 ? 0.55 : 0.18} />
          </g>
        ))}
        {/* brace for chunk */}
        <path d="M184 104c8 0 8 4 8 12v10c0 4 4 6 8 6-4 0-8 2-8 6v10c0 8 0 12-8 12" fill="none" stroke="var(--annotation)" strokeWidth="1.4" />
        <text x="150" y="182" fill="var(--annotation)" fontFamily="var(--font-hand)" fontSize="16">chunk</text>

        {/* vector space */}
        <text x="236" y="34" letterSpacing="1.5">FAISS · VECTOR SPACE</text>
        <rect x="236" y="46" width="150" height="200" fill="none" stroke="var(--lavender-ink)" strokeOpacity="0.25" strokeDasharray="3 4" />
        {[
          [258, 80], [290, 70], [272, 112], [340, 96], [360, 140], [312, 160], [262, 200], [300, 220], [350, 210], [330, 128], [286, 140], [366, 72],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.5" fill="var(--lavender-ink)" opacity={i === 9 || i === 10 || i === 5 ? 0.85 : 0.3} />
        ))}
        <path d="M312 140l4-9 4 9-9-5h10z" fill="var(--annotation)" />
        <circle cx="316" cy="138" r="34" fill="none" stroke="var(--annotation)" strokeWidth="1.2" strokeDasharray="2 3" />
        <text x="298" y="268" fill="var(--annotation)" fontFamily="var(--font-hand)" fontSize="16">your question</text>

        {/* answer */}
        <text x="408" y="34" letterSpacing="1.5">ANSWER</text>
        <path d="M408 70h96v92h-70l-14 14v-14h-12z" fill="var(--card)" stroke="var(--lavender-ink)" strokeOpacity="0.4" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="418" y={84 + i * 16} width={i === 3 ? 44 : 74} height="5" rx="1" fill="var(--ink)" opacity="0.35" />
        ))}
        <text x="408" y="200" opacity="0.75">grounded in</text>
        <text x="408" y="213" opacity="0.75">retrieved context</text>

        {/* arrows */}
        <path d="M206 132h22" stroke="var(--ink)" strokeOpacity="0.5" strokeWidth="1.2" markerEnd="url(#rag-arrow)" />
        <path d="M390 120h14" stroke="var(--ink)" strokeOpacity="0.5" strokeWidth="1.2" markerEnd="url(#rag-arrow)" />
      </g>
      <defs>
        <marker id="rag-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0l10 5-10 5" fill="none" stroke="var(--ink)" strokeOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}

function Ribs({ x, label, haze }: { x: number; label: string; haze: number }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <rect x="0" y="20" width="130" height="150" fill="var(--ink)" opacity="0.82" />
      {/* haze */}
      {haze > 0 ? (
        <>
          <ellipse cx="42" cy="105" rx="22" ry="34" fill="var(--ivory)" opacity={haze} />
          <ellipse cx="88" cy="110" rx="22" ry="32" fill="var(--ivory)" opacity={haze * 0.8} />
        </>
      ) : null}
      {/* spine */}
      <path d="M65 30v130" stroke="var(--ivory)" strokeOpacity="0.55" strokeWidth="5" strokeDasharray="5 3" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i} stroke="var(--ivory)" strokeOpacity="0.55" strokeWidth="2" fill="none">
          <path d={`M62 ${50 + i * 16}c-18 -6 -36 0 -46 ${12 + i}`} />
          <path d={`M68 ${50 + i * 16}c18 -6 36 0 46 ${12 + i}`} />
        </g>
      ))}
      <text x="0" y="190" fontFamily="var(--font-mono)" fontSize="10" fill="var(--sage-ink)" letterSpacing="1">
        {label}
      </text>
    </g>
  );
}

export function XrayVisual({ className }: { className?: string | undefined }) {
  return (
    <svg viewBox="0 0 470 200" className={className} role="img" aria-label="Three stylised chest X-rays labelled COVID-19, Viral Pneumonia and Normal">
      <Ribs x={10} label="COVID-19" haze={0.35} />
      <Ribs x={170} label="VIRAL PNEUMONIA" haze={0.22} />
      <Ribs x={330} label="NORMAL" haze={0} />
    </svg>
  );
}

export function ConfusionSketch({ className }: { className?: string | undefined }) {
  const labels = ["COVID", "Viral", "Normal"];
  return (
    <svg viewBox="0 0 220 200" className={className} role="img" aria-label="Sketch of a three-by-three confusion matrix layout">
      <g fontFamily="var(--font-mono)" fontSize="8" fill="var(--sage-ink)">
        {labels.map((l, i) => (
          <text key={`c${l}`} x={70 + i * 46} y="28" textAnchor="middle">{l}</text>
        ))}
        {labels.map((l, i) => (
          <text key={`r${l}`} x="40" y={60 + i * 46} textAnchor="end">{l}</text>
        ))}
        {labels.map((_, r) =>
          labels.map((__, c) => (
            <rect key={`${r}${c}`} x={48 + c * 46} y={38 + r * 46} width="44" height="44" fill={r === c ? "var(--sage-ink)" : "var(--card)"} opacity={r === c ? 0.35 : 1} stroke="var(--sage-ink)" strokeOpacity="0.35" />
          )),
        )}
        <text x="117" y="194" textAnchor="middle" letterSpacing="1.5">PREDICTED →</text>
      </g>
    </svg>
  );
}

