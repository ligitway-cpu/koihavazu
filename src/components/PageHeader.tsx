import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function PageHeader({ eyebrow, title, breadcrumb, image }: { eyebrow: string; title: string; breadcrumb?: { label: string; to?: string }[]; image?: string }) {
  return (
    <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden -mt-24">
      <div className="absolute inset-0 ken-burns" style={image ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" } : { background: "linear-gradient(135deg, var(--forest), var(--moss))" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/95 via-[var(--forest)]/60 to-[var(--forest)]/30" />
      <div className="relative container-x pb-16 md:pb-24 text-white w-full">
        <Reveal>
          <p className="label-eyebrow !text-[var(--bronze)] mb-6">{eyebrow}</p>
          <h1 className="text-display max-w-4xl">{title}</h1>
          {breadcrumb && (
            <nav className="mt-8 flex items-center gap-2 text-xs tracking-widest uppercase text-white/70">
              {breadcrumb.map((b, i) => (
                <span key={i} className="flex items-center gap-2">
                  {b.to ? <Link to={b.to} className="hover:text-[var(--bronze)]">{b.label}</Link> : <span>{b.label}</span>}
                  {i < breadcrumb.length - 1 && <span>/</span>}
                </span>
              ))}
            </nav>
          )}
        </Reveal>
      </div>
    </section>
  );
}
