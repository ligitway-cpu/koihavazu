import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { Reveal } from "@/components/Reveal";
import { PROJECTS } from "@/lib/projects";
import { useT } from "@/lib/lang-context";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find(p => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.project.title} – ${loaderData.project.location} | Işık Landscape` },
      { name: "description", content: loaderData.project.description },
      { property: "og:title", content: loaderData.project.title },
      { property: "og:image", content: loaderData.project.image },
    ] : [],
  }),
  notFoundComponent: NotFound,
  errorComponent: ErrComp,
  component: ProjectDetail,
});

function NotFound() {
  const t = useT();
  return <Shell><div className="container-x py-40 text-center"><h1 className="text-display">{t("project_detail.not_found")}</h1><Link to="/projects" className="btn btn-copper mt-8 inline-flex">{t("common.back_projects")}</Link></div></Shell>;
}
function ErrComp({ error }: { error: Error }) {
  const t = useT();
  return <Shell><div className="container-x py-40 text-center"><h1 className="text-display">{t("project_detail.something_wrong")}</h1><p className="mt-4 text-[var(--bark)]">{error.message}</p></div></Shell>;
}

function ProjectDetail() {
  const t = useT();
  const { project } = Route.useLoaderData();
  const idx = PROJECTS.findIndex(p => p.slug === project.slug);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const related = PROJECTS.filter(p => p.category === project.category && p.slug !== project.slug).slice(0, 3);
  const description = t(`project_descriptions.${project.slug}`) || project.description;

  return (
    <Shell transparentNav>
      <section className="relative h-[75vh] min-h-[500px] -mt-24 overflow-hidden">
        <div className="absolute inset-0 ken-burns" style={{ backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/95 via-[var(--forest)]/30 to-transparent" />
        <div className="relative h-full container-x flex flex-col justify-end pb-16 text-white">
          <Reveal>
            <p className="label-eyebrow mb-6">{t(`categories.${project.category}`)} · {project.year}</p>
            <h1 className="text-hero font-display font-light max-w-4xl">{project.title}</h1>
            <p className="mt-4 text-white/80 text-lg">{project.location}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-[var(--background)]">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-8">
            <p className="label-eyebrow mb-6">{t("project_detail.overview")}</p>
            <p className="text-xl md:text-2xl text-[var(--forest)] font-display leading-relaxed">{description}</p>

            <h2 className="font-display text-3xl text-[var(--forest)] mt-16 mb-6">{t("project_detail.implementation")}</h2>
            <div className="flex flex-wrap gap-2">
              {project.implementations.map((it: string) => <span key={it} className="impl-tag">{it}</span>)}
            </div>

            <h2 className="font-display text-3xl text-[var(--forest)] mt-16 mb-6">{t("project_detail.scope")}</h2>
            <p className="text-[var(--bark)] leading-relaxed">{t("project_detail.scope_body")}</p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-4">
            <div className="bg-[var(--sand)] p-8 rounded-sm sticky top-28">
              <p className="label-eyebrow mb-6">{t("project_detail.project_info")}</p>
              <dl className="space-y-5 text-sm">
                {[[t("project_detail.location"), project.location],[t("project_detail.year"), project.year],[t("project_detail.type"), t(`categories.${project.category}`)],[t("project_detail.status"), t("project_detail.completed")]].map(([k,v]) => (
                  <div key={k as string} className="flex justify-between border-b border-[var(--fern)] pb-3">
                    <dt className="text-[var(--bark)] uppercase tracking-widest text-xs">{k}</dt>
                    <dd className="text-[var(--forest)] font-medium text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8">
                <p className="text-sm text-[var(--bark)] mb-4">{t("project_detail.inquire_similar")}</p>
                <Link to="/contact" className="btn btn-copper w-full">{t("common.get_in_touch")}</Link>
                <a href="tel:+902164041055" className="mt-3 flex items-center gap-2 justify-center text-sm text-[var(--forest)]"><Phone size={14}/>+90 216 404 10 55</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--fern)]">
        <div className="container-x py-12 flex justify-between text-sm">
          <Link to="/projects/$slug" params={{ slug: prev.slug }} className="group flex items-center gap-3 text-[var(--bark)] hover:text-[var(--copper)]">
            <ArrowLeft size={16}/><div><div className="text-xs uppercase tracking-widest opacity-60">{t("common.previous")}</div><div className="font-display text-lg text-[var(--forest)] group-hover:text-[var(--copper)]">{prev.title}</div></div>
          </Link>
          <Link to="/projects/$slug" params={{ slug: next.slug }} className="group flex items-center gap-3 text-right text-[var(--bark)] hover:text-[var(--copper)]">
            <div><div className="text-xs uppercase tracking-widest opacity-60">{t("common.next")}</div><div className="font-display text-lg text-[var(--forest)] group-hover:text-[var(--copper)]">{next.title}</div></div><ArrowRight size={16}/>
          </Link>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-y bg-[var(--mist)]">
          <div className="container-x">
            <h2 className="font-display text-3xl text-[var(--forest)] mb-10">{t("project_detail.related")}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map(r => (
                <Link key={r.slug} to="/projects/$slug" params={{ slug: r.slug }} className="group block">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm">
                    <img src={r.image} alt={r.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"/>
                  </div>
                  <h3 className="mt-4 font-display text-xl text-[var(--forest)] group-hover:text-[var(--copper)]">{r.title}</h3>
                  <p className="text-sm text-[var(--bark)]">{r.location} · {r.year}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Shell>
  );
}
