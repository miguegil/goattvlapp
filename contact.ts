export const phoneDigits = "522215700497";
export const email = "wubimedia@gmail.com";

export const messages = {
  clientes:
    "Hola, me interesa el servicio de GOAT TV. Quiero información sobre planes, instalación y dispositivos compatibles.",
  socios:
    "Hola, me interesa ser socio vendedor de GOAT TV. Quiero información sobre Socios GOAT y el panel GOAT TV.",
};

export type ContactType = keyof typeof messages;

export function getWhatsAppLink(type: ContactType) {
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(messages[type])}`;
}

export function getTelegramLink(type: ContactType) {
  return `https://t.me/+${phoneDigits}?text=${encodeURIComponent(messages[type])}`;
}

export function getSmsLink(type: ContactType) {
  return `sms:+${phoneDigits}?&body=${encodeURIComponent(messages[type])}`;
}

export function getEmailLink(type: ContactType) {
  const subject =
    type === "socios"
      ? "Información sobre Socios GOAT"
      : "Información sobre GOAT TV";

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messages[type])}`;
}
