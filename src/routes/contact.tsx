import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/lang-context";
import heroImg from "@/assets/hero-jwmarriott.jpg";
import { Check, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "İletişim | Contact — Işık Landscape Global" },
      { name: "description", content: "Peyzaj tasarımı ve uygulama sorularınız için bizimle iletişime geçin." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const t = useT();
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  const types = t("contact.types") as string[];

  return (
    <Shell transparentNav>
      <PageHeader eyebrow={t("contact.eyebrow")} title={t("contact.title")} breadcrumb={[{label:"__home__",to:"/"},{label:t("contact.breadcrumb")}]} image={heroImg} />

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-7">
            {sent ? (
              <div className="bg-[var(--sand)] p-12 text-center rounded-sm border border-[var(--copper)]">
                <div className="w-16 h-16 rounded-full bg-[var(--copper)] text-white flex items-center justify-center mx-auto"><Check size={28}/></div>
                <h2 className="font-display text-3xl text-[var(--forest)] mt-6">{t("contact.thanks_h")}</h2>
                <p className="mt-3 text-[var(--bark)]">{t("contact.thanks_b")}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <p className="label-eyebrow mb-4">{t("contact.project_inquiry")}</p>
                <h2 className="text-display text-[var(--forest)] mb-8">{t("contact.tell_us")}</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label={t("contact.name")} name="name" required />
                  <Field label={t("contact.email")} name="email" type="email" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label={t("contact.phone")} name="phone" type="tel" />
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[var(--bark)] mb-2">{t("contact.project_type")}</label>
                    <select required className="w-full bg-transparent border-b border-[var(--fern)] py-3 text-[var(--forest)] focus:outline-none focus:border-[var(--copper)]">
                      {types.map((tp) => <option key={tp}>{tp}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[var(--bark)] mb-2">{t("contact.message")}</label>
                  <textarea required rows={6} className="w-full bg-transparent border-b border-[var(--fern)] py-3 text-[var(--forest)] focus:outline-none focus:border-[var(--copper)]" />
                </div>
                <label className="flex items-start gap-3 text-sm text-[var(--bark)]">
                  <input type="checkbox" required className="mt-1 accent-[var(--copper)]" />
                  <span>{t("contact.consent_pre")}<a href="/privacy" className="text-[var(--copper)]">{t("contact.consent_link")}</a>{t("contact.consent_post")}</span>
                </label>
                <button type="submit" className="btn btn-copper">{t("common.send_message")}</button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="bg-[var(--forest)] text-white p-10 rounded-sm space-y-8">
              <div>
                <p className="label-eyebrow !text-[var(--bronze)] mb-4">{t("contact.hq")}</p>
                <p className="flex items-start gap-3 text-white/85"><MapPin size={18} className="mt-1 flex-none text-[var(--bronze)]"/><span style={{whiteSpace:"pre-line"}}>{t("contact.hq_addr")}</span></p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <a href="tel:+902164041055" className="flex items-center gap-3 hover:text-[var(--bronze)]"><Phone size={16}/>+90 216 404 10 55</a>
                <a href="https://wa.me/905335906050" className="flex items-center gap-3 hover:text-[var(--bronze)]"><MessageCircle size={16}/>WhatsApp +90 533 590 60 50</a>
                <a href="mailto:info@isikpeyzajglobal.com" className="flex items-center gap-3 hover:text-[var(--bronze)]"><Mail size={16}/>info@isikpeyzajglobal.com</a>
              </div>
              <div>
                <p className="label-eyebrow !text-[var(--bronze)] mb-4">{t("contact.nurseries_label")}</p>
                <ul className="space-y-3 text-sm text-white/80">
                  <li><span className="text-[var(--bronze)]">Riva (Beykoz):</span> (216) 433 32 42</li>
                  <li><span className="text-[var(--bronze)]">Yalova:</span> (549) 646 86 96</li>
                  <li><span className="text-[var(--bronze)]">Bodrum:</span> +90 538 056 39 92</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="h-[400px] w-full">
        <iframe
          title="Map"
          className="w-full h-full grayscale-[40%]"
          src="https://www.openstreetmap.org/export/embed.html?bbox=29.085%2C41.087%2C29.105%2C41.097&layer=mapnik&marker=41.092%2C29.095"
          loading="lazy"
        />
      </section>
    </Shell>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs tracking-widest uppercase text-[var(--bark)] mb-2">{label}</label>
      <input name={name} type={type} required={required} className="w-full bg-transparent border-b border-[var(--fern)] py-3 text-[var(--forest)] focus:outline-none focus:border-[var(--copper)]" />
    </div>
  );
}
