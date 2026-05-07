import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about-us" },
  { label: "Legacy", to: "/quarter-century" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Certificates", to: "/certificates" },
  { label: "Contact", to: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
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
            <span className="text-[0.7rem] tracking-widest text-white/60">TR · EN</span>
            <Link to="/contact" className="btn btn-copper !py-2.5 !px-5 text-[0.7rem]">Get in Touch</Link>
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
          <Link to="/contact" className="btn btn-copper mt-6 w-full">Get in Touch</Link>
        </nav>
      </div>
    </>
  );
}
