import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-galataport.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Landscape Services – Design, Contracting & Maintenance | Işık Landscape" },
      { name: "description", content: "Comprehensive landscape architecture services: contracting, design & project management, garden maintenance, plant production, and retail through GreenMall." },
    ],
  }),
  component: ServicesPage,
});

const TABS = [
  { id: "contracting", label: "Contracting", site: "isikpeyzaj.com", title: "Landscape Contracting", body: "We bring your landscape vision to life with 25+ years of implementation expertise. Our teams handle every element of exterior construction and planting.", items: ["Site preparation and earthworks","Concrete and hardscape installations","Drainage system design and installation","Irrigation systems (automated, drip, sprinkler)","Imported and local plant supply","Roll lawn installation","Wood and metal works","Green roof and vertical garden systems","Interior planted spaces","Urban furniture and EPDM playground"] },
  { id: "design", label: "Design", site: "isiktasarim.com", title: "Design & Project Management", body: "Conceptual through technical — we design landscapes that endure.", items: ["Hardscape design","Softscape design","Lighting plans","Irrigation design","Technical specifications","Bills of quantities","Project management"] },
  { id: "maintenance", label: "Maintenance", site: "isikbahce.com", title: "Garden Maintenance", body: "Ongoing care that protects your investment and keeps gardens thriving year after year.", items: ["Scheduled pruning","Fertilizing","Pest and disease control","Lawn care — mowing, aeration, overseeding","Annual planting refreshes","Irrigation servicing"] },
  { id: "production", label: "Production", site: "isikbitkiuretim.com", title: "Plant Production", body: "Three nurseries — Riva (Beykoz), Yalova, and Bodrum — producing 500+ species. Shrubs, trees, perennials, climbers, seasonal and ornamental plants.", items: ["Mature trees","Mediterranean & native species","Container production","Wholesale supply","Export"] },
  { id: "greenmall", label: "GreenMall", site: "greenmall.com.tr", title: "GreenMall — Online Garden Centre", body: "Plants, soils, pots, outdoor furniture and BBQ equipment. Available online and in-store.", items: ["Plants & seedlings","Soils & substrates","Pots & planters","Outdoor furniture","BBQ equipment"] },
];

function ServicesPage() {
  const [active, setActive] = useState(TABS[0].id);
  const tab = TABS.find(t => t.id === active)!;
  return (
    <Shell transparentNav>
      <PageHeader eyebrow="Services" title="From concept to cultivation." breadcrumb={[{label:"Home",to:"/"},{label:"Services"}]} image={heroImg} />

      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-12 border-b border-[var(--fern)]">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-5 py-4 text-xs tracking-widest uppercase font-medium transition-colors relative ${
                  active === t.id ? "text-[var(--forest)]" : "text-[var(--bark)]/60 hover:text-[var(--forest)]"
                }`}
              >
                {t.label}
                {active === t.id && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--copper)]" />}
              </button>
            ))}
          </div>

          <Reveal key={tab.id}>
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <p className="font-mono text-xs tracking-widest uppercase text-[var(--copper)] mb-4">{tab.site}</p>
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
                  <p className="label-eyebrow !text-[var(--bronze)] mb-4">Inquire</p>
                  <h3 className="font-display text-3xl mb-6">Let's discuss your project.</h3>
                  <p className="text-white/75 text-sm leading-relaxed">Speak with our {tab.label.toLowerCase()} team about scope, timing, and approach.</p>
                  <a href="/contact" className="btn btn-copper mt-8 w-full">Contact Us</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Shell>
  );
}
