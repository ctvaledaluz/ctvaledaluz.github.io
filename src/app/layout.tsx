import type { Metadata } from "next";
import { Open_Sans, Raleway } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/site";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Acolhimento e Reabilitação em Joinville/SC`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "A Comunidade Terapêutica Vale da Luz, ação da SASIEQ em Joinville/SC, acolhe e reabilita dependentes químicos, usuários de álcool e drogas. Vagas gratuitas financiadas pelos governos Estadual e Federal.",
  keywords: [
    "comunidade terapêutica",
    "Vale da Luz",
    "Joinville",
    "SASIEQ",
    "dependência química",
    "álcool e drogas",
    "reabilitação",
    "acolhimento",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Acolhimento e Reabilitação em Joinville/SC`,
    description:
      "Acolhimento residencial para dependentes químicos, usuários de álcool e drogas, para todo o território nacional.",
    images: [
      {
        url: "/head3-img.webp",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Acolhimento e reabilitação de dependentes químicos em Joinville/SC.",
    images: ["/head3-img.webp"],
  },
  icons: {
    icon: "/azul.png",
    apple: "/azul.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE_NAME,
    alternateName: "CT Vale da Luz",
    url: SITE_URL,
    description:
      "Comunidade terapêutica de acolhimento residencial para dependentes químicos, usuários de álcool e drogas.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Estrada do Salto I, s/nº - Vila Nova",
      addressLocality: "Joinville",
      addressRegion: "SC",
      addressCountry: "BR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-47-9-9179-3260",
      contactType: "admissions",
      contactOption: "TollFree",
      url: WHATSAPP_URL,
    },
  };

  return (
    <html lang="pt-BR" className={`${openSans.variable} ${raleway.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-body text-gray-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
