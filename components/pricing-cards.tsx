import { getWhatsAppLink } from "@/lib/contact";
import { plans } from "@/lib/data";

export function PricingCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {plans.map((plan) => (
        <article
          key={plan.name}
          className={`rounded-2xl border p-6 ${
            plan.featured
              ? "border-blue-400 bg-blue-400/10 shadow-[0_0_40px_rgba(17,83,139,0.28)]"
              : "border-white/10 bg-white/5"
          }`}
        >
          {plan.featured && (
            <span className="mb-4 inline-flex rounded-full bg-[#ccb570] px-3 py-1 text-xs font-extrabold text-neutral-950">
              Más pedido
            </span>
          )}
          <h3 className="text-xl font-bold uppercase tracking-wide">{plan.name}</h3>

          <div className="mt-5 grid gap-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">1 pantalla</p>
              <p className="mt-2 text-2xl font-black">{plan.oneScreen}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">2 pantallas</p>
              <p className="mt-2 text-2xl font-black">{plan.twoScreens}</p>
            </div>
          </div>

          <p className="mt-4 min-h-12 text-sm leading-6 text-white/70">{plan.description}</p>
          <a
            href={getWhatsAppLink("clientes")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-green-500 px-5 py-3 font-bold text-neutral-950 transition hover:bg-green-400"
          >
            Lo quiero
          </a>
        </article>
      ))}
    </div>
  );
}
