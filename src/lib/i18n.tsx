"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import type { Lang, Localized } from "./types";
import { UI } from "@/data/ui";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Pick the active language out of a localized field. */
  L: (v: Localized) => string;
  /** Look up a UI chrome string by key. */
  t: (key: keyof typeof UI) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "kisan-sathi-lang";
const LANG_EVENT = "kisan-sathi-lang-change";

/** Kannada first, and the default: the source documents are Kannada and
 *  so is the audience. English is the translation, not the original. */
export const DEFAULT_LANG: Lang = "kn";

export const LANGS = [
  { code: "kn", full: "ಕನ್ನಡ", short: "ಕ" },
  { code: "en", full: "English", short: "EN" },
] as const satisfies readonly { code: Lang; full: string; short: string }[];

function isLang(v: string | null): v is Lang {
  return v === "kn" || v === "en";
}

/* The language preference lives in localStorage, which is an external
   store rather than React state. Reading it through useSyncExternalStore
   gives us the stored value on the client and a stable default during
   server rendering, so hydration never mismatches. */
function subscribe(onChange: () => void) {
  window.addEventListener(LANG_EVENT, onChange);
  window.addEventListener("storage", onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    window.removeEventListener(LANG_EVENT, onChange);
    window.removeEventListener("storage", onChange);
    window.removeEventListener("popstate", onChange);
  };
}

function getSnapshot(): Lang {
  // ?lang= wins so an English link can be shared and opens in English for
  // the recipient, whatever their own stored preference is.
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isLang(fromUrl)) return fromUrl;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLang(stored) ? stored : DEFAULT_LANG;
}

function getServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((next: Lang) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.set("lang", next);
      window.history.replaceState(null, "", url);
    }
    window.dispatchEvent(new Event(LANG_EVENT));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      L: (v) => v[lang],
      t: (key) => UI[key][lang],
    }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
