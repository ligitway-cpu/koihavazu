import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { Reveal } from "@/components/Reveal";
import { TIMELINE } from "@/lib/projects";
import { useT } from "@/lib/lang-context";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/quarter-century")({
  head: () => ({
    meta: [
      { title: "Bir Çeyrek Asır | Our Legacy — Işık Landscape Global" },
      { name: "description", content: "1998'den bugüne 25 yıllık peyzaj manifestomuz." },
    ],
  }),
  component: LegacyPage,
});

function Panel({ eyebrow, title, body, swatches }: { eyebrow: string; title: string; body?: string; swatches?: string[] }) {
  return (
    <section className="min-h-[80vh] flex items-center section-y border-t border-[var(--copper)]/20">
      <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
        <Reveal className="lg:col-span-2 lg:col-start-1">
          <div className="font-mono text-xs tracking-widest uppercase text-[var(--copper)]">{eyebrow}</div>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-9">
          <h2 className="font-display italic font-light text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05]">{title}</h2>
          {body && <p className="mt-10 text-white/70 text-lg max-w-2xl leading-relaxed">{body}</p>}
          {swatches && (
            <div className="mt-10 flex gap-4">
              {swatches.map((c) => (
                <div key={c} className="w-20 h-20 md:w-24 md:h-24 rounded-sm" style={{ background: c }} />
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function LegacyPage() {
  const t = useT();
  return (
    <Shell transparentNav>
      <section className="min-h-[100dvh] flex flex-col items-center justify-center text-center bg-[var(--forest)] text-white -mt-24 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 50%, var(--copper) 0, transparent 50%), radial-gradient(circle at 80% 80%, var(--moss) 0, transparent 50%)" }} />
        <div className="container-x relative">
          <Reveal>
            <p className="label-eyebrow mb-12 !text-[var(--bronze)] mx-auto justify-center">{t("legacy.eyebrow")}</p>
            <h1 className="font-display italic font-light text-white text-5xl md:text-7xl lg:text-[8rem] leading-[0.95] max-w-6xl mx-auto">
              {t("legacy.h1_pre")}<em className="text-[var(--bronze)]">{t("legacy.h1_em")}</em>{t("legacy.h1_post")}
            </h1>
            <div className="mt-16 font-mono text-xs tracking-[0.3em] uppercase text-white/60">{t("legacy.brand")}</div>
          </Reveal>
        </div>
      </section>

      <div className="bg-[var(--forest)]">
        <Panel eyebrow={t("legacy.panel1_e")} title={t("legacy.panel1_t")} body={t("legacy.panel1_b")} />
        <Panel eyebrow={t("legacy.panel2_e")} title={t("legacy.panel2_t")} body={t("legacy.panel2_b")} />
        <Panel eyebrow={t("legacy.panel3_e")} title={t("legacy.panel3_t")} swatches={["#1E3D2F","#2C2418","#A66A29","#D4A96A"]} />

        <section className="section-y border-t border-[var(--copper)]/20">
          <div className="container-x">
            <Reveal>
              <div className="font-mono text-xs tracking-widest uppercase text-[var(--copper)] mb-4">{t("legacy.journey_e")}</div>
              <h2 className="font-display italic text-white text-5xl md:text-6xl mb-16">{t("legacy.journey_t")}</h2>
            </Reveal>
            <div className="space-y-6 max-w-3xl">
              {TIMELINE.map((tl, i) => (
                <Reveal key={tl.year} delay={i*0.04}>
                  <div className="grid grid-cols-[80px_1fr] gap-6 items-baseline border-b border-white/10 pb-6">
                    <div className="font-mono text-[var(--bronze)] text-base">{tl.year}</div>
                    <div className="font-display text-2xl text-white italic">{t(`timeline.${tl.year}`)}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Panel eyebrow={t("legacy.panel5_e")} title={t("legacy.panel5_t")} />

        <section className="bg-[var(--copper)] text-white">
          <div className="container-x section-y text-center">
            <Reveal>
              <h2 className="text-display">{t("legacy.cta_h")}</h2>
              <Link to="/contact" className="btn btn-forest mt-10">{t("common.get_in_touch")} <ArrowRight size={16}/></Link>
            </Reveal>
          </div>
        </section>
      </div>
    </Shell>
  );
}
