import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/lang-context";
import heroImg from "@/assets/mission.jpg";
import { Award } from "lucide-react";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Sertifikalar | Certificates — Işık Landscape Global" },
      { name: "description", content: "Sektörel sertifikalar, ödüller ve uyum belgeleri." },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  const t = useT();
  const awards = t("awards") as { title: string; body: string; year: string }[];
  return (
    <Shell transparentNav>
      <PageHeader eyebrow={t("certificates.eyebrow")} title={t("certificates.title")} breadcrumb={[{label:"__home__",to:"/"},{label:t("certificates.eyebrow")}]} image={heroImg} />
      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <p className="text-lg text-[var(--bark)] max-w-2xl mb-16 leading-relaxed">{t("certificates.intro")}</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((a, i) => (
              <Reveal key={a.title} delay={(i%3)*0.08}>
                <div className="group p-8 border border-[var(--fern)] bg-white rounded-sm hover:border-[var(--copper)] hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                  <Award className="text-[var(--copper)] mb-6" size={32}/>
                  <div className="font-mono text-xs tracking-widest text-[var(--bronze)] mb-2">{a.year}</div>
                  <h3 className="font-display text-xl text-[var(--forest)] mb-3 leading-snug">{a.title}</h3>
                  <p className="text-sm text-[var(--bark)] leading-relaxed">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
