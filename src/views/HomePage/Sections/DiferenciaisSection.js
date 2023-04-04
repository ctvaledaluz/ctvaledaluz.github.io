import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/teamStyle";

import monitor from "assets/img/monitoramento.jpg";
import atend from "assets/img/atendimento.webp";
import invest from "assets/img/investimento.webp";

const useStyles = makeStyles(styles);

export default function DiferenciaisSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Diferenciais</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={atend}
                  alt="Acompanhamento técnico"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>Acompanhamento Técnico</h4>
              <CardBody>
                <p className={classes.description}>
                  Investimos constantemente em treinamento de equipe e melhorias
                  na estrutura para alcançar excelência em atendimento.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={monitor}
                  alt="Monitoramento"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>Monitoramento</h4>
              <CardBody>
                <p className={classes.description}>
                  Investimento em tecnologias de monitoramento em toda área
                  comum da comunidade terapêutica para manter a segurança tanto
                  de acolhidos como da equipe.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={invest} alt="Estrutura" className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>Estrutura</h4>
              <CardBody>
                <p className={classes.description}>
                  Investimos na formação de um caráter renovado utilizando as
                  mlehores tendências em ferramentas psicoterapêuticas, bem como
                  cuidado pessoal.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
