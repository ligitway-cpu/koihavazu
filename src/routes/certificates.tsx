import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/mission.jpg";
import { Award } from "lucide-react";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certifications & Awards | Işık Landscape Global" },
      { name: "description", content: "Industry certifications, awards and compliance documents of Işık Landscape Global." },
    ],
  }),
  component: CertificatesPage,
});

const AWARDS = [
  { title: "ISO 9001:2015 Quality Management", body: "Certified quality management system across all divisions.", year: "2018" },
  { title: "ISO 14001 Environmental Management", body: "Recognised environmental compliance and sustainability practice.", year: "2019" },
  { title: "Turkish Landscape Architects Association", body: "Member in good standing — TPMD.", year: "1998" },
  { title: "Excellence in Hospitality Landscape", body: "JW Marriott Bosphorus rooftop programme award.", year: "2022" },
  { title: "Green Roof Innovation Award", body: "Met Kağıt Fabrikası — extensive green roof design.", year: "2020" },
  { title: "Public Realm Award", body: "Galataport waterfront landscape contribution.", year: "2021" },
  { title: "OHSAS 18001 Occupational Safety", body: "Site safety standards across active projects.", year: "2017" },
  { title: "EPDM Playground Certification", body: "Authorized installer of certified EPDM surfacing.", year: "2019" },
  { title: "Sustainable Landscape Practice", body: "Recognised for native plant integration.", year: "2023" },
];

function CertificatesPage() {
  return (
    <Shell transparentNav>
      <PageHeader eyebrow="Recognition" title="Certifications & Awards." breadcrumb={[{label:"Home",to:"/"},{label:"Certificates"}]} image={heroImg} />
      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <p className="text-lg text-[var(--bark)] max-w-2xl mb-16 leading-relaxed">
              A record of industry recognition and compliance spanning more than 25 years of practice.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AWARDS.map((a, i) => (
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
