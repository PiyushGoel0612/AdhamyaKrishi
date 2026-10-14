"use client";

export function PageHeader({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <div className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-9">
        <h1 className="text-[2rem] font-bold leading-tight text-ink sm:text-[2.4rem]">
          {title}
        </h1>
        {intro && (
          <p className="mt-3 max-w-2xl text-[1.08rem] leading-relaxed text-ink-soft">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-6xl px-4 py-9 ${className}`}>{children}</div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[--radius-card] border border-line bg-surface p-5 ${className}`}
    >
      {children}
    </div>
  );
}

export function Pill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "leaf" | "harvest";
}) {
  const tones = {
    neutral: "bg-surface-sunk text-ink-soft",
    leaf: "bg-leaf-50 text-leaf-700",
    harvest: "bg-harvest-50 text-harvest-700",
  };
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 text-[0.85rem] font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/** Amber notice, used for the one thing a reader must not miss: that
 *  doses and varieties should be confirmed before they are acted on. */
export function Notice({
  children,
  tone = "harvest",
}: {
  children: React.ReactNode;
  tone?: "harvest" | "leaf";
}) {
  const tones = {
    harvest: "border-harvest-100 bg-harvest-50 text-harvest-700",
    leaf: "border-leaf-100 bg-leaf-50 text-leaf-800",
  };
  return (
    <p
      className={`rounded-[--radius-card] border px-4 py-3 text-[0.95rem] leading-relaxed ${tones[tone]}`}
    >
      {children}
    </p>
  );
}
