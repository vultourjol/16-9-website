import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export const metadata: Metadata = {
  title: "16/9 Творческая мастерская",
  description:
    "Профессиональная видеостудия. Создаём рекламные ролики, корпоративные фильмы, проводим live-трансляции и занимаемся профессиональным монтажом.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-white text-zinc-900 antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
