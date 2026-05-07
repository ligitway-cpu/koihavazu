import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Shell({ children, transparentNav = false }: { children: ReactNode; transparentNav?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className={transparentNav ? "" : "pt-24"}>{children}</main>
      <Footer />
    </div>
  );
}
