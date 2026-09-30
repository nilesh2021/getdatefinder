import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  id?: string;
  tone?: "default" | "bright" | "usa-light" | "usa-dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
  tone = "default",
}: SectionHeadingProps) {
  const isBright = tone === "bright";
  const isUsaDark = tone === "usa-dark";
  const titleColor = isUsaDark ? "text-ink-900" : isBright ? "text-stone-900" : "text-ink-900";
  const bodyColor = isUsaDark ? "text-ink-600" : isBright ? "text-stone-600" : "text-ink-600";
  const eyebrowColor = isUsaDark ? "text-brand-400" : isBright ? "text-brand-600" : "text-brand-400";
  const ruleColor = isUsaDark ? "bg-brand-400/50" : isBright ? "bg-brand-500/40" : "bg-brand-400/50";
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  const rule = align === "center" ? "mx-auto" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p
          className={`mb-5 flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.32em] ${eyebrowColor} ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span aria-hidden="true" className={`h-px w-8 ${ruleColor} ${rule}`} />
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`font-display text-3xl font-medium leading-[1.08] ${titleColor} sm:text-4xl lg:text-[2.85rem]`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 max-w-xl text-base leading-8 ${bodyColor} sm:text-lg`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
