import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-[var(--forest)] text-[var(--fern)] mt-0">
      <div className="container-x py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h4 className="font-display text-2xl text-white mb-4">Işık <em className="not-italic text-[var(--bronze)]">Landscape</em></h4>
          <p className="text-sm leading-relaxed text-[var(--fern)]/80 max-w-xs">
            We believe in the healing, protective and elevating power of nature.
          </p>
          <div className="flex gap-4 mt-6 text-xs tracking-widest uppercase">
            <a href="#" className="hover:text-[var(--copper)] transition-colors">Pinterest</a>
            <a href="#" className="hover:text-[var(--copper)] transition-colors">TikTok</a>
            <a href="#" className="hover:text-[var(--copper)] transition-colors">LinkedIn</a>
          </div>
        </div>
        <div>
          <h5 className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--copper)] mb-5">Navigate</h5>
          <ul className="space-y-3 text-sm">
            {[["Home","/"],["About","/about-us"],["Legacy","/quarter-century"],["Services","/services"],["Projects","/projects"],["Certificates","/certificates"],["Contact","/contact"]].map(([l,h]) => (
              <li key={h}><Link to={h} className="hover:text-white transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--copper)] mb-5">Companies</h5>
          <ul className="space-y-3 text-sm">
            {[["Landscape Contracting","https://isikpeyzaj.com"],["Design & Management","https://isiktasarim.com"],["Garden Maintenance","https://isikbahce.com"],["Plant Production","https://isikbitkiuretim.com"],["Sales & Marketing","https://isikpazarlama.com"],["GreenMall ↗","https://greenmall.com.tr"]].map(([l,h]) => (
              <li key={h}><a href={h} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-[0.7rem] tracking-[0.25em] uppercase text-[var(--copper)] mb-5">Headquarters</h5>
          <address className="not-italic text-sm leading-relaxed">
            Orhan Veli Kanık Cad. No:72, K:2<br/>34810 Martı Plaza, Kavacık<br/>Beykoz/İstanbul, Turkey
          </address>
          <div className="mt-4 text-sm space-y-1">
            <a href="tel:+902164041055" className="block hover:text-white">+90 216 404 10 55</a>
            <a href="mailto:info@isikpeyzajglobal.com" className="block hover:text-white">info@isikpeyzajglobal.com</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--fern)]/60">
          <p>© 2026 Işık Landscape Global. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/cookies" className="hover:text-white">Cookies</Link>
            <span>KVKK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
