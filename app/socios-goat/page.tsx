import type { Metadata } from "next";
import { ContactChannels } from "@/components/contact-channels";
import { Faq } from "@/components/faq";
import { FeatureCards } from "@/components/feature-cards";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SectionTitle } from "@/components/section-title";
import { getWhatsAppLink } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Socios GOAT | Panel GOAT TV y oportunidad de ingresos",
  description:
    "Únete a Socios GOAT y conoce el panel GOAT TV para activaciones, renovaciones, demos y crecimiento comercial.",
  alternates: {
    canonical: "/socios-goat",
  },
};

const panelFeatures = [
  {
    title: "Activar cuentas",
    description: "Convierte prospectos en clientes con una operación más ordenada.",
  },
  {
    title: "Renovar clientes",
    description: "Da seguimiento a clientes activos y conserva ingresos recurrentes.",
  },
  {
    title: "Crear demos",
    description: "Muestra el servicio con una entrada más fácil para nuevos contactos.",
  },
  {
    title: "Gestionar equipo",
    description: "Organiza crecimiento comercial sin perder claridad operativa.",
  },
  {
    title: "Escalar más rápido",
    description: "Vende, da seguimiento y crece con una base de trabajo clara.",
  },
  {
    title: "Atención multicanal",
    description: "Conecta por WhatsApp, Telegram, SMS y correo según el cliente.",
  },
];

const faq = [
  {
    question: "¿Qué es el panel GOAT TV?",
    answer: "Es la base operativa para apoyar activaciones, renovaciones, demos y seguimiento comercial.",
  },
  {
    question: "¿Socios GOAT sirve si apenas voy a empezar?",
    answer: "Sí, está pensado tanto para iniciar como para crecer con un equipo comercial.",
  },
  {
    question: "¿Puedo captar clientes desde otros países?",
    answer: "Sí, por eso se incluyen botones directos para WhatsApp, Telegram, SMS y correo.",
  },
  {
    question: "¿Cómo solicito información para ser socio GOAT?",
    answer: "Usa cualquiera de los botones de contacto y envía tu mensaje precargado.",
  },
];

export default function SociosPage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-neutral-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(17,83,139,0.28),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(204,181,112,0.16),transparent_30%)]" />
          <div className="container-goat relative grid gap-10 py-20 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#ccb570]">
                Socios GOAT
              </p>
              <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Gana dinero con GOAT TV y haz crecer tu equipo con el panel
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Si buscas ingresos adicionales y una forma más ágil de vender, Socios GOAT te da acceso al panel GOAT TV para activaciones, renovaciones, seguimiento comercial y crecimiento operativo.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppLink("socios")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-green-500 px-6 py-3 font-bold text-neutral-950 transition hover:bg-green-400"
                >
                  Quiero ser socio GOAT
                </a>
                <a
                  href="#panel"
                  className="rounded-full border border-white/15 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  Ver cómo funciona
                </a>
              </div>
            </div>

            <div className="glass-card overflow-hidden shadow-[0_0_55px_rgba(17,83,139,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80"
                alt="Equipo trabajando en una plataforma comercial"
                className="h-64 w-full object-cover opacity-90"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold">Panel GOAT TV</h2>
                <p className="mt-3 text-white/70">
                  Una opción comercial para vender más, organizar clientes y crear un equipo sólido.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Objetivo", "Ingresos"],
                    ["Uso", "Activaciones"],
                    ["Canales", "WhatsApp"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-blue-400/15 bg-blue-400/[0.07] p-4">
                      <p className="text-sm text-white/60">{label}</p>
                      <p className="text-lg font-bold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="panel" className="container-goat section-pad">
          <SectionTitle
            title="¿Qué es Socios GOAT?"
            description="Socios GOAT es la propuesta comercial para personas que quieren vender GOAT TV, atender clientes, apoyar activaciones y usar el panel GOAT TV como base de operación. Es ideal para quienes quieren comenzar solos o formar un equipo comercial."
          />
        </section>

        <section className="border-y border-blue-400/15 bg-[radial-gradient(circle_at_top,rgba(17,83,139,0.14),transparent_35%),rgba(255,255,255,0.03)]">
          <div className="container-goat section-pad">
            <SectionTitle title="¿Qué puedes hacer con el panel GOAT TV?" />
            <div className="mt-8">
              <FeatureCards items={panelFeatures} />
            </div>
          </div>
        </section>

        <section className="container-goat section-pad">
          <SectionTitle title="¿Por qué unirte a Socios GOAT?" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Empieza a vender", "Atiende prospectos y clientes desde varios canales con mensajes listos para enviar."],
              ["Construye ingresos", "Aprovecha renovaciones, seguimiento y crecimiento comercial continuo."],
              ["Haz crecer tu equipo", "Usa la marca, el panel y la comunicación para aumentar alcance y operación."],
            ].map(([title, text], i) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white font-black text-neutral-950">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-white/70">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container-goat pb-16">
          <div className="rounded-2xl border border-blue-400/15 bg-gradient-to-r from-neutral-950 to-[#071a2d] p-8 shadow-[0_0_35px_rgba(17,83,139,0.14)]">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#ccb570]">
              Oportunidad comercial
            </p>
            <h2 className="mt-3 text-3xl font-black">Panel GOAT TV, Socios GOAT y ventas GOAT TV</h2>
            <p className="mt-3 max-w-3xl text-white/75">
              Esta página está enfocada en personas que buscan panel GOAT TV, vender GOAT TV, integrarse al equipo GOAT o generar ingresos con una operación comercial más organizada.
            </p>
            <a
              href={getWhatsAppLink("socios")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-green-500 px-6 py-3 font-bold text-neutral-950 transition hover:bg-green-400"
            >
              Solicitar información
            </a>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="container-goat section-pad">
            <SectionTitle title="Preguntas frecuentes para Socios GOAT" />
            <div className="mt-8">
              <Faq items={faq} />
            </div>
          </div>
        </section>

        <section id="contacto" className="container-goat section-pad">
          <SectionTitle
            title="Contacta a Socios GOAT"
            description="Abre tu canal favorito con un mensaje listo para solicitar información comercial."
          />
          <div className="mt-8">
            <ContactChannels type="socios" />
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp type="socios" />
    </>
  );
}
