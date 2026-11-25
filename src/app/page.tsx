import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  Cloud,
  Droplets,
  FileText,
  Home as HomeIcon,
  Layers,
  Mail,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  Star,
  Wrench,
  X,
  Clock,
  Users,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { QuoteForm } from "@/components/QuoteForm";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  comparison,
  faqs,
  nav,
  projects,
  reviews,
  services,
  site,
  stats,
  steps,
  whatsappLink,
} from "@/lib/site";

const serviceIcons = {
  home: HomeIcon,
  wrench: Wrench,
  layers: Layers,
  droplets: Droplets,
  search: Search,
  cloud: Cloud,
} as const;

function Stars({ className = "size-4" }: { className?: string }) {
  return (
    <span className="flex gap-0.5 text-orange-500" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-current`} />
      ))}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${light ? "!text-orange-500" : ""}`}>
        <span className="h-px w-6 bg-current" />
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-navy-800"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/70" : "text-muted"}`}>{text}</p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* ───────────── HERO ───────────── */}
        <section className="px-2 pb-2 sm:px-3 sm:pb-3">
          <div className="relative overflow-hidden rounded-[28px] bg-navy-950">
            <Image
              src="/images/metal-roof-house.jpg"
              alt="Brick house with a new standing-seam metal roof"
              fill
              preload
              sizes="100vw"
              className="object-cover object-[center_40%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/65 to-navy-950/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />

            <div className="container-x relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:py-28">
              <div className="text-white">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 py-1.5 pl-2 pr-4 backdrop-blur">
                  <Stars className="size-3.5" />
                  <span className="text-sm font-medium text-white/90">Rated 4.9/5 by homeowners & businesses</span>
                </div>
                <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                  Roofs built to <span className="text-orange-500">outlast</span> the weather.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
                  New roofs, repairs, metal roofing and waterproofing, delivered by a trained crew with a fixed
                  written price and a workmanship warranty on every job.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#quote"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-600/30 transition hover:bg-orange-700"
                  >
                    Get a Free Inspection
                    <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={whatsappLink("Hi Zenvio, I have a question about my roof.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/15"
                  >
                    <WhatsAppIcon className="size-5" /> Chat on WhatsApp
                  </a>
                </div>
                <ul className="mt-10 grid gap-3 text-[15px] text-white/85 sm:grid-cols-2">
                  {[
                    "Free inspection & photo report",
                    "Fixed written quote in 24 hours",
                    "Own trained crews, never subcontracted",
                    "Written workmanship warranty",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2.5">
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-orange-600">
                        <Check className="size-3 text-white" strokeWidth={3} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div id="quote" className="scroll-mt-28 rounded-3xl bg-white p-6 shadow-2xl shadow-navy-950/40 sm:p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-navy-800">Get your free quote</h2>
                    <p className="mt-1 text-[15px] text-muted">Takes 30 seconds. No obligation.</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                    Reply in 24h
                  </span>
                </div>
                <QuoteForm id="hero-form" />
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── STATS + MARQUEE ───────────── */}
        <section className="container-x py-14 sm:py-16">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-navy-800/10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-cream p-6 sm:p-8">
                <p className="font-display text-4xl font-extrabold tracking-tight text-navy-800 sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-medium text-muted sm:text-base">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="overflow-hidden border-y border-navy-800/10 bg-white py-5" aria-hidden="true">
          <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12">
                {[
                  "Roof Replacement",
                  "Leak Repair",
                  "Metal Roofing",
                  "Waterproofing",
                  "Free Inspections",
                  "Storm Damage",
                  "Gutters & Flashing",
                  "Commercial Roofing",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-12 font-display text-xl font-bold text-navy-800/80">
                    {t}
                    <span className="size-2 rotate-45 bg-orange-600" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ───────────── SERVICES ───────────── */}
        <section id="services" className="container-x py-20 sm:py-28">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Our services"
              title="Whatever your roof needs, we’ve done it before."
              text="From a single cracked tile to a complete new roof system, one accountable team handles it start to finish."
            />
            <a
              href="#quote"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-navy-800/15 px-5 py-3 font-semibold text-navy-800 transition hover:border-navy-800 lg:self-auto"
            >
              Not sure what you need? Ask us <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon as keyof typeof serviceIcons];
              return (
                <article
                  key={s.title}
                  className="group relative flex flex-col rounded-3xl border border-navy-800/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-navy-800 hover:shadow-2xl hover:shadow-navy-800/20"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid size-14 place-items-center rounded-2xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white">
                      <Icon className="size-6" />
                    </span>
                    <span className="font-display text-sm font-bold text-navy-800/30 transition group-hover:text-white/30">
                      /{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 flex items-center gap-2 font-display text-xl font-bold text-navy-800 transition group-hover:text-white">
                    {s.title}
                    {s.tag && (
                      <span className="rounded-full bg-orange-600 px-2.5 py-0.5 font-sans text-[11px] font-semibold uppercase tracking-wide text-white">
                        {s.tag}
                      </span>
                    )}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted transition group-hover:text-white/70">{s.text}</p>
                  <a
                    href="#quote"
                    className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-orange-600 transition group-hover:text-orange-500"
                  >
                    Get a quote <ArrowRight className="size-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* ───────────── WHY US / COMPARISON ───────────── */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Why Zenvio"
                title="You’ve probably dealt with a roofer like this before."
                text="Most roofing headaches come from the same few problems. We built our whole process to remove them."
              />
              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-[16/10] lg:aspect-[4/3]">
                <Image
                  src="/images/roofer-orange-helmet.jpg"
                  alt="Zenvio roofer in a safety helmet replacing damaged roof sheets"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-[center_30%]"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl bg-white/95 p-4 backdrop-blur">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-800 text-white">
                    <ShieldCheck className="size-5" />
                  </span>
                  <p className="text-sm font-medium leading-snug text-navy-800">
                    Licensed, fully insured and backed by a written workmanship warranty.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-navy-800/10 lg:self-start">
              <div className="grid grid-cols-2 bg-cream text-sm font-semibold sm:grid-cols-[0.8fr_1fr_1fr]">
                <div className="hidden p-5 text-muted sm:block" />
                <div className="flex items-center gap-2 p-5 text-muted">
                  <X className="size-4" /> Typical roofer
                </div>
                <div className="flex items-center gap-2 bg-navy-800 p-5 text-white">
                  <span className="grid size-5 place-items-center rounded-full bg-orange-600">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  Zenvio
                </div>
              </div>
              {comparison.map((row) => (
                <div
                  key={row.topic}
                  className="grid grid-cols-2 border-t border-navy-800/10 sm:grid-cols-[0.8fr_1fr_1fr]"
                >
                  <div className="col-span-2 px-5 pt-5 font-display font-bold text-navy-800 sm:col-span-1 sm:p-5">
                    {row.topic}
                  </div>
                  <div className="p-5 text-[15px] leading-relaxed text-muted line-through decoration-navy-800/20">
                    {row.others}
                  </div>
                  <div className="bg-navy-800/[0.03] p-5 text-[15px] font-medium leading-relaxed text-navy-800">
                    {row.us}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── PROCESS ───────────── */}
        <section id="process" className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-28">
          <div
            className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-orange-600/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="container-x relative">
            <SectionHeading
              light
              eyebrow="How it works"
              title="From first call to final walkthrough."
              text="A simple, transparent process. You see the paperwork before you ever see the crew."
            />
            <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition hover:border-orange-500/50 hover:bg-white/[0.07]"
                >
                  <span className="font-display text-6xl font-extrabold text-orange-500/90">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/65">{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-orange-600 p-8 sm:flex-row sm:items-center sm:p-10">
              <div>
                <h3 className="font-display text-2xl font-bold sm:text-3xl">Ready for step one?</h3>
                <p className="mt-2 text-white/85">Book your free, no-obligation roof inspection today.</p>
              </div>
              <a
                href="#quote"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-navy-800 transition hover:bg-cream"
              >
                Book Free Inspection <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ───────────── PROJECTS ───────────── */}
        <section id="projects" className="container-x py-20 sm:py-28">
          <SectionHeading
            eyebrow="Recent work"
            title="Roofs we’re proud to put our name on."
            text="A selection of recent projects across residential, heritage and commercial properties."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-navy-900"
              >
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy-800 backdrop-blur">
                  {p.type}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                  <dl className="mt-4 flex gap-6 border-t border-white/15 pt-4">
                    {p.meta.map((m) => (
                      <div key={m.k}>
                        <dt className="text-xs uppercase tracking-wide text-white/60">{m.k}</dt>
                        <dd className="font-display font-bold">{m.v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ───────────── REVIEWS ───────────── */}
        <section id="reviews" className="bg-white py-20 sm:py-28">
          <div className="container-x">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="Client reviews"
                title="The work speaks. So do our clients."
              />
              <div className="flex items-center gap-4 rounded-2xl bg-cream px-6 py-4">
                <p className="font-display text-5xl font-extrabold text-navy-800">4.9</p>
                <div>
                  <Stars />
                  <p className="mt-1 text-sm text-muted">Average from verified clients</p>
                </div>
              </div>
            </div>
            <div className="mt-12 columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
              {reviews.map((r) => (
                <figure key={r.name} className="break-inside-avoid rounded-3xl border border-navy-800/10 bg-cream/60 p-7">
                  <Stars />
                  <blockquote className="mt-4 text-[17px] leading-relaxed text-navy-800">“{r.text}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-navy-800 font-display font-bold text-white">
                      {r.name[0]}
                    </span>
                    <span>
                      <span className="block font-semibold text-navy-800">{r.name}</span>
                      <span className="text-sm text-muted">{r.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── GUARANTEES ───────────── */}
        <section className="container-x py-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BadgeCheck, t: "Licensed & insured", d: "Full liability cover on every job." },
              { icon: FileText, t: "Written warranty", d: "Workmanship guaranteed in writing." },
              { icon: Users, t: "Own crews", d: "Trained staff, never subcontracted." },
              { icon: Clock, t: "On-time promise", d: "Clear schedule agreed upfront." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex items-start gap-4 rounded-3xl bg-white p-6 ring-1 ring-navy-800/10">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-navy-800 text-white">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-navy-800">{t}</h3>
                  <p className="mt-1 text-sm text-muted">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────── FAQ ───────────── */}
        <section id="faq" className="container-x grid gap-12 pb-20 pt-8 sm:pb-28 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Straight answers before you call."
              text="Can’t find what you’re looking for? Message us and a roofer, not a call centre, will answer."
            />
            <a
              href={whatsappLink("Hi Zenvio, I have a question:")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-800 px-6 py-3.5 font-semibold text-white transition hover:bg-navy-700"
            >
              <WhatsAppIcon className="size-5" /> Ask on WhatsApp
            </a>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="group rounded-2xl bg-white p-6 ring-1 ring-navy-800/10 open:ring-navy-800/20"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-bold text-navy-800">
                  {f.q}
                  <span className="faq-icon grid size-8 shrink-0 place-items-center rounded-full bg-orange-100 text-orange-600 transition">
                    <Plus className="size-4" />
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────────── CONTACT ───────────── */}
        <section id="contact" className="px-2 pb-2 sm:px-3 sm:pb-3">
          <div className="relative overflow-hidden rounded-[28px] bg-navy-950">
            <Image
              src="/images/clay-tiles.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/95 to-navy-900/80" />
            <div className="container-x relative grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16">
              <div className="text-white">
                <SectionHeading
                  light
                  eyebrow="Get in touch"
                  title="Get your roof checked before the next storm does."
                  text="Tell us a little about your roof and we’ll get back to you with next steps, usually the same day."
                />
                <div className="mt-10 space-y-4">
                  {[
                    { icon: Phone, label: "Call us", value: site.phoneDisplay, href: site.phoneHref },
                    { icon: WhatsAppIcon, label: "WhatsApp", value: site.phoneDisplay, href: whatsappLink() },
                    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
                    { icon: Clock, label: "Working hours", value: site.hours },
                  ].map(({ icon: Icon, label, value, href }) => {
                    const inner = (
                      <>
                        <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-orange-500">
                          <Icon className="size-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm text-white/50">{label}</span>
                          <span className="block break-all font-semibold sm:break-normal">{value}</span>
                        </span>
                      </>
                    );
                    return href ? (
                      <a
                        key={label}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 rounded-2xl p-2 transition hover:bg-white/5"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div key={label} className="flex items-center gap-4 p-2">
                        {inner}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
                <h3 className="mb-6 font-display text-2xl font-bold text-white">Request a free quote</h3>
                <QuoteForm id="contact-form" variant="dark" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm leading-relaxed text-muted">{site.description}</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-navy-800">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-muted transition hover:text-orange-600">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-navy-800">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-muted">
              <li>
                <a href={site.phoneHref} className="hover:text-orange-600">{site.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all hover:text-orange-600">{site.email}</a>
              </li>
              <li>{site.hours}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-navy-800/10 pt-6 text-sm text-muted sm:flex-row sm:justify-between">
          <p>© 2026 {site.legalName}. All rights reserved.</p>
          <p>Licensed & insured roofing contractor.</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink("Hi Zenvio, I'd like a roofing quote.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Zenvio on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition hover:scale-105"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  );
}
