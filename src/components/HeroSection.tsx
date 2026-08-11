"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      const y = window.scrollY;
      const opacity = Math.max(0, 1 - y / 400);
      const translateY = y * 0.35;
      textRef.current.style.opacity = String(opacity);
      textRef.current.style.transform = `translateY(${translateY}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-zinc-950"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/23384400/pexels-photo-23384400.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
          alt="Видеопроизводство"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/20 to-zinc-950/80" />
      </div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-zinc-400 mb-6 animate-fade-in-up animation-delay-200">
          Профессиональная видеостудия
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white leading-none tracking-tight mb-6 animate-fade-in-up animation-delay-400">
          Каждый кадр —<br />
          <span className="italic font-light">история</span>
        </h1>
        <p className="text-base md:text-lg text-zinc-300 font-light max-w-xl leading-relaxed mb-12 animate-fade-in-up animation-delay-600">
          Видеопроизводство, прямые трансляции и монтаж для брендов, которые
          хотят быть услышанными.
        </p>
        <button
          onClick={scrollToAbout}
          className="group animate-fade-in-up animation-delay-800 inline-flex items-center gap-3 border border-white/30 hover:border-white text-white text-xs tracking-[0.25em] uppercase px-8 py-4 transition-all duration-300 hover:bg-white hover:text-zinc-950"
        >
          Узнать больше
          <svg
            className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
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

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in-up animation-delay-1000">
        <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500">
          Скролл
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent animate-scroll-line" />
      </div>
    </section>
  );
}
