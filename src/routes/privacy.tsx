import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy | Işık Landscape Global" }, { name: "description", content: "Privacy policy of Işık Landscape Global." }] }),
  component: () => (
    <Shell transparentNav>
      <PageHeader eyebrow="Legal" title="Privacy Policy" breadcrumb={[{label:"Home",to:"/"},{label:"Privacy"}]} />
      <section className="section-y">
        <div className="container-x prose max-w-3xl text-[var(--bark)] leading-relaxed space-y-6">
          <p className="text-sm font-mono text-[var(--copper)]">Last updated: 2026</p>
          <h2 className="font-display text-2xl text-[var(--forest)]">Data Controller</h2>
          <p>Işık Peyzaj Global San. ve Tic. A.Ş., Orhan Veli Kanık Cad. No:72 K:2 Martı Plaza, Kavacık-Beykoz, İstanbul.</p>
          <h2 className="font-display text-2xl text-[var(--forest)]">Data Collected</h2>
          <p>Name, email, phone via contact form. Anonymised analytics via Google Analytics.</p>
          <h2 className="font-display text-2xl text-[var(--forest)]">Purpose</h2>
          <p>Responding to enquiries and improving site performance.</p>
          <h2 className="font-display text-2xl text-[var(--forest)]">Sharing</h2>
          <p>We do not sell or share personal data with third parties outside the Işık Landscape group.</p>
          <h2 className="font-display text-2xl text-[var(--forest)]">Retention</h2>
          <p>Contact data: 2 years. Analytics: 26 months.</p>
          <h2 className="font-display text-2xl text-[var(--forest)]">Rights</h2>
          <p>Under Turkish KVKK and EU GDPR you may request access, correction, or deletion. Contact: info@isikpeyzajglobal.com</p>
        </div>
      </section>
    </Shell>
  ),
});
