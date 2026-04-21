import Link from "next/link";
import { GoatLogo } from "@/components/goat-logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="container-goat grid gap-8 py-10 text-sm text-white/70 md:grid-cols-3 md:items-center">
        <div>
          <p className="font-bold text-white">GOAT TV</p>
          <p>Streaming, instalación y atención comercial.</p>
        </div>

        <div className="flex justify-start md:justify-center">
          <GoatLogo className="h-20 w-20 rounded-2xl object-cover shadow-[0_0_35px_rgba(17,83,139,0.35)]" />
        </div>

        <div className="flex flex-wrap gap-4 md:justify-end">
          <Link className="transition hover:text-white" href="/">Inicio</Link>
          <Link className="transition hover:text-white" href="/socios-goat">Socios GOAT</Link>
          <Link className="transition hover:text-white" href="/#contacto">Contacto</Link>
        </div>
      </div>
    </footer>
  );
}
