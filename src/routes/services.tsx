import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/lang-context";
import heroImg from "@/assets/hero-galataport.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Hizmetler | Services — Işık Landscape" },
      { name: "description", content: "Peyzaj uygulama, tasarım, bakım, üretim ve perakende — beş entegre bölüm." },
    ],
  }),
  component: ServicesPage,
});

const KEYS = ["contracting","design","maintenance","production","greenmall"] as const;

function ServicesPage() {
  const t = useT();
  const [active, setActive] = useState<typeof KEYS[number]>("contracting");
  const tab = t(`services.tabs.${active}`) as { label: string; title: string; body: string; items: string[]; };
  return (
    <Shell transparentNav>
      <PageHeader eyebrow={t("services.eyebrow")} title={t("services.title")} breadcrumb={[{label:"__home__",to:"/"},{label:t("services.eyebrow")}]} image={heroImg} />

      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-12 border-b border-[var(--fern)]">
            {KEYS.map((k) => {
              const lbl = (t(`services.tabs.${k}.label`)) as string;
              return (
                <button
                  key={k}
                  onClick={() => setActive(k)}
                  className={`px-5 py-4 text-xs tracking-widest uppercase font-medium transition-colors relative ${
                    active === k ? "text-[var(--forest)]" : "text-[var(--bark)]/60 hover:text-[var(--forest)]"
                  }`}
                >
                  {lbl}
                  {active === k && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--copper)]" />}
                </button>
              );
            })}
          </div>

          <Reveal key={active}>
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <h2 className="text-display text-[var(--forest)]">{tab.title}</h2>
                <p className="mt-6 text-lg text-[var(--bark)] leading-relaxed">{tab.body}</p>
                <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {tab.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[var(--soil)]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--copper)] flex-none" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-[var(--forest)] text-white p-10 rounded-sm sticky top-28">
                  <p className="label-eyebrow !text-[var(--bronze)] mb-4">{t("services.inquire_e")}</p>
                  <h3 className="font-display text-3xl mb-6">{t("services.inquire_h")}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{t("services.inquire_b")}</p>
                  <a href="/contact" className="btn btn-copper mt-8 w-full">{t("common.contact_us")}</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Shell>
  );
}
