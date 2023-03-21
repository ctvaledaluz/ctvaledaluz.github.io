import React from "react";
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/1.webp";
import image2 from "assets/img/2.webp";
import image3 from "assets/img/3.webp";
import image4 from "assets/img/4.webp";
import image7 from "assets/img/7.webp";
import image9 from "assets/img/9.webp";
import image10 from "assets/img/10.webp";
import image11 from "assets/img/11.webp";

import styles from "assets/jss/site-styles/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>Entrada do Sítio</h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>Lagoas de Pesca</h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>Escritório e Casas</h4>
                  </div>
                </div>
                <div>
                  <img src={image4} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>Refeitório e Casas</h4>
                  </div>
                </div>
                <div>
                  <img src={image7} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>Campo de Futebol</h4>
                  </div>
                </div>
                <div>
                  <img src={image9} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>Casas e Cachoeira ao Fundo</h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image10}
                    alt="Third slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>Visão panorâmica</h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image11}
                    alt="Third slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>Visão panorâmica</h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
