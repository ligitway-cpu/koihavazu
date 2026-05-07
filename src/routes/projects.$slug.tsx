import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { Reveal } from "@/components/Reveal";
import { PROJECTS } from "@/lib/projects";
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
      { property: "og:description", content: loaderData.project.description },
      { property: "og:image", content: loaderData.project.image },
    ] : [],
  }),
  notFoundComponent: () => (
    <Shell><div className="container-x py-40 text-center"><h1 className="text-display">Project not found</h1><Link to="/projects" className="btn btn-copper mt-8 inline-flex">Back to projects</Link></div></Shell>
  ),
  errorComponent: ({ error }) => (
    <Shell><div className="container-x py-40 text-center"><h1 className="text-display">Something went wrong</h1><p className="mt-4 text-[var(--bark)]">{error.message}</p></div></Shell>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const idx = PROJECTS.findIndex(p => p.slug === project.slug);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const related = PROJECTS.filter(p => p.category === project.category && p.slug !== project.slug).slice(0, 3);

  return (
    <Shell transparentNav>
      <section className="relative h-[75vh] min-h-[500px] -mt-24 overflow-hidden">
        <div className="absolute inset-0 ken-burns" style={{ backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/95 via-[var(--forest)]/30 to-transparent" />
        <div className="relative h-full container-x flex flex-col justify-end pb-16 text-white">
          <Reveal>
            <p className="label-eyebrow mb-6">{project.category} · {project.year}</p>
            <h1 className="text-hero font-display font-light max-w-4xl">{project.title}</h1>
            <p className="mt-4 text-white/80 text-lg">{project.location}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-[var(--background)]">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-8">
            <p className="label-eyebrow mb-6">Overview</p>
            <p className="text-xl md:text-2xl text-[var(--forest)] font-display leading-relaxed">{project.description}</p>

            <h2 className="font-display text-3xl text-[var(--forest)] mt-16 mb-6">Implementation</h2>
            <div className="flex flex-wrap gap-2">
              {project.implementations.map(it => <span key={it} className="impl-tag">{it}</span>)}
            </div>

            <h2 className="font-display text-3xl text-[var(--forest)] mt-16 mb-6">Scope & Approach</h2>
            <p className="text-[var(--bark)] leading-relaxed">
              Our team coordinated end-to-end execution — site preparation, hardscape detailing, irrigation, planting and post-completion care. The project reflects our standard of integrated delivery: design intent preserved through every craftsman, every detail.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-4">
            <div className="bg-[var(--sand)] p-8 rounded-sm sticky top-28">
              <p className="label-eyebrow mb-6">Project Info</p>
              <dl className="space-y-5 text-sm">
                {[["Location", project.location],["Year", project.year],["Type", project.category],["Status", "Completed"]].map(([k,v]) => (
                  <div key={k as string} className="flex justify-between border-b border-[var(--fern)] pb-3">
                    <dt className="text-[var(--bark)] uppercase tracking-widest text-xs">{k}</dt>
                    <dd className="text-[var(--forest)] font-medium text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8">
                <p className="text-sm text-[var(--bark)] mb-4">Inquire about a similar project:</p>
                <Link to="/contact" className="btn btn-copper w-full">Get in Touch</Link>
                <a href="tel:+902164041055" className="mt-3 flex items-center gap-2 justify-center text-sm text-[var(--forest)]"><Phone size={14}/>+90 216 404 10 55</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--fern)]">
        <div className="container-x py-12 flex justify-between text-sm">
          <Link to="/projects/$slug" params={{ slug: prev.slug }} className="group flex items-center gap-3 text-[var(--bark)] hover:text-[var(--copper)]">
            <ArrowLeft size={16}/><div><div className="text-xs uppercase tracking-widest opacity-60">Previous</div><div className="font-display text-lg text-[var(--forest)] group-hover:text-[var(--copper)]">{prev.title}</div></div>
          </Link>
          <Link to="/projects/$slug" params={{ slug: next.slug }} className="group flex items-center gap-3 text-right text-[var(--bark)] hover:text-[var(--copper)]">
            <div><div className="text-xs uppercase tracking-widest opacity-60">Next</div><div className="font-display text-lg text-[var(--forest)] group-hover:text-[var(--copper)]">{next.title}</div></div><ArrowRight size={16}/>
          </Link>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-y bg-[var(--mist)]">
          <div className="container-x">
            <h2 className="font-display text-3xl text-[var(--forest)] mb-10">Related Projects</h2>
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
