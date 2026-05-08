import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { useT } from "@/lib/lang-context";

export const Route = createFileRoute("/cookies")({
  head: () => ({ meta: [{ title: "Çerezler | Cookies — Işık Landscape Global" }, { name: "description", content: "Çerez politikası." }] }),
  component: CookiesPage,
});

function CookiesPage() {
  const t = useT();
  return (
    <Shell transparentNav>
      <PageHeader eyebrow={t("footer.cookies")} title={t("cookies.title")} breadcrumb={[{label:"__home__",to:"/"},{label:t("cookies.breadcrumb")}]} />
      <section className="section-y">
        <div className="container-x max-w-3xl text-[var(--bark)] leading-relaxed space-y-6">
          <h2 className="font-display text-2xl text-[var(--forest)]">{t("cookies.uses_h")}</h2>
          <ul className="space-y-3">
            <li><strong className="text-[var(--forest)]">{t("cookies.essential")}</strong> {t("cookies.essential_b")}</li>
            <li><strong className="text-[var(--forest)]">{t("cookies.analytics")}</strong> {t("cookies.analytics_b")}</li>
            <li><strong className="text-[var(--forest)]">{t("cookies.marketing")}</strong> {t("cookies.marketing_b")}</li>
          </ul>
          <p>{t("cookies.manage")}</p>
        </div>
      </section>
    </Shell>
  );
}
