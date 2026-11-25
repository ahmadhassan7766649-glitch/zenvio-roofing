"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X, Mail, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <div className="hidden bg-navy-950 text-[13px] text-white/75 md:block">
        <div className="container-x flex h-10 items-center justify-between">
          <p className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-orange-500" />
            Free roof inspections & written quotes within 24 hours
          </p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-white">
              <Mail className="size-3.5" /> {site.email}
            </a>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" /> {site.hours}
            </span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 shadow-[0_1px_0_rgba(12,42,70,.08)] backdrop-blur-md" : "bg-cream"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-4">
          <a href="#top" aria-label={`${site.name} home`}>
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-[15px] font-medium text-navy-800/80 transition hover:bg-navy-800/5 hover:text-navy-800"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-[15px] font-semibold text-navy-800 xl:flex"
            >
              <span className="grid size-8 place-items-center rounded-full bg-orange-100 text-orange-600">
                <Phone className="size-4" />
              </span>
              {site.phoneDisplay}
            </a>
            <a
              href="#quote"
              className="hidden rounded-full bg-orange-600 px-5 py-2.5 text-[15px] font-semibold text-white shadow-sm transition hover:bg-orange-700 sm:inline-flex"
            >
              Get a Free Quote
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid size-11 place-items-center rounded-full bg-navy-800 text-white lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-navy-950/60 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-[70] flex w-[86%] max-w-sm flex-col bg-navy-900 p-6 text-white transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between">
          <Logo light />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid size-11 place-items-center rounded-full bg-white/10"
            aria-label="Close menu"
          >
            <X className="size-5" />
          </button>
        </div>
        <nav className="mt-10 flex flex-col" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 font-display text-2xl font-semibold"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto space-y-3">
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="flex justify-center rounded-full bg-orange-600 py-3.5 font-semibold"
          >
            Get a Free Quote
          </a>
          <a
            href={site.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 py-3.5 font-semibold"
          >
            <Phone className="size-4" /> {site.phoneDisplay}
          </a>
        </div>
      </aside>
    </>
  );
}
