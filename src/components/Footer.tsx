"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-zinc-950 border-t border-zinc-700 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs tracking-[0.3em] uppercase text-zinc-500">
          © {new Date().getFullYear()} {t.footer.copyright}
        </p>
        {/* <p className="text-xs text-zinc-500 font-light">
          Видеопроизводство · Live-трансляции · Монтаж
        </p> */}
        <div className="flex gap-6 mt-5 md:mt-0">
          <a
            href="/privacy-policy.pdf"
            className="text-[10px] tracking-widest uppercase text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
          >
            {t.footer.privacy}
          </a>
          <a
            href="/not-found.tsx"
            className="text-[10px] tracking-widest uppercase text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
          >
            {t.footer.offer}
          </a>
          <a
            href="https://vultourjol-website.vercel.app/"
            className="text-[10px] tracking-widest uppercase text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
          >
            {t.footer.credits} <span className="font-bold text-zinc-300">vultourjol</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
