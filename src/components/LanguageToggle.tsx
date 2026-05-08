import { useLang } from "@/lib/lang-context";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label="Language / Dil"
      className={`inline-flex items-center rounded-full border border-white/30 overflow-hidden font-mono text-[0.65rem] tracking-[0.2em] ${className}`}
    >
      {(["tr", "en"] as const).map((code, i) => {
        const active = lang === code;
        return (
          <button
            key={code}
            onClick={() => setLang(code)}
            aria-pressed={active}
            aria-label={code === "tr" ? "Türkçe" : "English"}
            className={`px-3 py-1.5 transition-colors duration-200 ${
              active ? "bg-[var(--copper)] text-white" : "text-white/70 hover:text-white"
            } ${i === 0 ? "border-r border-white/20" : ""}`}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
