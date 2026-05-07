import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { Reveal } from "@/components/Reveal";
import { TIMELINE } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/quarter-century")({
  head: () => ({
    meta: [
      { title: "Our Legacy – A Quarter Century | Işık Landscape Global" },
      { name: "description", content: "The manifesto of Işık Landscape Global: 25 years of belief in the healing power of nature, human-centred design, and sustainable landscape architecture." },
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
  return (
    <Shell transparentNav>
      <section className="min-h-[100dvh] flex flex-col items-center justify-center text-center bg-[var(--forest)] text-white -mt-24 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 50%, var(--copper) 0, transparent 50%), radial-gradient(circle at 80% 80%, var(--moss) 0, transparent 50%)" }} />
        <div className="container-x relative">
          <Reveal>
            <p className="label-eyebrow mb-12 !text-[var(--bronze)] mx-auto justify-center">Manifesto · 1998 — 2026</p>
            <h1 className="font-display italic font-light text-white text-5xl md:text-7xl lg:text-[8rem] leading-[0.95] max-w-6xl mx-auto">
              We have left behind a <em className="text-[var(--bronze)]">quarter-century</em>.
            </h1>
            <div className="mt-16 font-mono text-xs tracking-[0.3em] uppercase text-white/60">Işık Landscape Global</div>
          </Reveal>
        </div>
      </section>

      <div className="bg-[var(--forest)]">
        <Panel eyebrow="01 · The Belief" title='"We believe in the healing, protective and elevating power of nature."' body="It is our mission. It is the foundation of every project. It is the promise we made in 1998 and renew every day." />
        <Panel eyebrow="02 · The Human" title="HUMAN is at the center of our corporate DNA." body="Every decision we make serves the people who will live, work, and breathe within our landscapes." />
        <Panel eyebrow="03 · The Palette" title="Green of nature. Color of soil. Power of copper." swatches={["#1E3D2F","#2C2418","#A66A29","#D4A96A"]} />

        <section className="section-y border-t border-[var(--copper)]/20">
          <div className="container-x">
            <Reveal>
              <div className="font-mono text-xs tracking-widest uppercase text-[var(--copper)] mb-4">04 · The Journey</div>
              <h2 className="font-display italic text-white text-5xl md:text-6xl mb-16">Twenty-eight years, in moments.</h2>
            </Reveal>
            <div className="space-y-6 max-w-3xl">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i*0.04}>
                  <div className="grid grid-cols-[80px_1fr] gap-6 items-baseline border-b border-white/10 pb-6">
                    <div className="font-mono text-[var(--bronze)] text-base">{t.year}</div>
                    <div className="font-display text-2xl text-white italic">{t.event}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Panel eyebrow="05 · The Promise" title="Our global vision will carry us forward through the next quarter century." />

        <section className="bg-[var(--copper)] text-white">
          <div className="container-x section-y text-center">
            <Reveal>
              <h2 className="text-display">Build the next 25 years with us.</h2>
              <Link to="/contact" className="btn btn-forest mt-10">Get in Touch <ArrowRight size={16}/></Link>
            </Reveal>
          </div>
        </section>
      </div>
    </Shell>
  );
}
