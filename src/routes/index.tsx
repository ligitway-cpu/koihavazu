import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shell } from "@/components/Shell";
import { Reveal } from "@/components/Reveal";
import { PROJECTS, STATS, DIVISIONS, TIMELINE } from "@/lib/projects";
import missionImg from "@/assets/mission.jpg";
import nurseryImg from "@/assets/nursery.jpg";
import { ArrowRight, ArrowDown, Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Işık Landscape Global – 25 Years of Landscape Architecture Excellence" },
      { name: "description", content: "Istanbul's premier landscape architecture and contracting firm. Creating sustainable, aesthetic outdoor environments since 1998." },
      { property: "og:title", content: "Işık Landscape Global" },
      { property: "og:description", content: "Healing landscapes across Turkey and the world — 25 years of award-winning landscape architecture." },
    ],
  }),
  component: HomePage,
});

const SLIDES = PROJECTS.slice(0, 3);

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative h-[100dvh] min-h-[640px] overflow-hidden -mt-24">
      <AnimatePresence>
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 ken-burns" style={{ backgroundImage: `url(${SLIDES[i].image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--forest)]/85 via-[var(--forest)]/50 to-[var(--copper)]/20" />

      <div className="relative h-full container-x flex flex-col justify-end pb-20 md:pb-32 text-white">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="label-eyebrow mb-6">
          EST. 1998 · ISTANBUL
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-hero font-display font-light max-w-[14ch] leading-[1.05] text-white"
        >
          We create the <em className="not-italic text-[var(--bronze)] italic">living spaces</em> we desire to live in.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 text-base md:text-lg text-white/85 max-w-xl leading-relaxed"
        >
          Twenty-six years of healing landscapes — from the Bosphorus to the Aegean, and beyond.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <Link to="/projects" className="btn btn-copper">Explore Projects <ArrowRight size={16} /></Link>
          <Link to="/about-us" className="btn btn-ghost-light">Our Story</Link>
        </motion.div>

        <div className="absolute bottom-8 right-6 md:right-12 flex items-center gap-4 text-xs tracking-widest uppercase text-white/70">
          <div className="flex gap-2">
            {SLIDES.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} className={`h-1 transition-all duration-500 ${idx === i ? "w-10 bg-[var(--copper)]" : "w-5 bg-white/40"}`} aria-label={`Slide ${idx+1}`} />
            ))}
          </div>
          <span className="hidden md:inline">{SLIDES[i].title}</span>
        </div>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
          <ArrowDown size={20} />
        </motion.div>
      </div>
    </section>
  );
}

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / 1800, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(end * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function StatsBar() {
  return (
    <section className="bg-[var(--forest)] text-white py-10 md:py-14 border-y border-[var(--copper)]/30">
      <div className="container-x grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl md:text-5xl font-light text-[var(--bronze)] leading-none">
              <CountUp end={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-[0.65rem] tracking-[0.25em] uppercase text-[var(--fern)]/80">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="section-y bg-[var(--sand)] grain">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-7">
          <p className="label-eyebrow mb-8">Our Philosophy</p>
          <h2 className="text-display font-display italic font-light text-[var(--forest)]">
            We believe in the healing, protective and elevating power of nature.
          </h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: [0.16,1,0.3,1] }} className="origin-left h-px w-32 bg-[var(--copper)] my-10" />
          <p className="text-base md:text-lg text-[var(--bark)] leading-relaxed max-w-2xl">
            For more than 25 years, Işık Landscape has transformed how people experience their outdoor environments — bringing together design intelligence, craftsmanship, and an enduring respect for the land.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="lg:col-span-5">
          <div className="relative">
            <img src={missionImg} alt="Sculpted garden" className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl" />
            <img src={nurseryImg} alt="Plant nursery" className="hidden md:block absolute -bottom-10 -left-10 w-48 aspect-[3/4] object-cover rounded-sm shadow-xl border-4 border-[var(--sand)]" />
            <div className="absolute -top-6 -right-6 bg-[var(--copper)] text-white px-6 py-4 rounded-sm shadow-lg">
              <div className="font-mono text-[0.65rem] tracking-widest uppercase opacity-80">Established</div>
              <div className="font-display text-3xl">1998</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Divisions() {
  return (
    <section className="section-y bg-[var(--mist)]">
      <div className="container-x">
        <Reveal className="max-w-3xl mb-16">
          <p className="label-eyebrow mb-6">Five Divisions</p>
          <h2 className="text-display text-[var(--forest)]">One unified vision — from concept to cultivation.</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--fern)]">
          {DIVISIONS.map((d, i) => (
            <Reveal key={d.key} delay={i * 0.08}>
              <a href={d.url} target="_blank" rel="noreferrer" className="group block bg-white p-8 h-full transition-colors duration-500 hover:bg-[var(--forest)]">
                <div className="font-mono text-xs text-[var(--copper)] mb-6 group-hover:text-[var(--bronze)]">0{i+1}</div>
                <h3 className="font-display text-2xl text-[var(--forest)] group-hover:text-white mb-4 transition-colors">{d.title}</h3>
                <p className="text-sm text-[var(--bark)] group-hover:text-white/75 leading-relaxed transition-colors">{d.body}</p>
                <div className="mt-8 text-xs tracking-widest uppercase text-[var(--copper)] group-hover:text-[var(--bronze)] flex items-center gap-2">
                  Visit <ArrowRight size={14} />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const featured = PROJECTS.slice(0, 4);
  return (
    <section className="section-y bg-[var(--background)]">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Reveal>
            <p className="label-eyebrow mb-6">Selected Works</p>
            <h2 className="text-display text-[var(--forest)] max-w-2xl">Twelve landmark projects across Istanbul, Bodrum and beyond.</h2>
          </Reveal>
          <Link to="/projects" className="link-arrow text-sm">View all projects <ArrowRight size={16} /></Link>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1} className={i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}>
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block relative overflow-hidden rounded-sm h-full">
                <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/12]" : "aspect-[4/3]"}`}>
                  <img src={p.image} alt={p.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest)]/90 via-[var(--forest)]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[var(--bronze)] mb-2">{p.category} · {p.year}</div>
                  <h3 className={`font-display ${i === 0 ? "text-3xl md:text-5xl" : "text-2xl"} mb-1`}>{p.title}</h3>
                  <p className="text-sm text-white/70">{p.location}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="section-y bg-[var(--forest)] text-white overflow-hidden">
      <div className="container-x">
        <Reveal className="max-w-3xl mb-16">
          <p className="label-eyebrow mb-6 !text-[var(--bronze)]">Our Journey</p>
          <h2 className="text-display text-white">A quarter century of living landscapes.</h2>
        </Reveal>
      </div>
      <div className="overflow-x-auto pb-8">
        <div className="container-x relative inline-flex min-w-full">
          <div className="absolute top-[37px] left-0 right-0 h-px bg-[var(--copper)]/40" />
          <div className="flex gap-16 md:gap-24 relative">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className="min-w-[180px]">
                  <div className="w-3 h-3 rounded-full bg-[var(--copper)] ring-4 ring-[var(--forest)] relative" />
                  <div className="font-mono text-sm text-[var(--bronze)] mt-6">{t.year}</div>
                  <div className="font-display italic text-lg text-white/90 mt-2 leading-snug">{t.event}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-[var(--forest)] text-white border-t border-[var(--copper)]/20">
      <div className="container-x section-y text-center max-w-4xl mx-auto">
        <Reveal>
          <p className="label-eyebrow mb-6 mx-auto justify-center">Get in Touch</p>
          <h2 className="text-display">Ready to transform your space?</h2>
          <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto">
            From residential gardens to landmark hospitality projects — let's create something extraordinary.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn btn-copper">Start a Project <ArrowRight size={16} /></Link>
            <a href="tel:+902164041055" className="btn btn-ghost-light"><Phone size={14} /> +90 216 404 10 55</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <Shell transparentNav>
      <Hero />
      <StatsBar />
      <Mission />
      <Divisions />
      <FeaturedProjects />
      <Timeline />
      <CTA />
    </Shell>
  );
}
