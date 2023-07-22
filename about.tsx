import Goals from "./src/components/about/goal";
import History from "./src/components/about/history";
import HowTo from "./src/components/about/howto";
import Staying from "./src/components/about/staying";
import Target from "./src/components/about/target";
import Carousel from "./src/components/root/carousel";
import Hero from "./src/components/template/hero";
import head1 from "./src/assets/images/head-img.webp";

export default function About() {
  return (
    <>
      <Hero bg={head1} title="Histórico e Trabalhos Desenvolvidos" type="h" />
      <History />
      <Carousel />
      <Target />
      <Goals />
      <HowTo />
      <Staying />
    </>
  );
}
