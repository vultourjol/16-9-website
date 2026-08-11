"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  "Видеопроизводство",
  "Live-трансляция",
  "Монтаж и постпродакшн",
  "Фотосъёмка",
  "Комплексный проект",
];

export default function ContactSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const els = [headRef.current, formRef.current].filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Ошибка сервера");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Неизвестная ошибка");
    }
  };

  return (
    <section
      id="contact"
      className="bg-zinc-950 py-32 md:py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: info */}
          <div ref={headRef} className="reveal-block">
            <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-4">
              Контакты
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight text-white leading-tight mb-10">
              Давайте<br />
              <em className="font-light not-italic text-zinc-500">создадим</em>
              <br />
              вместе
            </h2>

            <div className="space-y-8 mb-16">
              <div>
                <p className="text-[14px] tracking-[0.3em] uppercase text-zinc-500 mb-2">
                  Email
                </p>
                <a
                  href="mailto:hello@16/9studio.ru"
                  className="text-lg text-zinc-300 hover:text-white transition-colors duration-200 font-light"
                >
                  hello@16.9studio.ru
                </a>
              </div>
              <div>
                <p className="text-[14px] tracking-[0.3em] uppercase text-zinc-500 mb-2">
                  Телефон
                </p>
                <a
                  href="tel:+79001234567"
                  className="text-lg text-zinc-300 hover:text-white transition-colors duration-200 font-light"
                >
                  +7 (900) 123-45-67
                </a>
              </div>
              <div>
                <p className="text-[14px] tracking-[0.3em] uppercase text-zinc-500 mb-2">
                  Адрес
                </p>
                <p className="text-lg text-zinc-300 font-light">
                  Москва, ул. Порядковый переулок, д. 21
                </p>
              </div>
              <div>
                <p className="text-[14px] tracking-[0.3em] uppercase text-zinc-500 mb-2">
                  Режим работы
                </p>
                <p className="text-lg text-zinc-300 font-light">
                  Пн – Пт: 10:00 — 19:00<br />
                  Сб: по договорённости
                </p>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-[14px] tracking-[0.3em] uppercase text-zinc-500 mb-4">
                Мы в сети
              </p>
              <div className="flex gap-4">
                {["VK", "TG", "YT"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-14 h-14 border border-zinc-700 flex items-center justify-center text-[14px] tracking-widest text-zinc-500 hover:border-zinc-400 hover:text-zinc-300 transition-all duration-200"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div ref={formRef} className="reveal-block-right">
            {status === "success" ? (
              <div className="h-full flex flex-col items-start justify-center gap-6 py-16">
                <div className="w-12 h-12 border border-zinc-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-zinc-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-extralight text-white">
                  Сообщение отправлено
                </h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">
                  Спасибо за обращение! Мы свяжемся с вами в течение рабочего
                  дня.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs tracking-[0.25em] uppercase text-zinc-500 hover:text-zinc-300 transition-colors duration-200 border-b border-zinc-700 pb-px"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-8">
                  Форма обратной связи
                </p>

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-[14px] tracking-[0.25em] uppercase text-zinc-300 mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Иван Иванов"
                      className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 text-white text-md font-light py-3 outline-none transition-colors duration-200 placeholder:text-zinc-600"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[14px] tracking-[0.25em] uppercase text-zinc-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ivan@example.com"
                      className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 text-white text-md font-light py-3 outline-none transition-colors duration-200 placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                {/* Phone + Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] tracking-[0.25em] uppercase text-zinc-300 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (999) 000-00-00"
                      className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 text-white text-md font-light py-3 outline-none transition-colors duration-200 placeholder:text-zinc-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] tracking-[0.25em] uppercase text-zinc-300 mb-2">
                      Услуга
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-zinc-950 border-b border-zinc-700 focus:border-zinc-400 text-white text-md font-light py-3 outline-none transition-colors duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" className="text-zinc-600">
                        Выберите услугу
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-zinc-900">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] tracking-[0.25em] uppercase text-zinc-300 mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                    className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 text-white text-md font-light py-3 outline-none transition-colors duration-200 placeholder:text-zinc-600 resize-none"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p className="text-xs text-red-400 tracking-wide">
                    {errorMsg}
                  </p>
                )}

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-3 border border-zinc-600 hover:border-white text-white text-xs tracking-[0.25em] uppercase px-8 py-4 transition-all duration-300 hover:bg-white hover:text-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <svg
                          className="w-3 h-3 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Отправка...
                      </>
                    ) : (
                      <>
                        Отправить заявку
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
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
