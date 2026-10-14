"use client";

import { useLang } from "@/lib/i18n";
import { Notice } from "@/components/ui";
import type { Block } from "@/lib/types";

/** Renders the ordered content blocks of a section. The shapes mirror
 *  the source documents, so a crop page and a scheme page can share one
 *  renderer. */
export default function Blocks({ blocks }: { blocks: Block[] }) {
  const { L } = useLang();

  return (
    <div className="space-y-4">
      {blocks.map((b, i) => {
        switch (b.kind) {
          case "para":
            return (
              <p key={i} className="text-[1.05rem] leading-[1.75] text-ink">
                {L(b.text)}
              </p>
            );

          case "subhead":
            return (
              <h3
                key={i}
                className="pt-1 text-[1.12rem] font-bold leading-snug text-ink"
              >
                {L(b.text)}
              </h3>
            );

          case "note":
            return (
              <Notice key={i} tone="leaf">
                {L(b.text)}
              </Notice>
            );

          case "list":
            return (
              <ul key={i} className="space-y-2.5">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.72em] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-500"
                    />
                    <span className="leading-relaxed text-ink">{L(item)}</span>
                  </li>
                ))}
              </ul>
            );

          case "table":
            return <BlockTable key={i} head={b.head} rows={b.rows} />;
        }
      })}
    </div>
  );
}

function BlockTable({
  head,
  rows,
}: {
  head: { kn: string; en: string }[];
  rows: { kn: string; en: string }[][];
}) {
  const { L } = useLang();

  return (
    <>
      {/* Desktop: a real table. Phone: one card per row with the column
          name beside each value — a six-column table is unreadable at
          360px, and most of this audience is on a phone. */}
      <div className="hidden overflow-x-auto rounded-[--radius-card] border border-line md:block">
        <table className="w-full border-collapse bg-surface text-left">
          <thead>
            <tr className="border-b border-line bg-surface-sunk">
              {head.map((h, i) => (
                <th
                  key={i}
                  className="px-4 py-3 align-bottom text-[0.85rem] font-semibold uppercase tracking-wide text-ink-faint"
                >
                  {L(h)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-line last:border-0">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3.5 align-top leading-relaxed ${
                      j === 0 ? "font-semibold text-ink" : "text-ink-soft"
                    }`}
                  >
                    {L(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 md:hidden">
        {rows.map((row, i) => (
          <div
            key={i}
            className="rounded-[--radius-card] border border-line bg-surface"
          >
            {row.map((cell, j) => (
              <div
                key={j}
                className="border-b border-line px-4 py-2.5 last:border-0"
              >
                <div className="text-[0.78rem] font-semibold uppercase tracking-wide text-ink-faint">
                  {L(head[j] ?? { kn: "", en: "" })}
                </div>
                <div
                  className={`mt-0.5 leading-relaxed ${
                    j === 0 ? "font-bold text-ink" : "text-ink"
                  }`}
                >
                  {L(cell)}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
