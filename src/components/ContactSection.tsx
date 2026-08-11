"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

function formatPhone(input: string) {
  if (!input) return "";
  const digits = input.replace(/\D/g, "");
  const first = digits[0];
  let d =
    first === "7" || first === "8" ? digits.slice(1) : digits;
  d = d.slice(0, 10);

  let result = "+7";
  if (d.length > 0) result += ` (${d.slice(0, 3)}`;
  if (d.length > 3) result += `) ${d.slice(3, 6)}`;
  if (d.length > 6) result += `-${d.slice(6, 8)}`;
  if (d.length > 8) result += `-${d.slice(8, 10)}`;
  return result;
}

export default function ContactSection() {
  const { t } = useLanguage();
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
          (entry.target as HTMLElement).classList.toggle(
            "is-visible",
            entry.isIntersecting
          );
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
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? formatPhone(value) : value,
    }));
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
      className="bg-zinc-950 py-24 md:py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: info */}
          <div ref={headRef} className="reveal-block">
            <p className="text-xs tracking-[0.4em] uppercase text-zinc-500 mb-4">
              {t.contact.kicker}
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight text-white leading-tight mb-10">
              {t.contact.title1}
              <br />
              <em className="font-light italic text-zinc-500">
                {t.contact.title2}
              </em>
              <br />
              {t.contact.title3}
            </h2>

            <div className="space-y-8 mb-16">
              <div>
                <p className="text-[14px] tracking-[0.3em] uppercase text-zinc-500 mb-2">
                  {t.contact.email}
                </p>
                <a
                  href="mailto:hello@16/9studio.ru"
                  className="text-lg text-zinc-300 hover:text-white transition-colors duration-200 font-light"
                >
                  hello@16x9studio.ru
                </a>
              </div>
              <div>
                <p className="text-[14px] tracking-[0.3em] uppercase text-zinc-500 mb-2">
                  {t.contact.phone}
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
                  {t.contact.address}
                </p>
                <p className="text-lg text-zinc-300 font-light">
                  {t.contact.addressValue}
                </p>
              </div>
              <div>
                <p className="text-[14px] tracking-[0.3em] uppercase text-zinc-500 mb-2">
                  {t.contact.hours}
                </p>
                <p className="text-lg text-zinc-300 font-light">
                  {t.contact.hoursValue1}
                  <br />
                  {t.contact.hoursValue2}
                </p>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-[14px] tracking-[0.3em] uppercase text-zinc-500 mb-4">
                {t.contact.social}
              </p>
              <div className="flex gap-4">
                {["VK", "TG", "YT"].map((s) => (
                  <a
                    key={s}
                    href="/not-found.tsx"
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
                  {t.contact.form.successTitle}
                </h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed">
                  {t.contact.form.successDesc}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs tracking-[0.25em] uppercase text-zinc-500 hover:text-zinc-300 transition-colors duration-200 border-b border-zinc-700 pb-px"
                >
                  {t.contact.form.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-8">
                  {t.contact.form.kicker}
                </p>

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-[14px] tracking-[0.25em] uppercase text-zinc-300 mb-2">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t.contact.form.namePh}
                      className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 text-white text-md font-light py-3 outline-none transition-colors duration-200 placeholder:text-zinc-600"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[14px] tracking-[0.25em] uppercase text-zinc-300 mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t.contact.form.emailPh}
                      className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 text-white text-md font-light py-3 outline-none transition-colors duration-200 placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                {/* Phone + Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] tracking-[0.25em] uppercase text-zinc-300 mb-2">
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.contact.form.phonePh}
                      className="w-full bg-transparent border-b border-zinc-700 focus:border-zinc-400 text-white text-md font-light py-3 outline-none transition-colors duration-200 placeholder:text-zinc-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] tracking-[0.25em] uppercase text-zinc-300 mb-2">
                      {t.contact.form.service}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-zinc-950 border-b border-zinc-700 focus:border-zinc-400 text-white text-md font-light py-3 outline-none transition-colors duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" className="text-zinc-600">
                        {t.contact.form.servicePh}
                      </option>
                      {t.contact.form.services.map((s) => (
                        <option key={s} value={s} className="bg-zinc-900">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[14px] tracking-[0.25em] uppercase text-zinc-300 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.messagePh}
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
                        {t.contact.form.sending}
                      </>
                    ) : (
                      <>
                        {t.contact.form.submit}
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
