import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://goattvapp.com"),
  title: {
    default: "GOAT TV",
    template: "%s | GOAT TV",
  },
  description: "Streaming HD y 4K, planes, instalación y Socios GOAT.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "GOAT TV",
    url: "https://goattvapp.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <body className="bg-neutral-950 text-white antialiased">{children}</body>
    </html>
  );
}
