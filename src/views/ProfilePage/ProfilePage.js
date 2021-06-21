import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import WorkSection from "../HomePage/Sections/WorkSection";

import profile from "assets/img/apple-icon.png";
import styles from "assets/jss/site-styles/views/profilePage";

const useStyles = makeStyles(styles);

export default function ProfilePage() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "dark",
        }}
      />
      <Parallax small filter image={require("assets/img/head-img.webp")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>
                      Comunidade Terapêutica Vale da Luz
                    </h3>
                    <h6>Joinville - SC</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Por volta de 1988, Pastores e membros da Igreja do Evangelho
                Quadrangular, organizam-se através de uma ONG, a SASIEQ -
                Serviço de Ação Social, Integração, Educação e Qualidade.
                Entidade sem fins lucrativos, de caráter filantrópico, fundada
                em 31/01/89, por Pastores e membros da Igreja do Evangelho
                Quadrangular da cidade de Joinville/SC, onde desenvolvem varias
                ações de cunho assistencial. Uma delas é a construção da
                Comunidade Terapêutica, “Vale da Luz” , que tem como objetivo o
                acolhimento de dependentes químicos, localizada na estrada do
                Salto ao lado da hidroelétrica da Celesc – Central Elétrica de
                Santa Catarina. Na Comunidade Terapêutica - localizadas na
                estrada do Salto Alto I – Vila Nova. Os acolhidos que realizam o
                programa de recuperação na unidade, permanecem em sistema de
                internação por um período de 9(nove) meses e o acolhimento se dá
                nos seguintes eixos:
                <p>Resgate de Dignidade</p>
                <p>Resgate e fortalecimento da cidadania</p>
                <p>Fortalecimento de vínculos familiares e comunitário</p>
                <p>Atividades diárias</p>
                <p>Disciplina</p>
                <p>
                  Oportunidade para inclusão social através de cursos
                  profissionalizante
                </p>
                <p>
                  Incentivo e acompanhamento da reinserção social e no mercado
                  de trabalho
                </p>
                <p>Gestão Técnica Multidisciplinar</p>
              </p>
              <h3>Objetivos</h3>
              <p>
                Promover ações especializadas de inclusão e/ou reinclusão social
                dependente/ de drogas psicoativas, provocando mudanças de
                valores, com humanização e desenvolvimento de potencialidades
                abrangendo especialmente a família e a comunidade, na
                perspectiva da melhoria da qualidade de vida, prevenindo
                situações de risco, exclusão e o isolamento social.
              </p>
              <h3>Público-alvo</h3>
              <p>
                Os programas de atendimento aos usuários de substancias
                psicoativas da Comunidade Terapêutica Vale da Luz, atende à
                comunidade de todo território nacional. A instituição atualmente
                tem 36 (trinta e seis) vagas masculinas para homens da idade de
                18 a 59 anos.
              </p>
              <h3>Como faço para internar?</h3>
              <h4>Admissão</h4>
              <p>
                Querer recuperar-se é condição essencial, portanto, só será
                admitido aquele que se propuser aceitar a participar de todas as
                atividades contidas no programa.
              </p>
            </div>
            <WorkSection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
