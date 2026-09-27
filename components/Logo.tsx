import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { HeartIcon } from "@/components/Icons";

type LogoProps = {
  className?: string;
  onClick?: () => void;
  /** Use `dark` on the cream footer so the wordmark stays legible. */
  tone?: "light" | "dark";
};

export function Logo({ className = "", onClick, tone = "light" }: LogoProps) {
  const text = tone === "dark" ? "text-cream-900" : "text-ink-900";
  const mark =
    tone === "dark"
      ? "border-brand-600/40 bg-brand-500 text-ink-950"
      : "border-brand-300/40 bg-brand-500/15 text-brand-300";

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${siteConfig.name} home`}
      className={`inline-flex items-center gap-3 whitespace-nowrap rounded-lg font-display text-[1.35rem] font-medium tracking-tight ${text} ${className}`}
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full border ${mark}`}
      >
        <HeartIcon className="h-4 w-4" strokeWidth={1.8} />
      </span>
      <span className="leading-none">
        {siteConfig.shortName}
        <span className="italic text-brand-400"> Offers</span>
      </span>
    </Link>
  );
}
