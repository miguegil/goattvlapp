import type { Metadata } from "next";
import Link from "next/link";
import {
  Baby,
  Cast,
  Clapperboard,
  Clock,
  Flame,
  MonitorPlay,
  Radio,
  Smartphone,
  Sparkles,
  Star,
  Tv,
  Wrench,
  Zap,
} from "lucide-react";
import { ContactChannels } from "@/components/contact-channels";
import { Faq } from "@/components/faq";
import { FeatureCards } from "@/components/feature-cards";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroShowcase } from "@/components/hero-showcase";
import { PricingCards } from "@/components/pricing-cards";
import { SectionTitle } from "@/components/section-title";
import { GoatLogo } from "@/components/goat-logo";
import { getWhatsAppLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "GOAT TV | Streaming HD y 4K, Planes e Instalación",
  description:
    "Conoce GOAT TV: streaming en HD y 4K con películas, series, canales en vivo, KidsZone y compatibilidad con Fire Stick, Android TV, Chromecast, Google TV y Android. Roku próximamente.",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GOAT TV",
    url: "https://goattvapp.com",
    email: "wubimedia@gmail.com",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GOAT TV",
    url: "https://goattvapp.com",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GOAT TV",
    applicationCategory: "EntertainmentApplication",
    operatingSystem: "Android, Android TV, Fire TV, Google TV, Chromecast",
    url: "https://goattvapp.com",
  },
];

const benefits = [
  {
    title: "Películas y series",
    description: "Entretenimiento listo para ver desde una experiencia simple y rápida.",
    icon: Clapperboard,
  },
  {
    title: "Canales en vivo",
    description: "Más de 300 canales de más de 10 países para una alternativa completa en casa.",
    icon: Radio,
  },
  {
    title: "KidsZone",
    description: "Una sección pensada para contenido infantil y uso familiar.",
    icon: Baby,
  },
  {
    title: "HD y 4K",
    description: "Calidad visual sólida según tu dispositivo, conexión y contenido.",
    icon: Sparkles,
  },
  {
    title: "Instalación sencilla",
    description: "Te guiamos para activar el servicio sin vueltas innecesarias.",
    icon: Wrench,
  },
  {
    title: "Llévalo de viaje",
    description: "Lleva tu dispositivo contigo y disfruta GOAT TV a donde vayas.",
    icon: Star,
  },
];

const deviceCards = [
  { name: "Fire Stick", description: "Ideal para convertir tu TV en Smart TV.", icon: Flame },
  { name: "Android TV Box", description: "Para cajas Android y centros multimedia.", icon: Tv },
  { name: "Chromecast", description: "Compatible con la experiencia Google.", icon: Cast },
  { name: "Google TV", description: "Listo para televisores y dispositivos Google TV.", icon: MonitorPlay },
  { name: "Android", description: "Funciona en celulares y tablets Android.", icon: Smartphone },
  { name: "Roku próximamente", description: "Compatibilidad en camino.", icon: Clock },
];

const faq = [
  {
    question: "¿Qué incluye GOAT TV?",
    answer: "Acceso a películas, series, canales en vivo y contenido infantil con planes flexibles.",
  },
  {
    question: "¿GOAT TV funciona en Fire Stick?",
    answer: "Sí, GOAT TV está pensado para Fire Stick y otros dispositivos compatibles.",
  },
  {
    question: "¿GOAT TV tiene contenido en 4K?",
    answer: "Sí, GOAT TV incluye experiencia en HD y 4K según el dispositivo, conexión y contenido.",
  },
  {
    question: "¿Roku ya está disponible?",
    answer: "Roku aparece como compatibilidad próxima dentro de la oferta comercial.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-neutral-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(17,83,139,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(204,181,112,0.16),transparent_28%)]" />
          <div className="container-goat relative pt-6">
            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
              <GoatLogo priority className="h-24 w-24 rounded-2xl object-cover shadow-[0_0_45px_rgba(17,83,139,0.45)] md:h-28 md:w-28" />
            </div>
          </div>
          <div className="container-goat relative grid gap-10 py-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-12">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#ccb570]">
                Streaming HD y 4K
              </p>
              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
                Activa GOAT TV hoy y disfruta del mejor entretenimiento en minutos en todos tus dispositivos.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Accede a películas, series, canales en vivo y contenido infantil desde tus dispositivos favoritos. GOAT TV combina instalación sencilla, planes flexibles y una experiencia moderna.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppLink("clientes")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-green-500 px-6 py-3 font-bold text-neutral-950 transition hover:bg-green-400"
                >
                  Quiero GOAT TV
                </a>
                <a
                  href="#planes"
                  className="rounded-full border border-white/15 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  Ver planes
                </a>
              </div>
            </div>

            <HeroShowcase />
          </div>
        </section>

        <section className="container-goat section-pad">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <SectionTitle
              title="¿Qué es GOAT TV?"
              description="GOAT TV es una opción de entretenimiento para quienes buscan películas, series, más de 300 canales en vivo de más de 10 países y contenido infantil en una sola experiencia, con activación rápida y compatibilidad con múltiples dispositivos."
            />
            <div className="flex justify-start md:justify-end">
              <GoatLogo className="h-36 w-36 rounded-2xl object-cover shadow-[0_0_45px_rgba(17,83,139,0.35)]" />
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="container-goat section-pad">
            <SectionTitle title="¿Por qué elegir GOAT TV?" />
            <div className="mt-8">
              <FeatureCards items={benefits} />
            </div>
          </div>
        </section>

        <section id="dispositivos" className="border-y border-blue-400/15 bg-[radial-gradient(circle_at_top_left,rgba(17,83,139,0.14),transparent_34%),rgba(255,255,255,0.02)]">
          <div className="container-goat section-pad">
            <SectionTitle
              title="La mayor variedad de dispositivos compatibles"
              description="Elige entre la mayor variedad de dispositivos compatibles para disfrutar de tus beneficios de GOAT TV, nosotros te ayudamos con la instalación."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {deviceCards.map((device) => {
                const Icon = device.icon;

                return (
                  <article
                    key={device.name}
                    className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/[0.07] p-5 shadow-[0_0_28px_rgba(17,83,139,0.12)] transition hover:border-blue-400/45 hover:bg-blue-400/10"
                  >
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{device.name}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/65">{device.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="planes" className="border-y border-blue-400/15 bg-[radial-gradient(circle_at_top,rgba(17,83,139,0.14),transparent_35%),rgba(255,255,255,0.03)]">
          <div className="container-goat section-pad">
            <SectionTitle
              title="Planes GOAT TV"
              description="Tarifas para 1 pantalla y 2 pantallas. La segunda pantalla suma $100 MXN por mes al paquete."
            />
            <div className="mt-8">
              <PricingCards />
            </div>
            <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-400/[0.07] p-5 text-sm text-white/75 shadow-[0_0_30px_rgba(17,83,139,0.14)]">
              <div className="flex items-start gap-3">
                <Zap className="mt-0.5 h-5 w-5 shrink-0 text-[#ccb570]" />
                <p>
                  Contamos con varios métodos de pago para que tengas acceso al universo de GOAT TV.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="instalacion" className="container-goat section-pad">
          <SectionTitle title="Cómo instalar GOAT TV" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["1", "Solicita acceso", "Pide información por cualquiera de nuestros canales de contacto."],
              ["2", "Instala en tu dispositivo", "Completa la instalación en Fire Stick, Android TV, Chromecast, Google TV o Android."],
              ["3", "Activa tu servicio", "Recibe apoyo para comenzar a usar GOAT TV."],
            ].map(([n, title, text]) => (
              <article key={n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white font-black text-neutral-950">
                  {n}
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-white/70">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-400/[0.07] p-5 text-sm text-white/75 shadow-[0_0_30px_rgba(17,83,139,0.14)]">
            <div className="flex items-start gap-3">
              <Tv className="mt-0.5 h-5 w-5 shrink-0 text-[#ccb570]" />
              <p>
                Pregúntanos por las opciones de dispositivos que tenemos preinstalados para que los disfrutes solo con conectarlo a tu TV.
              </p>
            </div>
          </div>
        </section>

        <section className="container-goat pb-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-neutral-950 to-zinc-900 p-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#ccb570]">
                Oportunidad comercial
              </p>
              <h2 className="mt-3 text-3xl font-black">¿Quieres ganar dinero con GOAT TV?</h2>
              <p className="mt-3 max-w-2xl text-white/75">
                Únete a Socios GOAT y conoce el panel GOAT TV para activaciones, renovaciones, seguimiento y crecimiento de tu equipo.
              </p>
            </div>

            <Link
              href="/socios-goat"
              className="rounded-full bg-green-500 px-6 py-3 font-bold text-neutral-950 transition hover:bg-green-400"
            >
              Quiero ser socio GOAT
            </Link>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="container-goat section-pad">
            <SectionTitle title="Preguntas frecuentes" />
            <div className="mt-8">
              <Faq items={faq} />
            </div>
          </div>
        </section>

        <section id="contacto" className="container-goat section-pad">
          <SectionTitle
            title="Contacto GOAT TV"
            description="Elige el canal que prefieras y contáctanos con un mensaje precargado."
          />
          <div className="mt-8">
            <ContactChannels type="clientes" />
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>

      <Footer />
      <FloatingWhatsApp type="clientes" />
    </>
  );
}
