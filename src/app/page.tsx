import Image from "next/image";
import Link from "next/link";
import {
  HeartHandshake,
  MessageCircle,
  Newspaper,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCheck,
} from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import { WHATSAPP_URL } from "@/lib/site";

const CARDS = [
  {
    title: "Atuação",
    icon: UserCheck,
    text: "Acolhemos pessoas do sexo masculino de 18 a 59 anos, com o objetivo de apoiá-los a interromper o uso álcool e drogas, através de um novo estilo de vida, com mudanças de valores e ressignificação de propósito, promovendo ações especializadas de inclusão social e desenvolvimento pessoal.",
  },
  {
    title: "Metodologia",
    icon: HeartHandshake,
    text: "Provocar mudança de valores, por meio do respeito a dignidade humana, convivência entre os pares (outros dependentes) e espiritualidade, com humanização e desenvolvimento de potencialidades, contemplanto o ser em sua integralidade, abrangendo especialmente a família.",
  },
  {
    title: "Resultados",
    icon: TrendingUp,
    text: "Quando pessoas reabilitadas têm acesso a melhores condições de vida, como tratamento adequado, educação e ressocialização, tendem a estar mais envolvidas em suas comunidades e têm menos probabilidade de experimentar situações de recaída ou isolamento social.",
  },
];

const DIFFERENTIALS = [
  {
    image: "/card1.webp",
    title: "Acompanhamento Técnico",
    text: "Investimos constantemente em treinamento de equipe e melhorias na estrutura para alcançar excelência em atendimento.",
  },
  {
    image: "/card2.webp",
    title: "Monitoramento",
    text: "Investimento em tecnologias de monitoramento em toda área comum da comunidade terapêutica para manter a segurança tanto de acolhidos como da equipe.",
  },
  {
    image: "/card3.webp",
    title: "Estrutura",
    text: "Investimos na formação de um caráter renovado utilizando as melhores tendências em ferramentas psicoterapêuticas aliadas ao atendimento individualizado.",
  },
];

export default function HomePage() {
  return (
    <>
      <section
        className="relative flex min-h-[60vh] items-center border-b-2 border-black bg-cover bg-center"
        style={{ backgroundImage: "url(/head3-img.webp)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="container-page relative py-20">
          <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-5xl">
            Comunidade Terapêutica Vale da Luz
          </h1>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/sobre" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-brand-900">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              Quem somos
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Contato
            </a>
            <a
              href="https://blog.valedaluz.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-brand-900"
            >
              <Newspaper className="h-5 w-5" aria-hidden="true" />
              Blog
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page text-center">
          <h2 className="text-2xl font-bold sm:text-4xl">
            Acolhimento para usuários de álcool e drogas
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-base sm:text-lg">
            <p>
              A <strong>Comunidade Terapêutica Vale da Luz</strong> é uma ação de
              cunho assistencial desenvolvida pela{" "}
              <strong>
                SASIEQ (Serviço de Ação Social, Integração, Educação e Qualidade)
              </strong>{" "}
              de Joinville - SC e tem como objetivo o acolhimento e reabilitação de
              dependentes químicos, usuários de álcool e drogas.
            </p>
            <p>Atendemos homens com idade entre 18 e 59 anos.</p>
          </div>
        </div>
      </section>

      <section className="section bg-gray-100">
        <div className="container-page">
          <VideoPlayer />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="rounded-xl bg-gray-100 p-10 text-center shadow-md">
            <p className="text-2xl sm:text-4xl">Temos vagas gratuitas</p>
            <p className="mt-2 text-lg sm:text-2xl">
              financiadas pelos governos Estadual (Programa Reviver) e Federal
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Falar com a equipe de acolhimento
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-100">
        <div className="container-page grid gap-10 md:grid-cols-3">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="card flex flex-col text-center">
                <Icon className="mx-auto h-10 w-10 text-brand-600" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">{card.title}</h3>
                <p className="mt-3 text-gray-600">{card.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">
            Nossos diferenciais
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {DIFFERENTIALS.map((item) => (
              <article key={item.title} className="flex flex-col items-center text-center">
                <div className="h-24 w-24 overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-gray-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-100">
        <div className="container-page text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Gostaria de saber mais informações?
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            Entre em contato pelo nosso WhatsApp e visite a página{" "}
            <strong>Quem Somos</strong>.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/sobre" className="btn-secondary">
              <Target className="h-5 w-5" aria-hidden="true" />
              Quem somos
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Contato
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
