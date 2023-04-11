import Hero from "../components/root/hero";
import RootHeading from "../components/root/heading";
import PitchPlayer from "../components/root/videoplayer";
import Senapred from "../components/root/senapred";
import CustomCards from "../components/root/cards";
import Features from "../components/root/features";
import CallToAction from "../components/root/callToAction";

export default function Root() {
  return (
    <>
      <Hero />
      <RootHeading />
      <PitchPlayer />
      <Senapred />
      <CustomCards />
      <Features />
      <CallToAction />
    </>
  );
}
