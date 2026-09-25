import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { HeartIcon } from "@/components/Icons";

type LogoProps = {
  className?: string;
  onClick?: () => void;
};

export function Logo({ className = "", onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${siteConfig.name} home`}
      className={`inline-flex items-center gap-2.5 whitespace-nowrap rounded-lg font-bold tracking-tight text-ink-900 ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-sm">
        <HeartIcon className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <span className="text-lg">
        {siteConfig.shortName}
        <span className="text-brand-gradient"> Offers</span>
      </span>
    </Link>
  );
}
