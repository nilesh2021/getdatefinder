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

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${siteConfig.name} home`}
      className={`inline-flex items-center gap-2.5 whitespace-nowrap rounded-lg font-display text-xl font-medium tracking-tight ${text} ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-ink-950 shadow-sm">
        <HeartIcon className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <span>
        {siteConfig.shortName}
        <span className="italic text-brand-400"> Offers</span>
      </span>
    </Link>
  );
}
