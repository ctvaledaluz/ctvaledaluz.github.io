import Ending from "../components/help/ending";
import HelpHeading from "../components/help/heading";
import Volunteering from "../components/help/volunteering";
import Hero from "../components/template/hero";
import head2 from "../assets/images/head2-img.jpg";

export default function Help() {
  return (
    <>
      <Hero bg={head2} title="Como posso ajudar a C. T. Vale da Luz" type="r" />
      <HelpHeading />
      <Volunteering />
      <Ending />
    </>
  );
}
