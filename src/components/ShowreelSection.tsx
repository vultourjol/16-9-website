"use client";

import { useEffect, useRef, useState } from "react";

const videoPlaceholders = [
  {
    id: 1,
    label: "Рекламный ролик",
    tag: "Видеопроизводство",
    aspect: "aspect-video",
    span: "md:col-span-2",
  },
  {
    id: 2,
    label: "Корпоративный фильм",
    tag: "Постпродакшн",
    aspect: "aspect-square",
    span: "md:col-span-1",
  },
  {
    id: 3,
    label: "Live-трансляция",
    tag: "Live-стриминг",
    aspect: "aspect-square",
    span: "md:col-span-1",
  },
  {
    id: 4,
    label: "Документальный проект",
    tag: "Видеопроизводство",
    aspect: "aspect-video",
    span: "md:col-span-2",
  },
];

const photoPlaceholders = [
  { id: 5, label: "Студийная съёмка", tag: "Фото" },
  { id: 6, label: "Event-фотография", tag: "Фото" },
  { id: 7, label: "Портретная съёмка", tag: "Фото" },
];

function PlaceholderCard({
  label,
  tag,
  extraClass = "",
  isVideo = false,
}: {
  label: string;
  tag: string;
  extraClass?: string;
  isVideo?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-zinc-100 group cursor-pointer transition-all duration-700 ${extraClass} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Placeholder grid pattern */}
      <div className="absolute inset-0 flex flex-col">
        {Array.from({ length: 6 }).map((_, r) => (
          <div key={r} className="flex flex-1">
            {Array.from({ length: 8 }).map((_, c) => (
              <div
                key={c}
                className="flex-1 border-[0.5px] border-zinc-200/70"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Center icon */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-all duration-300 group-hover:scale-105">
        <div className="w-14 h-14 border border-zinc-300 rounded-full flex items-center justify-center bg-white/60 backdrop-blur-sm group-hover:border-zinc-500 transition-colors duration-300">
          {isVideo ? (
            <svg
              className="w-5 h-5 text-zinc-400 translate-x-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          )}
        </div>
        <p className="text-xs tracking-[0.2em] uppercase text-zinc-400 font-light">
          {isVideo ? "Видео скоро" : "Фото скоро"}
        </p>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between bg-gradient-to-t from-zinc-200/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-sm font-light text-zinc-700">{label}</span>
        <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 border border-zinc-300 px-2 py-0.5">
          {tag}
        </span>
      </div>
    </div>
  );
}

export default function ShowreelSection() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="showreel" className="bg-zinc-50 py-32 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headRef} className="reveal-block mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-zinc-400 mb-4">
            Шоурум
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-extralight text-zinc-900 leading-tight">
              Наши<br />
              <em className="font-light not-italic text-zinc-400">работы</em>
            </h2>
            <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-xs">
              Раздел пополняется. Здесь появятся видео и фотоматериалы лучших
              проектов студии.
            </p>
          </div>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {videoPlaceholders.map((p, i) => (
            <PlaceholderCard
              key={p.id}
              label={p.label}
              tag={p.tag}
              isVideo={true}
              extraClass={`${p.aspect} ${p.span}`}
              /* stagger via CSS delay trick via inline style is not possible without wrapping, handled in component */
            />
          ))}
        </div>

        {/* Photo grid */}
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.35em] uppercase text-zinc-400 mb-3">
            Фотоработы
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {photoPlaceholders.map((p) => (
              <PlaceholderCard
                key={p.id}
                label={p.label}
                tag={p.tag}
                extraClass="aspect-[4/3]"
                isVideo={false}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-zinc-300 pt-16">
          <p className="text-lg text-zinc-600 italic font-light mb-6 tracking-wide">
            Хотите стать частью нашего портфолио?
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-3 bg-zinc-900 text-white text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-zinc-700 transition-colors duration-300"
          >
            Обсудить проект
            <svg
              className="w-3 h-3"
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
          </button>
        </div>
      </div>
    </section>
  );
}
