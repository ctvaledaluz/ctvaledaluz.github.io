import Hero from "../components/template/hero";
import RootHeading from "../components/root/heading";
import PitchPlayer from "../components/root/videoplayer";
import Senapred from "../components/root/senapred";
import CustomCards from "../components/root/cards";
import Features from "../components/root/features";
import CallToAction from "../components/root/callToAction";

export default function Root() {
  return (
    <>
      <Hero
        bg="url(src/assets/images/head-img.webp)"
        title="Comunidade Terapêutica Vale da Luz"
        type="a"
      />
      <RootHeading />
      <PitchPlayer />
      <Senapred />
      <CustomCards />
      <Features />
      <CallToAction />
    </>
  );
}
