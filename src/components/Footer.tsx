export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-700 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs tracking-[0.3em] uppercase text-zinc-500">
          © {new Date().getFullYear()} 16/9 ТВОРЧЕСКАЯ МАСТЕРСКАЯ
        </p>
        {/* <p className="text-xs text-zinc-500 font-light">
          Видеопроизводство · Live-трансляции · Монтаж
        </p> */}
        <div className="flex gap-6">
          {["Политика конфиденциальности", "Договор оферты"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-[10px] tracking-widest uppercase text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
