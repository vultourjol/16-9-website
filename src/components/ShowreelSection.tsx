"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

const videoLayouts = [
  { aspect: "aspect-video", span: "md:col-span-2", isVideo: true },
  { aspect: "aspect-square", span: "md:col-span-1", isVideo: true },
  { aspect: "aspect-square", span: "md:col-span-1", isVideo: true },
  { aspect: "aspect-video", span: "md:col-span-2", isVideo: true },
];

type PlaceholderItem = {
  id: number;
  label: string;
  tag: string;
  isVideo: boolean;
};

function PlaceholderPattern() {
  return (
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
  );
}

function ItemModal({
  item,
  onClose,
}: {
  item: PlaceholderItem;
  onClose: () => void;
}) {
  const { isVideo } = item;
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
      aria-label={item.label}
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
        <div className="relative overflow-hidden bg-zinc-100 aspect-4/3 md:aspect-video">
          <PlaceholderPattern />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 border border-zinc-300 rounded-full flex items-center justify-center bg-white/60 backdrop-blur-sm">
              {isVideo ? (
                <svg
                  className="w-6 h-6 text-zinc-400 translate-x-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
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
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              )}
            </div>
            <p className="text-xs tracking-[0.2em] uppercase text-zinc-400 font-light">
              {isVideo ? t.showreel.videoSoon : t.showreel.photoSoon}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm tracking-[0.25em] uppercase text-zinc-200 font-light">
            {item.label}
          </p>
          <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 border border-zinc-700 px-2 py-0.5">
            {item.tag}
          </span>
        </div>
      </div>
    </div>
  );
}

function PlaceholderCard({
  label,
  tag,
  extraClass = "",
  isVideo = false,
  onClick,
}: {
  label: string;
  tag: string;
  extraClass?: string;
  isVideo?: boolean;
  onClick?: () => void;
}) {
  const { t } = useLanguage();
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
      onClick={onClick}
      className={`relative overflow-hidden bg-zinc-100 group cursor-pointer transition-all duration-700 ${extraClass} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Placeholder grid pattern */}
      <PlaceholderPattern />

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
          {isVideo ? t.showreel.videoSoon : t.showreel.photoSoon}
        </p>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between bg-linear-to-t from-zinc-200/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-sm font-light text-zinc-700">{label}</span>
        <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 border border-zinc-300 px-2 py-0.5">
          {tag}
        </span>
      </div>
    </div>
  );
}

export default function ShowreelSection() {
  const { t } = useLanguage();
  const headRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<PlaceholderItem | null>(null);

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
    <section id="showreel" className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headRef} className="reveal-block mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-zinc-400 mb-4">
            {t.showreel.kicker}
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-extralight text-zinc-900 leading-tight">
              {t.showreel.title1}
              <br />
              <em className="font-light italic text-zinc-400">
                {t.showreel.title2}
              </em>
            </h2>
            <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-xs">
              {t.showreel.desc}
            </p>
          </div>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {videoLayouts.map((layout, i) => {
            const p = t.showreel.videos[i];
            return (
              <PlaceholderCard
                key={i}
                label={p.label}
                tag={p.tag}
                isVideo={layout.isVideo}
                extraClass={`${layout.aspect} ${layout.span}`}
                onClick={() => {
                  if (window.matchMedia("(min-width: 768px)").matches) {
                    setActiveItem({
                      id: i,
                      label: p.label,
                      tag: p.tag,
                      isVideo: true,
                    });
                  }
                }}
              />
            );
          })}
        </div>

        {/* Photo grid */}
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.35em] uppercase text-zinc-400 mb-3">
            {t.showreel.photoKicker}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {t.showreel.photos.map((p, i) => (
              <PlaceholderCard
                key={i}
                label={p.label}
                tag={p.tag}
                extraClass="aspect-[4/3]"
                isVideo={false}
                onClick={() => {
                  if (window.matchMedia("(min-width: 768px)").matches) {
                    setActiveItem({
                      id: i,
                      label: p.label,
                      tag: p.tag,
                      isVideo: false,
                    });
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-zinc-300 pt-16">
          <p className="text-lg text-zinc-600 italic font-light mb-6 tracking-wide">
            {t.showreel.ctaTitle}
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-3 bg-zinc-900 text-white text-xs tracking-[0.25em] uppercase px-8 py-4 hover:bg-zinc-700 transition-colors duration-300"
          >
            {t.showreel.cta}
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

      {activeItem && (
        <ItemModal item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </section>
  );
}
