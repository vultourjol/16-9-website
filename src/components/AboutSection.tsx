"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

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

export default function AboutSection() {
  const { t } = useLanguage();
  const headRef = useReveal(0.1);
  const statsRef = useReveal(0.1);
  const servicesRef = useReveal(0.1);
  const imgRef = useReveal(0.1);

  return (
    <section id="about" className="bg-white py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headRef} className="reveal-block mb-24">
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
          className="reveal-block grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900 mb-24"
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
                <div className="mt-1 flex-shrink-0 text-zinc-400 group-hover:text-zinc-900 transition-colors duration-300">
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
      </div>
    </section>
  );
}
