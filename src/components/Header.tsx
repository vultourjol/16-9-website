"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

const navHrefs = ["#hero", "#about", "#showreel", "#partners", "#faq", "#contact"];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = t.header.nav.map((label, i) => ({
    label,
    href: navHrefs[i],
  }));

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-black transition-all duration-500 ${
          scrolled
            ? "bg-white backdrop-blur-md border-b border-zinc-100 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2 group"
            aria-label={t.header.ariaLogo}
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
              {t.header.logo}
            </span>
          </button>

          <div className="flex items-center gap-3">
            {/* Sections */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={`flex items-center gap-2 text-xs tracking-widest font-medium uppercase border px-4 py-2 transition-all duration-300 ${
                scrolled
                  ? "text-zinc-900 border-zinc-900 hover:bg-zinc-900 hover:text-white"
                  : "text-white border-white/40 hover:bg-white hover:text-zinc-950"
              }`}
              aria-label={
                menuOpen ? t.header.ariaMenuClose : t.header.ariaMenuOpen
              }
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <rect
                  x="1"
                  y="1"
                  width="5"
                  height="5"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <rect
                  x="8"
                  y="1"
                  width="5"
                  height="5"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <rect
                  x="1"
                  y="8"
                  width="5"
                  height="5"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <rect
                  x="8"
                  y="8"
                  width="5"
                  height="5"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              {t.header.navLabel}
            </button>

            {/* Language switch */}
            <button
              onClick={() => setLang(lang === "ru" ? "en" : "ru")}
              className={`text-xs tracking-widest font-medium uppercase border px-3 py-2 transition-all duration-300 ${
                scrolled
                  ? "text-zinc-900 border-zinc-900 hover:bg-zinc-900 hover:text-white"
                  : "text-white border-white/40 hover:bg-white hover:text-zinc-950"
              }`}
              aria-label={
                lang === "ru" ? "Switch to English" : "Переключить на русский"
              }
            >
              {t.header.langLabel}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-zinc-950/50 backdrop-blur-sm transition-opacity duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in menu */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="h-16 px-6 border-b border-zinc-100 flex items-center justify-between gap-4 shrink-0">
          <span className="truncate text-sm font-semibold tracking-widest uppercase text-zinc-900">
            {t.header.logo}
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label={t.header.ariaMenuClose}
            className="w-9 h-9 -mr-2 flex items-center justify-center text-zinc-900 hover:opacity-60 transition-opacity"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-9 px-6 pt-12">
          {navItems.map((item, i) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              className={`text-left text-2xl font-light tracking-widest uppercase text-zinc-900 hover:text-zinc-400 transition-all duration-300 ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto px-6 pt-10 pb-8 border-t border-zinc-100">
          <button
            onClick={() => setLang(lang === "ru" ? "en" : "ru")}
            className="text-xs tracking-widest font-medium uppercase border border-zinc-900 px-4 py-2 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300"
            aria-label={
              lang === "ru" ? "Switch to English" : "Переключить на русский"
            }
          >
            {t.header.langLabel}
          </button>
        </div>
      </aside>
    </>
  );
}