import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frame Studio — Видеопроизводство, Live-трансляции, Монтаж",
  description:
    "Профессиональная видеостудия. Создаём рекламные ролики, корпоративные фильмы, проводим live-трансляции и занимаемся профессиональным монтажом.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-white text-zinc-900 antialiased">{children}</body>
    </html>
  );
}
