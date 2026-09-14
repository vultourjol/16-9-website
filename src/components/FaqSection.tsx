"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-zinc-700">
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-panel-${q}`}
        className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left group cursor-pointer"
      >
        <span className="text-base md:text-lg font-light text-zinc-300 group-hover:text-white transition-colors duration-300">
          {q}
        </span>
        <span
          className={`shrink-0 w-8 h-8 border border-zinc-700 flex items-center justify-center text-zinc-400 transition-all duration-300 group-hover:border-zinc-400 group-hover:text-zinc-300 ${
            open ? "rotate-45 bg-white border-white text-zinc-950" : ""
          }`}
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeWidth={1.5}
              d="M12 5v14M5 12h14"
            />
          </svg>
        </span>
      </button>

      <div
        id={`faq-panel-${q}`}
        role="region"
        className={`grid transition-all duration-500 ease-in-out ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 md:pb-7 pr-0 md:pr-16 text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const { t } = useLanguage();
  const headRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  return (
    <section id="faq" className="bg-zinc-950 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headRef} className="reveal-block mb-12 md:mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-4">
            {t.faq.kicker}
          </p>
          <h2 className="text-4xl md:text-6xl font-extralight text-white leading-tight">
            {t.faq.title1}
            <br />
            <em className="font-light italic text-zinc-500">
              {t.faq.title2}
            </em>
          </h2>
        </div>

        {/* Accordion */}
        <div className="border-t border-zinc-700">
          {t.faq.items.map((item, i) => (
            <FaqItem
              key={i}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}