import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  HandHeart,
  Handshake,
  Home,
  Heart,
  Megaphone,
  PartyPopper,
  Shirt,
  ShoppingCart,
  Sparkles,
  Users,
} from "lucide-react";
import Hero from "@/components/Hero";
import PixCopyButton from "@/components/PixCopyButton";
import { SITE_URL, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Como Ajudar",
  description:
    "Voluntariado, doações financeiras via PIX, alimentos, materiais de higiene, roupas e parcerias para a Comunidade Terapêutica Vale da Luz, Joinville/SC.",
  alternates: { canonical: "/como-ajudar" },
  openGraph: {
    title: "Como Ajudar | Comunidade Terapêutica Vale da Luz",
    description:
      "Voluntariado, doações financeiras via PIX, alimentos, materiais de higiene, roupas e parcerias para a Comunidade Terapêutica Vale da Luz.",
    url: `${SITE_URL}/como-ajudar`,
    images: [{ url: "/head2-img.webp", width: 1200, height: 630, alt: "Comunidade Terapêutica Vale da Luz" }],
  },
};

const WAYS = [
  {
    title: "Voluntariado",
    icon: HandHeart,
    text: "Ofereça seu tempo e habilidades para ajudar em atividades e projetos da Comunidade Terapêutica Vale da Luz.",
  },
  {
    title: "Doação financeira",
    icon: Heart,
    text: "Contribua com dinheiro para ajudar na manutenção e melhorias da estrutura e atividades da Comunidade Terapêutica Vale da Luz.",
  },
  {
    title: "Doação de alimentos",
    icon: ShoppingCart,
    text: "Contribua com alimentos para garantir uma alimentação adequada aos residentes da Comunidade Terapêutica Vale da Luz.",
  },
  {
    title: "Materiais de higiene e limpeza",
    icon: Sparkles,
    text: "Contribua com materiais de limpeza e higiene pessoal para maior qualidade de vida dos residentes da Comunidade Terapêutica Vale da Luz.",
  },
  {
    title: "Doação de roupas e objetos",
    icon: Shirt,
    text: "Contribua com roupas e objetos que possam ser utilizados pelos residentes da Comunidade Terapêutica Vale da Luz.",
  },
  {
    title: "Divulgação da instituição",
    icon: Megaphone,
    text: "Divulgue a comunidade terapêutica em suas redes sociais, entre amigos e familiares para ajudar a aumentar o conhecimento e apoio à instituição.",
  },
  {
    title: "Parcerias",
    icon: Handshake,
    text: "Estabeleça parcerias com empresas e instituições para ajudar a Comunidade Terapêutica Vale da Luz.",
  },
  {
    title: "Eventos beneficentes",
    icon: PartyPopper,
    text: "Organize eventos com objetivo de arrecadar fundos ou doações para a Comunidade Terapêutica Vale da Luz.",
  },
];

export default function HelpPage() {
  return (
    <>
      <Hero image="/head2-img.webp" title="Como posso ajudar a C. T. Vale da Luz">
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Users className="h-5 w-5" aria-hidden="true" />
            Contato
          </a>
          <Link
            href="/"
            className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-brand-900"
          >
            <Home className="h-5 w-5" aria-hidden="true" />
            Página Inicial
          </Link>
        </div>
      </Hero>

      <section className="section">
        <div className="container-page text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Extendemos o convite
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base text-gray-700 sm:text-lg">
            Todas essas ideias são valiosas e podem ajudar muito! Se você está
            interessado em contribuir, a melhor forma de começar é entrar em contato
            com a instituição e perguntar quais são suas necessidades e como você
            pode ajudar. Divulgar a instituição em suas redes sociais e entre
            amigos e familiares também pode ajudar a aumentar o conhecimento e
            apoio à instituição. Nos mande uma mensagem falando sobre sua vontade
            de colaborar. Ficaremos muito felizes em receber seu contato.
          </p>
        </div>
      </section>

      <section className="section bg-gray-100">
        <div className="container-page">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Formas de ajudar
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WAYS.map((way) => {
              const Icon = way.icon;
              return (
                <article
                  key={way.title}
                  className="card flex flex-col items-center border border-gray-200 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{way.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{way.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="card mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Você pode ajudar com um PIX
            </h2>
            <p className="mt-3 text-gray-600">Nosso QR Code:</p>
            <div className="mx-auto my-6 h-40 w-40 overflow-hidden rounded-lg">
              <Image
                src="/pix.webp"
                alt="QR Code PIX para doação à Comunidade Terapêutica Vale da Luz"
                width={160}
                height={160}
                className="h-full w-full object-cover"
              />
            </div>
            <PixCopyButton />
          </div>
        </div>
      </section>
    </>
  );
}
