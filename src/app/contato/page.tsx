import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  ADDRESS,
  CNPJ,
  EMAIL,
  MAPS_URL,
  PHONE,
  SITE_URL,
  WHATSAPP_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato e Triagem",
  description:
    "Contato e triagem da Comunidade Terapêutica Vale da Luz em Joinville/SC. WhatsApp, telefone, e-mail e endereço para acolhimento de dependentes químicos.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Contato e Triagem | Comunidade Terapêutica Vale da Luz",
    description:
      "Contato e triagem da Comunidade Terapêutica Vale da Luz em Joinville/SC.",
    url: `${SITE_URL}/contato`,
    images: [{ url: "/head-img.webp", width: 1200, height: 630, alt: "Comunidade Terapêutica Vale da Luz" }],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="container-page text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">Contato e Triagem</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-gray-700 sm:text-lg">
            Fale diretamente com a nossa equipe de acolhimento. Atendemos
            homens de 18 a 59 anos em situação de dependência química, com
            vagas gratuitas financiadas pelos governos Estadual (Programa
            Reviver) e Federal.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Iniciar triagem pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-gray-100">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <article className="card">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
              <div>
                <h2 className="text-lg font-semibold">Endereço</h2>
                <p className="mt-2 text-gray-700">{ADDRESS}</p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-semibold text-brand-600 hover:underline"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </article>

          <article className="card">
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
              <div>
                <h2 className="text-lg font-semibold">Telefone / WhatsApp</h2>
                <p className="mt-2 text-gray-700">{PHONE}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-semibold text-brand-600 hover:underline"
                >
                  Enviar mensagem
                </a>
              </div>
            </div>
          </article>

          <article className="card">
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
              <div>
                <h2 className="text-lg font-semibold">E-mail institucional</h2>
                <p className="mt-2 text-gray-700">{EMAIL}</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-3 inline-block font-semibold text-brand-600 hover:underline"
                >
                  Enviar e-mail
                </a>
              </div>
            </div>
          </article>

          <article className="card">
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
              <div>
                <h2 className="text-lg font-semibold">Sobre a instituição</h2>
                <p className="mt-2 text-gray-700">
                  Mantida pela SASIEQ — Serviço de Ação Social, Integração,
                  Educação e Qualidade de Joinville - SC.
                </p>
                <p className="mt-2 text-gray-700">CNPJ: {CNPJ}</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
