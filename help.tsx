import Ending from "./src/components/help/ending";
import HelpHeading from "./src/components/help/heading";
import Volunteering from "./src/components/help/volunteering";
import Hero from "./src/components/template/hero";
import head2 from "./src/assets/images/head2-img.jpg";

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
