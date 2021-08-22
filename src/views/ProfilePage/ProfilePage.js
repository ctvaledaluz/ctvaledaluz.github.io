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
                    <h2 className={classes.title}>
                      Comunidade Terapêutica Vale da Luz
                    </h2>
                    <h5>Joinville - SC</h5>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p className={classes.paragraph}>
                Por volta de 1988, Pastores e membros da Igreja do Evangelho
                Quadrangular organizam-se através de uma OSC (Organização da
                Sociedade Civil), a SASIEQ - Serviço Serviço de Ação Social,
                Integração, Educação e Qualidade - instituição sem fins
                lucrativos, de caráter filantrópico, fundada em 11/01/1990, na
                cidade de Joinville/SC, onde desenvolvem várias ações de cunho
                assistencial. Uma delas é a construção da Comunidade
                Terapêutica, “Vale da Luz”. Na Comunidade Terapêutica -
                localizada na estrada do Salto Alto I, Vila Nova - os acolhidos
                que realizam o programa de recuperação na unidade permanecem em
                sistema de acolhimento residencial.
              </p>
              <h3>Objetivos</h3>
              <p className={classes.paragraph}>
                Promover ações especializadas de inclusão e/ou reinclusão social
                dependente/ de drogas psicoativas, provocando mudanças de
                valores, com humanização e desenvolvimento de potencialidades
                abrangendo especialmente a família e a comunidade, na
                perspectiva da melhoria da qualidade de vida, prevenindo
                situações de risco, exclusão e o isolamento social.
              </p>
              <h3>Público-alvo</h3>
              <p className={classes.paragraph}>
                Os programas de atendimento aos usuários de substâncias
                psicoativas da Comunidade Terapêutica Vale da Luz, atende à
                comunidade de todo território nacional. A instituição atualmente
                tem 36 (trinta e seis) vagas para homens da idade de 18 a 59
                anos.
              </p>
              <h3>Como faço para iniciar o processo de recuperação?</h3>
              <h4>Admissão</h4>
              <p className={classes.paragraph}>
                Querer recuperar-se é condição essencial, portanto, só será
                admitido aquele que se propuser aceitar a participar de todas as
                atividades contidas no programa.
              </p>
              <h3>Permanência</h3>
              <p className={classes.paragraph}>
                Na Comunidade Terapêutica Vale da Luz, todas as atividades
                desenvolvidas são baseadas no respeito à dignidade da pessoa
                humana. É assegurado um ambiente livre de tabaco, álcool, drogas
                e violência. Todas as atividades são orientadas por uma equipe
                técnica capacitada. Promovemos o desenvolvimento pessoal,
                buscando a construção um novo estilo de vida, conscientizando os
                acolhidos sobre dependência química, promovendo a inserção ou
                reinserção do usuário no mercado de trabalho, auxíliando no
                desenvolvimento de habilidades para superação de padrões
                comportamentais nocivos para si mesmo e/ou para outros,
                reconhecenndo a espiritualidade como processo de
                autoconhecimento sem a imposição de crenças religiosas.
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
