"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

const rows = [
  { direction: "left" as const, duration: 36 },
  { direction: "right" as const, duration: 48 },
  { direction: "left" as const, duration: 42 },
];
const itemsPerSet = 8;

function GridPattern() {
  return (
    <div className="absolute inset-0">
      {Array.from({ length: 4 }).map((_, r) => (
        <div key={r} className="flex flex-1">
          {Array.from({ length: 12 }).map((_, c) => (
            <div
              key={c}
              className="flex-1 border-[0.5px] border-zinc-200/70"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function LogoMark({ variant }: { variant: number }) {
  const className = "w-5 h-5 text-zinc-400";
  if (variant % 3 === 0) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path d="M11 7h2v10h-2z" fill="currentColor" opacity="0.5" />
      </svg>
    );
  }
  if (variant % 3 === 1) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 3l9 9-9 9-9-9 9-9z" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9.2 12l2 2 3.6-4.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LogoBlock({ label, variant }: { label: string; variant: number }) {
  return (
    <div className="relative flex items-center gap-3 shrink-0 h-16 md:h-20 px-7 md:px-9 rounded-sm border border-zinc-200 bg-white/70 overflow-hidden">
      <GridPattern />
      <div className="relative flex items-center gap-3">
        <div className="w-10 h-10 rounded-[10px] border border-zinc-300 bg-white flex items-center justify-center">
          <LogoMark variant={variant} />
        </div>
        <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-light whitespace-nowrap">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function PartnersSection() {
  const { t } = useLanguage();
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle("is-visible", entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = Array.from({ length: itemsPerSet }, (_, i) => ({
    label: `${t.partners.logoPlaceholder} ${String(i + 1).padStart(2, "0")}`,
    variant: i,
  }));

  return (
    <section id="partners" className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headRef} className="reveal-block mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-zinc-400 mb-4">
            {t.partners.kicker}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-extralight text-zinc-900 leading-tight">
              {t.partners.title1}
              <br />
              <em className="font-light italic text-zinc-400">
                {t.partners.title2}
              </em>
            </h2>
            <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-xs">
              {t.partners.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Logo strips */}
      <div className="flex flex-col gap-4 md:gap-6">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          >
            <div
              className="flex w-max shrink-0 will-change-transform"
              style={{
                display: "flex",
                width: "max-content",
                flexShrink: 0,
                animationName:
                  row.direction === "left" ? "marquee-left" : "marquee-right",
                animationDuration: `${row.duration}s`,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
              }}
            >
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex gap-4 md:gap-6 pr-4 md:pr-6"
                  aria-hidden={copy === 1}
                >
                  {items.map((item, j) => (
                    <LogoBlock key={j} label={item.label} variant={item.variant} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}