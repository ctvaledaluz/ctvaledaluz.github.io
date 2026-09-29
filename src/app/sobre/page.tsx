import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Home, Info, MessageCircle } from "lucide-react";
import Hero from "@/components/Hero";
import { SITE_URL, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Histórico, metodologia e público-alvo da Comunidade Terapêutica Vale da Luz, mantida pela SASIEQ em Joinville/SC. Acolhimento residencial de homens de 18 a 59 anos.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Quem Somos | Comunidade Terapêutica Vale da Luz",
    description:
      "Histórico, metodologia e público-alvo da Comunidade Terapêutica Vale da Luz, mantida pela SASIEQ em Joinville/SC.",
    url: `${SITE_URL}/sobre`,
    images: [{ url: "/head-img.webp", width: 1200, height: 630, alt: "Comunidade Terapêutica Vale da Luz" }],
  },
};

const GALLERY = Array.from({ length: 14 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/ambientes/pg-${n}.webp`,
    alt: `Ambiente da Comunidade Terapêutica Vale da Luz — página ${i + 1} do portfólio Local e Estrutura 2024`,
  };
});

const PILLARS = [
  {
    title: "O que Fazemos",
    text: "Buscamos promover ações especializadas de inclusão e/ou reinclusão social de dependentes de drogas psicoativas, provocando mudanças de valores que humanizem e desenvolvam suas potencialidades, englobando especialmente a família e a comunidade.",
  },
  {
    title: "O que Entendemos",
    text: "Entendemos que a recuperação de dependentes químicos é um desafio complexo que requer um trabalho multidisciplinar, envolvendo profissionais da saúde, assistência social, psicologia e outras áreas afins. Para isso, é essencial criar estratégias efetivas de prevenção e tratamento, levando em consideração as particularidades de cada indivíduo e sua realidade social e familiar.",
  },
  {
    title: "O que Queremos",
    text: "Nossos objetivos incluem a melhoria da qualidade de vida dos atendidos e das pessoas ao seu redor, prevenindo situações de risco, exclusão e o isolamento social. Desejamos que o atendido possa recuperar sua autonomia e dignidade, tornando-se um agente transformador em sua comunidade e em sua própria vida.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero image="/head-img.webp" title="Histórico e Trabalhos Desenvolvidos">
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Contato
          </a>
          <Link
            href="/como-ajudar"
            className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-brand-900"
          >
            <Info className="h-5 w-5" aria-hidden="true" />
            Como Ajudar
          </Link>
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
          <h2 className="text-2xl font-bold sm:text-3xl">Breve histórico</h2>
          <div className="mx-auto mt-6 max-w-4xl space-y-4 text-base text-gray-700 sm:text-lg">
            <p>
              Em meados de 1988, Pastores e membros da Igreja do Evangelho
              Quadrangular se mobilizaram para criar uma OSC (Organização da
              Sociedade Civil) que tivesse como objetivo promover ações sociais
              de impacto na comunidade. Assim nasceu a SASIEQ - Serviço de Ação
              Social, Integração, Educação e Qualidade - uma instituição sem fins
              lucrativos, de cunho filantrópico, que foi fundada oficialmente em
              11 de janeiro de 1990, na cidade de Joinville, em Santa Catarina.
              Desde então, a SASIEQ tem se dedicado a desenvolver uma série de
              projetos assistenciais que visam melhorar a qualidade de vida de
              pessoas em situação de vulnerabilidade. Uma dessas iniciativas foi
              a construção da Comunidade Terapêutica &apos;Vale da Luz&apos;,
              que oferece um programa de recuperação para dependentes químicos.
            </p>
            <p>
              Situada na estrada do Salto Alto I, na Vila Nova, a Comunidade
              Terapêutica é um espaço de acolhimento residencial para aqueles que
              desejam se livrar do vício e retomar o controle de suas vidas.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-gray-100">
        <div className="mx-auto max-w-[880px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Ambientes Comunitários
          </h2>
          <p className="mx-auto mt-4 text-center text-gray-700">
            Conheça a nossa estrutura e os ambientes da Comunidade Terapêutica
            Vale da Luz, conforme o portfólio &quot;Local e Estrutura 2024&quot;.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {GALLERY.map((item) => (
              <a
                key={item.src}
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                title={item.alt}
                className="block overflow-hidden rounded-lg shadow transition-transform hover:scale-105"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={794}
                  height={1119}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Público-alvo</h2>
          <p className="mx-auto mt-6 max-w-4xl text-base text-gray-700 sm:text-lg">
            Os programas de atendimento aos usuários de substâncias psicoativas
            da Comunidade Terapêutica Vale da Luz é voltada à comunidade de todo
            território nacional. A instituição atualmente tem 36 (trinta e seis)
            vagas para homens da idade de 18 a 59 anos.
          </p>
        </div>
      </section>

      <section className="section bg-gray-100">
        <div className="container-page grid gap-10 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article key={pillar.title} className="card">
              <h3 className="text-xl font-bold">{pillar.title}</h3>
              <p className="mt-3 text-gray-600">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="rounded-xl bg-gray-100 p-10 text-center shadow-md">
            <h2 className="text-2xl font-bold sm:text-4xl">Como faço para internar?</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Falar com a triagem
              </a>
            </div>
          </div>

          <article className="mt-10 rounded-xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold">Requisitos para Internação</h2>
            <p className="mt-4 text-gray-700">
              <strong>Admissão: </strong>
              Para ingressar em um programa de recuperação, é essencial que o
              indivíduo queira se recuperar e esteja comprometido em participar
              de todas as atividades contidas no programa. Essa disposição é
              crucial para que o processo de recuperação seja efetivo e duradouro.
            </p>
            <p className="mt-4 text-gray-700">
              O programa de recuperação é desenvolvido de forma personalizada,
              considerando as particularidades de cada indivíduo, e é composto por
              atividades multidisciplinares, como psicoterapia, terapia
              ocupacional, atividades físicas e grupos de apoio. Além disso, o
              programa também inclui atividades educacionais e de capacitação
              profissional, para que o indivíduo possa retomar sua vida com
              autonomia e dignidade. Para garantir que todos os acolhidos tenham
              acesso aos benefícios do programa, é importante que eles estejam
              dispostos a se dedicar integralmente às atividades propostas. Dessa
              forma, será possível proporcionar uma recuperação completa e
              satisfatória.
            </p>
          </article>
        </div>
      </section>

      <section className="section bg-gray-100">
        <div className="container-page">
          <article className="card">
            <h2 className="text-2xl font-semibold">Permanência</h2>
            <p className="mt-4 text-justify text-gray-700">
              Na Comunidade Terapêutica Vale da Luz, nossas atividades são
              pautadas pelo respeito à dignidade da pessoa humana. Mantemos um
              ambiente seguro, livre de tabaco, álcool, drogas e violência, com o
              objetivo de proporcionar aos acolhidos um espaço propício para a
              recuperação. Nossa equipe técnica altamente capacitada oferece
              orientação e suporte em todas as etapas do processo de recuperação.
              Nosso principal objetivo é promover o desenvolvimento pessoal dos
              acolhidos, auxiliando-os na construção de um novo estilo de vida
              livre da dependência química. Para isso, realizamos atividades que
              visam conscientizar os acolhidos sobre a dependência química e suas
              consequências, promover a inserção ou reinserção dos acolhidos no
              mercado de trabalho e auxiliar no desenvolvimento de habilidades
              para a superação de padrões comportamentais nocivos para si mesmo e
              para outros. Também reconhecemos a espiritualidade como um processo
              de autoconhecimento, sem impor crenças religiosas, para ajudar os
              acolhidos a encontrar um sentido mais profundo em suas vidas. Com
              esse compromisso de cuidar de cada indivíduo de forma única,
              oferecemos um programa completo e integrado para garantir que os
              acolhidos possam ter uma recuperação bem-sucedida e duradoura.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/" className="btn-secondary">
                <Home className="h-5 w-5" aria-hidden="true" />
                Página Inicial
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
