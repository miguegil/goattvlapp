import Link from "next/link";
import { GoatLogo } from "@/components/goat-logo";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/#planes", label: "Planes" },
  { href: "/#instalacion", label: "Instalación" },
  { href: "/socios-goat", label: "Socios GOAT" },
  { href: "/#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="container-goat flex items-center justify-between gap-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <GoatLogo priority className="h-12 w-12 rounded-lg object-cover" />
          <span className="text-lg font-extrabold tracking-[0.2em] text-white">GOAT TV</span>
        </Link>

        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          {links.map((link) => (
            <Link key={link.href} className="transition hover:text-white" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white">
            Menú
          </summary>
          <nav className="absolute right-0 mt-3 grid w-52 gap-2 rounded-2xl border border-white/10 bg-neutral-950 p-3 text-sm text-white shadow-2xl">
            {links.map((link) => (
              <Link
                key={link.href}
                className="rounded-xl px-3 py-2 transition hover:bg-white/10"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
