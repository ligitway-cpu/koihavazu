import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { PROJECTS, type Category } from "@/lib/projects";
import { useT } from "@/lib/lang-context";
import heroImg from "@/assets/hero-epique.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projeler | Projects — Işık Landscape" },
      { name: "description", content: "İstanbul, Bodrum ve İzmir'de 12 önemli peyzaj projesi." },
    ],
  }),
  component: ProjectsPage,
});

const FILTERS: ("All" | Category)[] = ["All", "Residential", "Hospitality", "Commercial", "Public / Mixed-Use"];

function ProjectsPage() {
  const t = useT();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const filtered = useMemo(() => filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter), [filter]);

  return (
    <Shell transparentNav>
      <PageHeader eyebrow={t("projects_page.eyebrow")} title={t("projects_page.title")} breadcrumb={[{label:"__home__",to:"/"},{label:t("projects_page.breadcrumb")}]} image={heroImg} />

      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-wrap gap-3 mb-12">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 text-xs tracking-widest uppercase border transition-colors rounded-full ${
                  filter === f ? "bg-[var(--forest)] text-white border-[var(--forest)]" : "border-[var(--fern)] text-[var(--bark)] hover:border-[var(--copper)] hover:text-[var(--copper)]"
                }`}
              >
                {t(`categories.${f}`)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="relative overflow-hidden rounded-sm aspect-[4/3] bg-[var(--mist)]">
                    <img src={p.image} alt={p.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[var(--forest)]/0 group-hover:bg-[var(--forest)]/30 transition-colors duration-500" />
                  </div>
                  <div className="pt-6">
                    <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[var(--sage)]">{t(`categories.${p.category}`)} · {p.year}</div>
                    <h3 className="font-display text-2xl text-[var(--forest)] mt-2 group-hover:text-[var(--copper)] transition-colors">{p.title}</h3>
                    <p className="text-sm text-[var(--bark)] mt-1">{p.location}</p>
                    <span className="link-arrow text-sm mt-4 inline-flex">{t("common.view_project")} <ArrowRight size={14}/></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
