import Hero from "./src/components/template/hero";
import RootHeading from "./src/components/root/heading";
import PitchPlayer from "./src/components/root/videoplayer";
import Senapred from "./src/components/root/senapred";
import CustomCards from "./src/components/root/cards";
import Features from "./src/components/root/features";
import CallToAction from "./src/components/root/callToAction";
import head3 from "./src/assets/images/head3-img.webp";

export default function Index() {
  return (
    <>
      <Hero bg={head3} title="Comunidade Terapêutica Vale da Luz" type="a" />
      <RootHeading />
      <PitchPlayer />
      <Senapred />
      <CustomCards />
      <Features />
      <CallToAction />
    </>
  );
}
