import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/contact";

export function FloatingWhatsApp({
  type,
}: {
  type: "clientes" | "socios";
}) {
  return (
    <a
      href={getWhatsAppLink(type)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-neutral-950 shadow-2xl transition hover:scale-105 hover:bg-green-400"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
