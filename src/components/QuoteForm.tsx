"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, Mail } from "lucide-react";
import { serviceOptions, site, whatsappLink } from "@/lib/site";

type Variant = "light" | "dark";

export function QuoteForm({ variant = "light", id }: { variant?: Variant; id?: string }) {
  const [sent, setSent] = useState(false);
  const [summary, setSummary] = useState("");

  const dark = variant === "dark";
  const field =
    "w-full rounded-xl border px-4 py-3 text-[15px] outline-none transition focus:ring-4 " +
    (dark
      ? "border-white/15 bg-white/5 text-white placeholder:text-white/40 focus:border-orange-500 focus:ring-orange-500/20"
      : "border-navy-800/15 bg-white text-ink placeholder:text-muted/70 focus:border-orange-600 focus:ring-orange-600/15");
  const label = `mb-1.5 block text-sm font-medium ${dark ? "text-white/80" : "text-navy-800"}`;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = [
      `Hi ${site.name}, I'd like a free roofing quote.`,
      ``,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      data.get("email") ? `Email: ${data.get("email")}` : null,
      `Service: ${data.get("service")}`,
      data.get("location") ? `Location: ${data.get("location")}` : null,
      data.get("message") ? `Details: ${data.get("message")}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n");
    setSummary(text);
    setSent(true);
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  if (sent) {
    return (
      <div id={id} className={`text-center ${dark ? "text-white" : "text-ink"}`}>
        <CheckCircle2 className="mx-auto size-12 text-orange-600" />
        <h3 className="mt-4 font-display text-2xl font-bold">Almost done!</h3>
        <p className={`mx-auto mt-2 max-w-sm ${dark ? "text-white/70" : "text-muted"}`}>
          WhatsApp has opened with your request. Just press send and we’ll reply within working hours.
          Prefer email?
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Free roofing quote request")}&body=${encodeURIComponent(summary)}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-800 px-5 py-3 font-semibold text-white"
          >
            <Mail className="size-4" /> Send by email instead
          </a>
          <button
            type="button"
            onClick={() => setSent(false)}
            className={`rounded-full px-5 py-3 font-semibold ${dark ? "text-white/80" : "text-navy-800"}`}
          >
            Edit request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor={`${id}-name`} className={label}>Full name*</label>
        <input id={`${id}-name`} name="name" required autoComplete="name" placeholder="John Smith" className={field} />
      </div>
      <div>
        <label htmlFor={`${id}-phone`} className={label}>Phone / WhatsApp*</label>
        <input id={`${id}-phone`} name="phone" required type="tel" autoComplete="tel" placeholder="+1 555 123 4567" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={`${id}-service`} className={label}>What do you need help with?*</label>
        <div className="relative">
          <select id={`${id}-service`} name="service" required defaultValue="" className={`${field} appearance-none pr-10`}>
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s} className="text-ink">{s}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-orange-600" />
        </div>
      </div>
      <div>
        <label htmlFor={`${id}-email`} className={label}>Email</label>
        <input id={`${id}-email`} name="email" type="email" autoComplete="email" placeholder="you@email.com" className={field} />
      </div>
      <div>
        <label htmlFor={`${id}-location`} className={label}>City / Country</label>
        <input id={`${id}-location`} name="location" autoComplete="address-level2" placeholder="e.g. Dubai, UAE" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={`${id}-message`} className={label}>Tell us about your roof</label>
        <textarea id={`${id}-message`} name="message" rows={3} placeholder="Roof type, size, any leaks or damage…" className={`${field} resize-none`} />
      </div>
      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-4 font-semibold text-white shadow-lg shadow-orange-600/25 transition hover:bg-orange-700 sm:col-span-2"
      >
        Get My Free Quote
        <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
      </button>
      <p className={`text-center text-xs sm:col-span-2 ${dark ? "text-white/50" : "text-muted"}`}>
        No obligation. We reply within working hours, usually the same day.
      </p>
    </form>
  );
}
