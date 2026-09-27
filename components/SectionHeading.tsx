import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  const rule = align === "center" ? "mx-auto" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p
          className={`mb-5 flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-brand-400 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span aria-hidden="true" className={`h-px w-8 bg-brand-400/50 ${rule}`} />
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-display text-3xl font-medium leading-[1.08] text-ink-900 sm:text-4xl lg:text-[2.85rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-xl text-base leading-8 text-ink-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
