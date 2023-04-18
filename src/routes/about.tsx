import Goals from "../components/about/goal";
import History from "../components/about/history";
import HowTo from "../components/about/howto";
import Staying from "../components/about/staying";
import Target from "../components/about/target";
import Carousel from "../components/root/carousel";
import Hero from "../components/template/hero";

export default function About() {
  return (
    <>
      <Hero
        bg="url(src/assets/images/head2-img.webp)"
        title="Histórico e Trabalhos Desenvolvidos"
        type="h"
      />
      <History />
      <Carousel />
      <Target />
      <Goals />
      <HowTo />
      <Staying />
    </>
  );
}
