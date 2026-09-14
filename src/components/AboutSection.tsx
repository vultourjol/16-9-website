"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Translation } from "@/i18n/translations";

const serviceIcons = [
  <svg
    key="video"
    className="w-7 h-7"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>,
  <svg
    key="live"
    className="w-7 h-7"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
    />
  </svg>,
  <svg
    key="edit"
    className="w-7 h-7"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>,
];

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle("is-visible", entry.isIntersecting);
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

function TeamPhotoPlaceholder({
  alt,
  onClick,
}: {
  alt: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`group relative aspect-video w-full max-w-sm shrink-0 overflow-hidden bg-zinc-100 border border-zinc-200 ${
        onClick
          ? "cursor-pointer transition-colors duration-300 hover:border-zinc-400"
          : ""
      }`}
    >
      <div className="absolute inset-0 flex flex-col">
        {Array.from({ length: 4 }).map((_, r) => (
          <div key={r} className="flex flex-1">
            {Array.from({ length: 10 }).map((_, c) => (
              <div
                key={c}
                className="flex-1 border-[0.5px] border-zinc-200/70"
              />
            ))}
          </div>
        ))}
      </div>
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-2 ${
          onClick ? "transition-transform duration-300 group-hover:scale-105" : ""
        }`}
      >
        <div className="w-10 h-10 border border-zinc-300 rounded-full flex items-center justify-center bg-white/60">
          <svg
            className="w-4 h-4 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.2}
              d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-light">
          {alt}
        </p>
      </div>
    </div>
  );
}

function TeamPhotoModal({
  role,
  photoAlt,
  onClose,
}: {
  role: string;
  photoAlt: string;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const [closing, setClosing] = useState(false);
  const closingRef = useRef(false);
  const openedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startClose = () => {
    if (!openedRef.current || closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    timerRef.current = setTimeout(onClose, 900);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") startClose();
    };
    document.addEventListener("keydown", handleKey);
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      onClick={startClose}
      role="dialog"
      aria-modal="true"
      aria-label={role}
      className={`fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8 bg-zinc-950/90 ${
        closing ? "animate-overlay-out" : "animate-overlay-in"
      }`}
    >
      <button
        onClick={startClose}
        aria-label={t.showreel.close}
        className="absolute top-5 right-5 md:top-8 md:right-8 w-11 h-11 md:w-12 md:h-12 border border-white/30 hover:border-white text-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-zinc-950"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={(e) => {
          if (e.animationName === "modalZoomIn" && !closingRef.current) {
            openedRef.current = true;
          }
        }}
        className={`w-full max-w-4xl ${
          closing ? "animate-modal-out" : "animate-modal-in"
        }`}
      >
        <div className="relative overflow-hidden bg-zinc-100 aspect-video">
          <div className="absolute inset-0 flex flex-col">
            {Array.from({ length: 6 }).map((_, r) => (
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
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <div className="w-16 h-16 border border-zinc-300 rounded-full flex items-center justify-center bg-white/60">
              <svg
                className="w-6 h-6 text-zinc-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.2}
                  d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-xs tracking-[0.2em] uppercase text-zinc-400 font-light">
              {photoAlt}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm tracking-[0.25em] uppercase text-zinc-200 font-light">
            {role}
          </p>
          <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 border border-zinc-700 px-2 py-0.5">
            {photoAlt}
          </span>
        </div>
      </div>
    </div>
  );
}

function ReelCard({ caption, alt }: { caption: string; alt: string }) {
  return (
    <div className="w-[280px] sm:w-[340px] md:w-[420px] shrink-0">
      <div className="relative aspect-video overflow-hidden bg-zinc-100 border border-zinc-200">
        <div className="absolute inset-0 flex flex-col">
          {Array.from({ length: 4 }).map((_, r) => (
            <div key={r} className="flex flex-1">
              {Array.from({ length: 10 }).map((_, c) => (
                <div
                  key={c}
                  className="flex-1 border-[0.5px] border-zinc-200/70"
                />
              ))}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <div className="w-10 h-10 border border-zinc-300 rounded-full flex items-center justify-center bg-white/60">
            <svg
              className="w-4 h-4 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-light">
            {alt}
          </p>
        </div>
      </div>
      <p className="mt-3 text-xs tracking-[0.2em] uppercase text-zinc-500 font-light">
        {caption}
      </p>
    </div>
  );
}

function TeamList({
  team,
  onOpenPhoto,
}: {
  team: Translation["about"]["team"];
  onOpenPhoto: (role: string) => void;
}) {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {team.members.map((m, i) => {
        const open = openIndex === i;
        return (
          <div
            key={i}
            className={`border-b border-zinc-900 px-3 -mx-3 transition-colors duration-300 ${
              open ? "bg-zinc-100" : ""
            }`}
          >
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="w-full flex items-center justify-between gap-6 py-5 text-left group cursor-pointer"
            >
              <span className="text-lg md:text-xl font-light text-zinc-900 group-hover:text-zinc-500 transition-colors duration-300">
                {m.role}
              </span>
              <span
                className={`shrink-0 w-8 h-8 border border-zinc-900 flex items-center justify-center text-zinc-900 transition-all duration-300 group-hover:border-zinc-500 group-hover:text-zinc-500 ${
                  open ? "rotate-45 bg-zinc-900 text-white border-zinc-900" : ""
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
              className={`grid transition-all duration-500 ease-in-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 md:items-start pb-6">
                  <TeamPhotoPlaceholder
                    alt={t.about.team.photoAlt}
                    onClick={() => {
                      if (window.matchMedia("(min-width: 768px)").matches) {
                        onOpenPhoto(m.role);
                      }
                    }}
                  />
                  <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-sm pt-0.5">
                    {m.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function AboutSection() {
  const { t } = useLanguage();
  const headRef = useReveal(0.1);
  const statsRef = useReveal(0.1);
  const servicesRef = useReveal(0.1);
  const imgRef = useReveal(0.1);
  const teamRef = useReveal(0.1);
  const processRef = useReveal(0.1);
  const reelRef = useReveal(0.1);
  const benefitsRef = useReveal(0.1);
  const [activePhoto, setActivePhoto] = useState<{ role: string } | null>(null);

  return (
    <section id="about" className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headRef} className="reveal-block mb-12 md:mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-zinc-900 mb-4">
            {t.about.kicker}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="text-4xl md:text-6xl font-extralight text-zinc-900 leading-tight max-w-xl">
              {t.about.title1}
              <br />
              <em className="font-light italic text-zinc-400">
                {t.about.title2}
              </em>{" "}
              {t.about.title3}
            </h2>
            <p className="text-md text-zinc-900 font-light leading-relaxed max-w-xs md:max-w-sm">
              <span className="italic font-bold">16/9</span> {t.about.desc}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="reveal-block grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900 mb-12 md:mb-20"
        >
          {t.about.stats.map((s, i) => (
            <div
              key={i}
              className="bg-white px-8 py-10 flex flex-col gap-2"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-4xl font-extralight text-zinc-900 tabular-nums">
                {s.value}
              </span>
              <span className="text-xs tracking-widest uppercase text-zinc-900">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Services + image */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div ref={servicesRef} className="reveal-block space-y-0">
            {t.about.services.map((s, i) => (
              <div
                key={i}
                className="group border-t border-zinc-900 py-8 flex gap-6 hover:bg-zinc-100 transition-colors duration-300 px-2 -mx-2"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mt-1 shrink-0 text-zinc-400 group-hover:text-zinc-900 transition-colors duration-300">
                  {serviceIcons[i]}
                </div>
                <div>
                  <h3 className="text-md font-medium text-zinc-900 tracking-wide mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-zinc-900" />
          </div>

          <div ref={imgRef} className="reveal-block-right">
            <div className="relative">
              <img
                src="/images/camera.webp"
                alt={t.about.imgAlt}
                className="w-full h-[480px] object-cover grayscale"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-zinc-200" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-zinc-950" />
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mt-16 border-t border-zinc-900 pt-12 md:pt-20 grid md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div ref={teamRef} className="reveal-block">
            <p className="text-xs tracking-[0.4em] uppercase text-zinc-900 mb-4">
              {t.about.team.kicker}
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight text-zinc-900 leading-tight mb-6">
              {t.about.team.title1}
              <br />
              <em className="font-light italic text-zinc-400">
                {t.about.team.title2}
              </em>
            </h2>
            <p className="text-md text-zinc-900 font-light leading-relaxed max-w-sm">
              {t.about.team.desc}
            </p>
          </div>

          <TeamList team={t.about.team} onOpenPhoto={(role) => setActivePhoto({ role })} />
        </div>

        {/* Process */}
        <div className="mt-16 border-t border-zinc-900 pt-12 md:pt-20">
          <div ref={processRef} className="reveal-block mb-8 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-zinc-900 leading-tight mb-6">
              {t.about.process.title1}
              <br />
              <em className="font-light italic text-zinc-400">
                {t.about.process.title2}
              </em>
            </h2>
            <p className="text-md text-zinc-900 font-light leading-relaxed max-w-sm">
              {t.about.process.desc}
            </p>
          </div>

          <div>
            {t.about.process.items.map((item, i) => (
              <div
                key={i}
                className="grid md:grid-cols-[minmax(0,240px)_1fr] gap-8 md:gap-16 py-12 md:py-16 border-t border-zinc-900"
              >
                <div>
                  <span className="text-5xl md:text-6xl font-extralight text-zinc-200 tabular-nums leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl md:text-2xl font-light text-zinc-900 leading-snug max-w-[220px]">
                    {item.title}
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-x-10">
                  {item.steps.map((s, j) => (
                    <div key={j} className="border-t border-zinc-300 py-5">
                      <span className="block text-xs tracking-widest text-zinc-400 tabular-nums mb-2">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm font-medium text-zinc-900 tracking-wide mb-1">
                        {s.title}
                      </p>
                      <p className="text-sm text-zinc-500 font-light leading-relaxed">
                        {s.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* On-set showreel */}
        <div className="mt-16 border-t border-zinc-900 pt-12 md:pt-20">
          <div
            ref={reelRef}
            className="reveal-block mb-8 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <h2 className="text-4xl md:text-5xl font-extralight text-zinc-900 leading-tight">
              {t.about.setReel.title1}
              <br />
              <em className="font-light italic text-zinc-400">
                {t.about.setReel.title2}
              </em>
            </h2>
            <p className="text-md text-zinc-900 font-light leading-relaxed max-w-sm">
              {t.about.setReel.desc}
            </p>
          </div>

          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div
              className="flex w-max shrink-0 will-change-transform"
              style={{
                display: "flex",
                width: "max-content",
                flexShrink: 0,
                animationName: "marquee-right",
                animationDuration: "45s",
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
              }}
            >
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex gap-5 pr-5"
                  aria-hidden={copy === 1}
                >
                  {t.about.setReel.items.map((item, i) => (
                    <ReelCard
                      key={i}
                      caption={item.caption}
                      alt={t.about.setReel.photoLabel}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-16 border-t border-zinc-900 pt-12 md:pt-20">
          <div ref={benefitsRef} className="reveal-block mb-8 md:mb-10">
            <p className="text-xs tracking-[0.4em] uppercase text-zinc-400 mb-4">
              {t.about.benefits.kicker}
            </p>
            <h3 className="text-2xl md:text-3xl font-extralight text-zinc-900 leading-tight">
              {t.about.benefits.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-300 border border-zinc-300">
            {t.about.benefits.items.map((item, i) => (
              <div key={i} className="bg-white px-8 py-10">
                <h4 className="text-sm font-medium text-zinc-900 tracking-wide mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activePhoto && (
        <TeamPhotoModal
          role={activePhoto.role}
          photoAlt={t.about.team.photoAlt}
          onClose={() => setActivePhoto(null)}
        />
      )}
    </section>
  );
}
