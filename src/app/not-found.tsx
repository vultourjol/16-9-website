"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <main className="relative w-full h-screen overflow-hidden bg-zinc-950 flex flex-col items-center justify-center text-center px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-900/40 to-zinc-950" />

      <div className="relative z-10">
        <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-6">
          {t.notFound.kicker}
        </p>
        <h1 className="text-8xl md:text-9xl font-extralight text-white leading-none tracking-tight mb-6">
          4
          <span className="inline-block w-12 md:w-16 aspect-square border border-white/40 align-baseline mx-2" />
          4
        </h1>
        <p className="text-base md:text-lg text-zinc-400 font-light max-w-md leading-relaxed mb-12">
          {t.notFound.desc}
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-3 border border-white/30 hover:border-white text-white text-xs tracking-[0.25em] uppercase px-8 py-4 transition-all duration-300 hover:bg-white hover:text-zinc-950"
        >
          {t.notFound.cta}
          <svg
            className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-300 rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </main>
  );
}
