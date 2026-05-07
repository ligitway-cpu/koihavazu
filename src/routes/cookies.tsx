import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/cookies")({
  head: () => ({ meta: [{ title: "Cookie Policy | Işık Landscape Global" }, { name: "description", content: "Cookie policy of Işık Landscape Global." }] }),
  component: () => (
    <Shell transparentNav>
      <PageHeader eyebrow="Legal" title="Cookie Policy" breadcrumb={[{label:"Home",to:"/"},{label:"Cookies"}]} />
      <section className="section-y">
        <div className="container-x max-w-3xl text-[var(--bark)] leading-relaxed space-y-6">
          <h2 className="font-display text-2xl text-[var(--forest)]">Cookies We Use</h2>
          <ul className="space-y-3">
            <li><strong className="text-[var(--forest)]">Essential:</strong> Site functionality and session management — cannot be disabled.</li>
            <li><strong className="text-[var(--forest)]">Analytics:</strong> Anonymised Google Analytics — can be disabled.</li>
            <li><strong className="text-[var(--forest)]">Marketing:</strong> Not currently used.</li>
          </ul>
          <p>To manage cookies, use the consent banner on first visit, or adjust your browser settings.</p>
        </div>
      </section>
    </Shell>
  ),
});
