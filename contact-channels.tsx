import { Mail, MessageCircle, Send, Smartphone } from "lucide-react";
import {
  getEmailLink,
  getSmsLink,
  getTelegramLink,
  getWhatsAppLink,
} from "@/lib/contact";

export function ContactChannels({
  type,
}: {
  type: "clientes" | "socios";
}) {
  const items = [
    {
      name: "WhatsApp",
      href: getWhatsAppLink(type),
      icon: MessageCircle,
      description: "Atención rápida y directa",
      iconClass: "bg-green-500 text-neutral-950",
    },
    {
      name: "Telegram",
      href: getTelegramLink(type),
      icon: Send,
      description: "Ideal para atención internacional",
      iconClass: "bg-sky-500 text-white",
    },
    {
      name: "SMS",
      href: getSmsLink(type),
      icon: Smartphone,
      description: "Abre un mensaje desde tu celular",
      iconClass: "bg-white text-neutral-950",
    },
    {
      name: "Correo",
      href: getEmailLink(type),
      icon: Mail,
      description: "wubimedia@gmail.com",
      iconClass: "bg-red-500 text-white",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;
        const external = item.name !== "Correo";

        return (
          <a
            key={item.name}
            href={item.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white transition hover:border-green-400/50 hover:bg-white/10"
          >
            <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.iconClass}`}>
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mb-1 font-semibold">{item.name}</h3>
            <p className="text-sm text-white/70">{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
