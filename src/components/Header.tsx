"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Главная", href: "#hero" },
  { label: "О студии", href: "#about" },
  { label: "Шоурум", href: "#showreel" },
  { label: "Контакты", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2 group"
            aria-label="На главную"
          >
            <div className="w-7 h-7 bg-zinc-900 rounded-sm flex items-center justify-center group-hover:scale-95 transition-transform duration-200">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="3" fill="white" />
                <path
                  d="M8 1V3M8 13V15M1 8H3M13 8H15"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span
              className={`text-sm font-semibold tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? "text-zinc-900" : "text-white"
              }`}
            >
              16/9 ТВОРЧЕСКАЯ МАСТЕРСКАЯ
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 hover:opacity-60 ${
                  scrolled ? "text-zinc-800" : "text-white/90"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`md:hidden flex flex-col gap-1.5 w-6 h-5 justify-center items-center group transition-colors ${
              scrolled ? "text-zinc-900" : "text-white"
            }`}
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <span
              className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                menuOpen ? "w-5 rotate-45 translate-y-2" : "w-5"
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0 w-0" : "w-4"
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 origin-center ${
                menuOpen ? "w-5 -rotate-45 -translate-y-2" : "w-5"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-zinc-950 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
          {navItems.map((item, i) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              className={`text-2xl font-light tracking-widest uppercase text-white hover:text-zinc-400 transition-all duration-300 ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
