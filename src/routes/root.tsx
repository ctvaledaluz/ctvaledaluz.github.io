import CustomCards from "../components/root/cards";
import RootHeading from "../components/root/heading";
import Hero from "../components/root/hero";
import Senapred from "../components/root/senapred";
import PitchPlayer from "../components/root/videoplayer";
// import Carousel from "../components/root/carousel";
import TextoTeste from "../components/testes/texto";

export default function Root() {
  return (
    <>
      <Hero />
      <RootHeading />
      <PitchPlayer />
      <Senapred />
      <CustomCards />
      <TextoTeste />
    </>
  );
}
