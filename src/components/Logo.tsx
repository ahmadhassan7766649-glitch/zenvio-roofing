import Image from "next/image";

export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`grid size-10 place-items-center rounded-xl ${light ? "bg-white" : "bg-white ring-1 ring-navy-800/10"}`}
      >
        <Image src="/logo-icon.png" alt="" width={416} height={408} className="size-8 object-contain" />
      </span>
      <span className="font-display text-2xl font-extrabold tracking-tight">
        <span className={light ? "text-white" : "text-navy-800"}>Zen</span>
        <span className="text-orange-600">vio</span>
      </span>
    </span>
  );
}
