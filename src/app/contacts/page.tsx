"use client";

import { useLang } from "@/lib/i18n";
import { CONTACT_CENTRES } from "@/data/contacts";
import { Card, Container, PageHeader } from "@/components/ui";

export default function ContactsPage() {
  const { t, L } = useLang();

  return (
    <>
      <PageHeader title={t("contactsTitle")} intro={t("contactsIntro")} />

      <Container>
        <div className="space-y-5">
          {CONTACT_CENTRES.map((c, i) => (
            <Card key={c.id}>
              <h2 className="text-[1.25rem] font-bold leading-snug text-ink">
                <span className="text-ink-faint tabular">{i + 1}. </span>
                {L(c.name)}
              </h2>
              {c.location && (
                <p className="mt-1 text-[0.95rem] text-ink-soft">
                  <span className="font-semibold text-ink-faint">
                    {t("locationLabel")}:{" "}
                  </span>
                  {L(c.location)}
                </p>
              )}

              <ul className="mt-4 space-y-4">
                {c.people.map((p, j) => (
                  <li
                    key={j}
                    className="border-t border-line pt-4 first:border-0 first:pt-0"
                  >
                    <p className="text-[1.05rem] font-bold text-ink">
                      {L(p.name)}
                    </p>
                    <p className="mt-0.5 leading-relaxed text-ink-soft">
                      {L(p.role)}
                    </p>

                    <a
                      href={`tel:${p.phone.split(" ")[0]}`}
                      className="mt-3 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-leaf-700 px-4 font-semibold text-white transition-colors hover:bg-leaf-800"
                    >
                      <PhoneIcon />
                      <span className="tabular">{p.phone}</span>
                    </a>

                    {p.emails.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {p.emails.map((e) => (
                          <li key={e}>
                            <a
                              href={`mailto:${e}`}
                              className="break-all text-[0.95rem] text-leaf-700 underline underline-offset-2 hover:text-leaf-800"
                            >
                              {e}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
