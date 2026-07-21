import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useT } from "@/lib/lang-context";
import { LanguageToggle } from "./LanguageToggle";

export function Nav() {
  const t = useT();
  const NAV = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.about"), to: "/about-us" },
    { label: t("nav.legacy"), to: "/quarter-century" },
    { label: t("nav.services"), to: "/services" },
    { label: t("nav.projects"), to: "/projects" },
    { label: t("nav.certificates"), to: "/certificates" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled((prev) => {
          const next = window.scrollY > 80;
          return prev === next ? prev : next;
        });
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const solid = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? "bg-[oklch(0.32_0.05_150_/_0.95)] backdrop-blur-md py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container-x flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-display text-xl md:text-2xl text-white tracking-tight">
              Işık <em className="not-italic text-[var(--bronze)]">Landscape</em>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative text-[0.72rem] font-medium tracking-[0.18em] uppercase text-white/85 hover:text-white transition-colors group"
                activeProps={{ className: "text-white" }}
              >
                {n.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[var(--copper)] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle />
            <Link to="/contact" className="btn btn-copper !py-2.5 !px-5 text-[0.7rem]">{t("nav.cta")}</Link>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="lg:hidden text-white p-2"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[var(--forest)] flex flex-col transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-x flex items-center justify-between py-6">
          <span className="font-display text-2xl text-white">Işık <em className="not-italic text-[var(--bronze)]">Landscape</em></span>
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-white p-2"><X size={26} /></button>
        </div>
        <nav className="container-x flex flex-col gap-6 mt-8">
          {NAV.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-display text-3xl text-white border-b border-white/10 pb-4 hover:text-[var(--bronze)] transition-colors"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {n.label}
            </Link>
          ))}
          <div className="mt-6 flex items-center justify-between">
            <LanguageToggle />
            <Link to="/contact" className="btn btn-copper">{t("nav.cta")}</Link>
          </div>
        </nav>
      </div>
    </>
  );
}
