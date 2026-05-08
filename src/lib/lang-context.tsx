import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, resolve, type Lang } from "./i18n";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (path: string) => any;
}

const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "isik.lang";

function detectInitialLang(): Lang {
  // SSR / pre-hydration: default to Turkish per the bilingual plan
  if (typeof window === "undefined") return "tr";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "tr" || stored === "en") return stored;
  } catch {}
  // Auto-detect: only switch to EN if browser is English; default TR otherwise
  const navLang = (typeof navigator !== "undefined" ? navigator.language : "").toLowerCase();
  if (navLang.startsWith("en")) return "en";
  return "tr";
}

export function LangProvider({ children }: { children: ReactNode }) {
  // Always start as "tr" on first paint to keep SSR + client markup identical,
  // then upgrade after mount if the user previously chose English.
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const initial = detectInitialLang();
    if (initial !== lang) setLangState(initial);
    document.documentElement.lang = initial;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { window.localStorage.setItem(STORAGE_KEY, l); } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };
  const toggle = () => setLang(lang === "tr" ? "en" : "tr");

  const t = (path: string) => {
    const v = resolve(translations[lang], path);
    if (v == null) {
      const fallback = resolve(translations.en, path);
      return fallback == null ? path : fallback;
    }
    return v;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

export function useT() {
  return useLang().t;
}
