import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { useT } from "@/lib/lang-context";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Gizlilik | Privacy — Işık Landscape Global" }, { name: "description", content: "Gizlilik politikası." }] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const t = useT();
  return (
    <Shell transparentNav>
      <PageHeader eyebrow={t("footer.privacy")} title={t("privacy.title")} breadcrumb={[{label:"__home__",to:"/"},{label:t("privacy.breadcrumb")}]} />
      <section className="section-y">
        <div className="container-x prose max-w-3xl text-[var(--bark)] leading-relaxed space-y-6">
          <p className="text-sm font-mono text-[var(--copper)]">{t("privacy.last")}</p>
          <h2 className="font-display text-2xl text-[var(--forest)]">{t("privacy.controller_h")}</h2>
          <p>{t("privacy.controller_b")}</p>
          <h2 className="font-display text-2xl text-[var(--forest)]">{t("privacy.collected_h")}</h2>
          <p>{t("privacy.collected_b")}</p>
          <h2 className="font-display text-2xl text-[var(--forest)]">{t("privacy.purpose_h")}</h2>
          <p>{t("privacy.purpose_b")}</p>
          <h2 className="font-display text-2xl text-[var(--forest)]">{t("privacy.sharing_h")}</h2>
          <p>{t("privacy.sharing_b")}</p>
          <h2 className="font-display text-2xl text-[var(--forest)]">{t("privacy.retention_h")}</h2>
          <p>{t("privacy.retention_b")}</p>
          <h2 className="font-display text-2xl text-[var(--forest)]">{t("privacy.rights_h")}</h2>
          <p>{t("privacy.rights_b")}</p>
        </div>
      </section>
    </Shell>
  );
}
