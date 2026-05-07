import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { DIVISIONS, TIMELINE } from "@/lib/projects";
import missionImg from "@/assets/mission.jpg";
import nurseryImg from "@/assets/nursery.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Işık Landscape Global – History, Mission & Awards" },
      { name: "description", content: "Learn about Işık Landscape's 25-year journey, mission to harness the power of nature, and award-winning projects across Turkey." },
      { property: "og:title", content: "About — Işık Landscape Global" },
    ],
  }),
  component: AboutPage,
});

const NURSERIES = [
  { name: "Riva Nursery", region: "Beykoz, Istanbul", phone: "(216) 433 32 42", email: "riva@isikpeyzajglobal.com" },
  { name: "Yalova Nursery", region: "Yalova", phone: "(549) 646 86 96", email: "yalova@isikpeyzajglobal.com" },
  { name: "Bodrum Nursery", region: "Bodrum", phone: "+90 538 056 39 92", email: "bodrum@isikpeyzajglobal.com" },
];

function AboutPage() {
  return (
    <Shell transparentNav>
      <PageHeader eyebrow="About Us" title="A studio rooted in nature, anchored in Istanbul." breadcrumb={[{label:"Home", to:"/"},{label:"About"}]} image={missionImg} />

      <section className="section-y bg-[var(--background)]">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-7">
            <p className="label-eyebrow mb-6">Our Story</p>
            <h2 className="text-display text-[var(--forest)] mb-10">We have left behind a quarter century.</h2>
            <div className="space-y-6 text-[var(--bark)] text-base md:text-lg leading-relaxed">
              <p>Işık Landscape Global began on February 26, 1998 in Kavacık, Beykoz — a stone's throw from the Bosphorus. For more than 25 years we have remained committed to one enduring principle: that nature has the power to heal, protect, and elevate the human experience.</p>
              <p>What began as a single contracting firm has grown into five integrated divisions — design and implementation, plant production, maintenance, and retail — unified under one global vision.</p>
              <p>Our headquarters at Martı Plaza, Kavacık remains our home base, while our nurseries in Riva, Yalova, and Bodrum extend our reach across Turkey and into international markets.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="border-l border-[var(--copper)] pl-8 space-y-6">
              {TIMELINE.slice(0,6).map((t) => (
                <div key={t.year}>
                  <div className="font-mono text-xs text-[var(--copper)]">{t.year}</div>
                  <div className="font-display italic text-xl text-[var(--forest)] mt-1">{t.event}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-[var(--sand)]">
        <div className="container-x grid md:grid-cols-3 gap-12">
          {[
            { eyebrow: "Mission", body: "We place the conviction that nature heals, protects and elevates at the center of every project we undertake." },
            { eyebrow: "Vision", body: "To lead landscape architecture in Turkey and internationally — guided by human-centric design, technological innovation, and sustainable practice." },
            { eyebrow: "Values", body: "Human · Innovation · Sustainability · Quality. HUMAN is at the center of our corporate DNA." },
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
            <p className="label-eyebrow mb-6">Our Companies</p>
            <h2 className="text-display text-[var(--forest)]">Five divisions, one vision.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIVISIONS.map((d, i) => (
              <Reveal key={d.key} delay={i*0.06}>
                <a href={d.url} target="_blank" rel="noreferrer" className="block p-8 border border-[var(--fern)] rounded-sm hover:border-[var(--copper)] transition-colors h-full bg-white">
                  <h3 className="font-display text-2xl text-[var(--forest)]">{d.title}</h3>
                  <p className="mt-3 text-sm text-[var(--bark)] leading-relaxed">{d.body}</p>
                  <span className="link-arrow text-xs tracking-widest uppercase mt-6">Visit <ArrowRight size={14}/></span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-[var(--forest)] text-white">
        <div className="container-x">
          <Reveal className="max-w-2xl mb-16">
            <p className="label-eyebrow mb-6 !text-[var(--bronze)]">Nurseries</p>
            <h2 className="text-display text-white">Three locations, 500+ species.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {NURSERIES.map((n, i) => (
              <Reveal key={n.name} delay={i*0.08}>
                <div className="bg-[var(--forest)] p-10 h-full">
                  <img src={nurseryImg} alt={n.name} loading="lazy" className="w-full aspect-[4/3] object-cover mb-6 rounded-sm" />
                  <h3 className="font-display text-2xl text-[var(--bronze)]">{n.name}</h3>
                  <p className="text-sm text-white/70 mt-1">{n.region}</p>
                  <div className="mt-6 space-y-1 text-sm text-white/80">
                    <a href={`tel:${n.phone}`} className="block hover:text-[var(--bronze)]">{n.phone}</a>
                    <a href={`mailto:${n.email}`} className="block hover:text-[var(--bronze)]">{n.email}</a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/contact" className="btn btn-copper">Visit a Nursery <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
