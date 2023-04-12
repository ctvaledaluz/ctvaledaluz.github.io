import { Component } from "react";
import Slider from "react-slick";
import { Box, Container, Image } from "@chakra-ui/react";

import card1 from "../../assets/images/carousel/1.png";
import card2 from "../../assets/images/carousel/2.png";
import card4 from "../../assets/images/carousel/4.png";
import card5 from "../../assets/images/carousel/5.png";
import card6 from "../../assets/images/carousel/6.png";
import card7 from "../../assets/images/carousel/7.png";
import card8 from "../../assets/images/carousel/8.png";
import card9 from "../../assets/images/carousel/9.png";
import card10 from "../../assets/images/carousel/10.png";

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: false,
    };
    const cards = [
      card1,
      card2,
      card4,
      card5,
      card6,
      card7,
      card8,
      card9,
      card10,
    ];
    return (
      <Container maxW="6xl" paddingTop={10}>
        <Slider {...settings}>
          {cards.map((card, i) => (
            <Box key={i} position="relative">
              <Image src={card} rounded={"xl"} />
            </Box>
          ))}
        </Slider>
      </Container>
    );
  }
}
