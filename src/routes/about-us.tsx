import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { DIVISIONS, TIMELINE } from "@/lib/projects";
import { useT } from "@/lib/lang-context";
import missionImg from "@/assets/mission.jpg";
import nurseryImg from "@/assets/nursery.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "Hakkımızda | About — Işık Landscape Global" },
      { name: "description", content: "25 yıllık peyzaj mimarisi yolculuğumuz, misyonumuz ve ödüllü projelerimiz." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();
  const nurseries = t("nurseries") as { name: string; region: string }[];
  return (
    <Shell transparentNav>
      <PageHeader eyebrow={t("about.eyebrow")} title={t("about.title")} breadcrumb={[{label:"__home__", to:"/"},{label:t("about.eyebrow")}]} image={missionImg} />

      <section className="section-y bg-[var(--background)]">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-7">
            <p className="label-eyebrow mb-6">{t("about.story_eyebrow")}</p>
            <h2 className="text-display text-[var(--forest)] mb-10">{t("about.story_h")}</h2>
            <div className="space-y-6 text-[var(--bark)] text-base md:text-lg leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="border-l border-[var(--copper)] pl-8 space-y-6">
              {TIMELINE.slice(0,6).map((tl) => (
                <div key={tl.year}>
                  <div className="font-mono text-xs text-[var(--copper)]">{tl.year}</div>
                  <div className="font-display italic text-xl text-[var(--forest)] mt-1">{t(`timeline.${tl.year}`)}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-[var(--sand)]">
        <div className="container-x grid md:grid-cols-3 gap-12">
          {[
            { eyebrow: t("about.mission_e"), body: t("about.mission_b") },
            { eyebrow: t("about.vision_e"), body: t("about.vision_b") },
            { eyebrow: t("about.values_e"), body: t("about.values_b") },
          ].map((b, i) => (
            <Reveal key={b.eyebrow} delay={i*0.1}>
              <div className="h-full p-10 bg-white rounded-sm border border-[var(--fern)]">
                <p className="label-eyebrow mb-6">{b.eyebrow}</p>
                <p className="text-[var(--forest)] font-display text-xl leading-relaxed">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y bg-[var(--background)]">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-16">
            <p className="label-eyebrow mb-6">{t("about.companies_e")}</p>
            <h2 className="text-display text-[var(--forest)]">{t("about.companies_h")}</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIVISIONS.map((d, i) => (
              <Reveal key={d.key} delay={i*0.06}>
                <a href={d.url} target="_blank" rel="noreferrer" className="block p-8 border border-[var(--fern)] rounded-sm hover:border-[var(--copper)] transition-colors h-full bg-white">
                  <h3 className="font-display text-2xl text-[var(--forest)]">{t(`divisions.${d.title}.title`)}</h3>
                  <p className="mt-3 text-sm text-[var(--bark)] leading-relaxed">{t(`divisions.${d.title}.body`)}</p>
                  <span className="link-arrow text-xs tracking-widest uppercase mt-6">{t("common.visit")} <ArrowRight size={14}/></span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-[var(--forest)] text-white">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-16">
            <p className="label-eyebrow mb-6 !text-[var(--bronze)]">{t("about.nurseries_e")}</p>
            <h2 className="text-display text-white">{t("about.nurseries_h")}</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {nurseries.map((n, i) => (
              <Reveal key={n.name} delay={i*0.08}>
                <div className="bg-[var(--forest)] p-10 h-full">
                  <img src={nurseryImg} alt="" loading="lazy" className="w-full aspect-[4/3] object-cover mb-6 rounded-sm" />
                  <h3 className="font-display text-2xl text-[var(--bronze)]">{n.name}</h3>
                  <p className="text-sm text-white/70 mt-1">{n.region}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/contact" className="btn btn-copper">{t("about.visit_nursery_btn")} <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
