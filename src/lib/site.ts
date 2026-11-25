// All business details live here so they are easy to edit in one place.
// Numbers marked "placeholder" are sample figures: replace them with your real ones.

export const site = {
  name: "Zenvio",
  legalName: "Zenvio Roofing",
  tagline: "Roofing done right, the first time.",
  description:
    "Zenvio is a full-service roofing company: new roofs, repairs, metal roofing, waterproofing and free inspections, with written quotes and a workmanship warranty.",
  phoneDisplay: "+92 339 4735212",
  phoneHref: "tel:+923394735212",
  whatsapp: "923394735212",
  email: "ahmadhasssan7766649@gmail.com",
  hours: "Mon–Sat · 8:00–18:00",
  url: "https://zenvio.vercel.app",
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// placeholder figures
export const stats = [
  { value: "2,500+", label: "Roofs completed" },
  { value: "15 yrs", label: "In the trade" },
  { value: "4.9/5", label: "Average client rating" },
  { value: "24 hr", label: "Quote turnaround" },
];

export const services = [
  {
    icon: "home",
    title: "Roof Replacement",
    text: "Complete tear-off and new roof system: shingle, tile or metal, installed to manufacturer spec.",
    tag: "Most requested",
  },
  {
    icon: "wrench",
    title: "Roof Repair & Leaks",
    text: "Missing shingles, cracked tiles, flashing failures and stubborn leaks traced to the source and fixed.",
  },
  {
    icon: "layers",
    title: "Metal Roofing",
    text: "Standing-seam and corrugated metal roofs built for 50+ years of wind, sun and rain.",
  },
  {
    icon: "droplets",
    title: "Flat Roofs & Waterproofing",
    text: "Membrane, torch-on and liquid coatings for flat and low-slope roofs, terraces and slabs.",
  },
  {
    icon: "search",
    title: "Inspections & Reports",
    text: "A detailed photo report of your roof’s condition, so you know exactly what it needs, and what it doesn’t.",
    tag: "Free",
  },
  {
    icon: "cloud",
    title: "Storm Damage",
    text: "Fast emergency tarping, damage assessment and documentation to support your insurance claim.",
  },
];

export const comparison = [
  { topic: "Pricing", others: "Vague estimate, surprise extras later", us: "Fixed written price before any work starts" },
  { topic: "Inspection", others: "A salesperson glances from the ground", us: "A roofer goes up and sends you a photo report" },
  { topic: "Communication", others: "Chasing them for updates", us: "Daily updates on WhatsApp until the job is done" },
  { topic: "Clean-up", others: "Nails and debris left in the yard", us: "Magnetic sweep and full clean-up every day" },
  { topic: "Warranty", others: "Verbal promises", us: "Written workmanship warranty on every job" },
];

export const steps = [
  {
    title: "Free inspection",
    text: "Book a time that suits you. A roofer inspects the roof and photographs every issue.",
  },
  {
    title: "Written quote",
    text: "Within 24 hours you get a clear, itemised, fixed-price quote. No pressure, no hidden extras.",
  },
  {
    title: "Expert installation",
    text: "Our own trained crew does the work, protects your property and cleans up every single day.",
  },
  {
    title: "Walkthrough & warranty",
    text: "We walk the finished roof with you and hand over your written warranty documents.",
  },
];

export const projects = [
  {
    image: "/images/crew-scaffolding.jpg",
    alt: "Two Zenvio roofers lifting a new roofing sheet into place from scaffolding",
    title: "Full re-roof with new sheeting",
    type: "Residential · Replacement",
    meta: [
      { k: "Area", v: "2,400 sq ft" },
      { k: "Time", v: "5 days" },
    ],
  },
  {
    image: "/images/roofer-reroof.jpg",
    alt: "Roofer fixing new corrugated roofing over timber battens",
    title: "Corrugated sheet upgrade",
    type: "Residential · New install",
    meta: [
      { k: "Area", v: "1,850 sq ft" },
      { k: "Time", v: "3 days" },
    ],
  },
  {
    image: "/images/clay-tiles.jpg",
    alt: "Close-up of new terracotta clay roof tiles",
    title: "Clay tile restoration",
    type: "Villa · Restoration",
    meta: [
      { k: "Area", v: "3,100 sq ft" },
      { k: "Time", v: "9 days" },
    ],
  },
];

// placeholder reviews: replace with real client reviews
export const reviews = [
  {
    name: "Sarah M.",
    role: "Homeowner",
    text: "They found the leak two other companies missed. Clear quote, finished a day early, and the yard was cleaner than before they arrived.",
  },
  {
    name: "Daniel K.",
    role: "Property manager",
    text: "We use Zenvio across our buildings now. The photo reports make approvals easy and the pricing never changes after the quote.",
  },
  {
    name: "Aisha R.",
    role: "Homeowner",
    text: "Our new metal roof looks incredible. They kept us updated on WhatsApp every day, which made the whole thing stress-free.",
  },
  {
    name: "James P.",
    role: "Homeowner",
    text: "Storm took half our shingles at night. They had a tarp on by morning and handled all the photos for the insurance claim.",
  },
  {
    name: "Fatima H.",
    role: "Villa owner",
    text: "Professional from the first call. The waterproofing on our terrace has held through two monsoon seasons without a drop.",
  },
  {
    name: "Mark T.",
    role: "Business owner",
    text: "Re-roofed our warehouse with zero downtime for the business. Honest people, solid work, and a proper written warranty.",
  },
];

export const faqs = [
  {
    q: "How much does a new roof cost?",
    a: "It depends on the roof size, pitch, material and how many layers need removing. After a free inspection we give you a fixed, itemised written quote, so the price you agree to is the price you pay.",
  },
  {
    q: "Is the inspection really free?",
    a: "Yes. The inspection and photo report are free with no obligation. If your roof only needs a small repair, we will tell you that instead of selling you a new roof.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most homes are completed in 2–5 working days. Larger or more complex roofs take longer. You get a schedule with your quote.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Every job comes with a written workmanship warranty, on top of the manufacturer’s material warranty. The exact term is stated on your quote.",
  },
  {
    q: "Can you help with insurance claims?",
    a: "Yes. We document storm damage with photos and measurements and provide a detailed report you can submit to your insurer.",
  },
  {
    q: "Do I need to be home while you work?",
    a: "No. As long as we can access the property, you can carry on with your day. We send progress photos and updates on WhatsApp.",
  },
];

export const serviceOptions = [
  "Roof replacement",
  "Roof repair / leak",
  "Metal roofing",
  "Flat roof / waterproofing",
  "Free inspection",
  "Storm damage",
  "Something else",
];
