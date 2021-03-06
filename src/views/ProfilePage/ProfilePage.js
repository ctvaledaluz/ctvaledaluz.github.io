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
                      Comunidade TerapĂȘutica Vale da Luz
                    </h2>
                    <h5>Joinville - SC</h5>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p className={classes.paragraph}>
                Por volta de 1988, Pastores e membros da Igreja do Evangelho
                Quadrangular organizam-se atravĂ©s de uma OSC (OrganizaĂ§ĂŁo da
                Sociedade Civil), a SASIEQ - ServiĂ§o ServiĂ§o de AĂ§ĂŁo Social,
                IntegraĂ§ĂŁo, EducaĂ§ĂŁo e Qualidade - instituiĂ§ĂŁo sem fins
                lucrativos, de carĂĄter filantrĂłpico, fundada em 11/01/1990, na
                cidade de Joinville/SC, onde desenvolvem vĂĄrias aĂ§Ă”es de cunho
                assistencial. Uma delas Ă© a construĂ§ĂŁo da Comunidade
                TerapĂȘutica, âVale da Luzâ. Na Comunidade TerapĂȘutica -
                localizada na estrada do Salto Alto I, Vila Nova - os acolhidos
                que realizam o programa de recuperaĂ§ĂŁo na unidade permanecem em
                sistema de acolhimento residencial.
              </p>
              <h3>Objetivos</h3>
              <p className={classes.paragraph}>
                Promover aĂ§Ă”es especializadas de inclusĂŁo e/ou reinclusĂŁo social
                dependente/ de drogas psicoativas, provocando mudanĂ§as de
                valores, com humanizaĂ§ĂŁo e desenvolvimento de potencialidades
                abrangendo especialmente a famĂ­lia e a comunidade, na
                perspectiva da melhoria da qualidade de vida, prevenindo
                situaĂ§Ă”es de risco, exclusĂŁo e o isolamento social.
              </p>
              <h3>PĂșblico-alvo</h3>
              <p className={classes.paragraph}>
                Os programas de atendimento aos usuĂĄrios de substĂąncias
                psicoativas da Comunidade TerapĂȘutica Vale da Luz, atende Ă 
                comunidade de todo territĂłrio nacional. A instituiĂ§ĂŁo atualmente
                tem 36 (trinta e seis) vagas para homens da idade de 18 a 59
                anos.
              </p>
              <h3>Como faĂ§o para iniciar o processo de recuperaĂ§ĂŁo?</h3>
              <h4>AdmissĂŁo</h4>
              <p className={classes.paragraph}>
                Querer recuperar-se Ă© condiĂ§ĂŁo essencial, portanto, sĂł serĂĄ
                admitido aquele que se propuser aceitar a participar de todas as
                atividades contidas no programa.
              </p>
              <h3>PermanĂȘncia</h3>
              <p className={classes.paragraph}>
                Na Comunidade TerapĂȘutica Vale da Luz, todas as atividades
                desenvolvidas sĂŁo baseadas no respeito Ă  dignidade da pessoa
                humana. Ă assegurado um ambiente livre de tabaco, ĂĄlcool, drogas
                e violĂȘncia. Todas as atividades sĂŁo orientadas por uma equipe
                tĂ©cnica capacitada. Promovemos o desenvolvimento pessoal,
                buscando a construĂ§ĂŁo um novo estilo de vida, conscientizando os
                acolhidos sobre dependĂȘncia quĂ­mica, promovendo a inserĂ§ĂŁo ou
                reinserĂ§ĂŁo dos acolhidos no mercado de trabalho, auxĂ­liando no
                desenvolvimento de habilidades para superaĂ§ĂŁo de padrĂ”es
                comportamentais nocivos para si mesmo e/ou para outros,
                reconhecendo a espiritualidade como processo de autoconhecimento
                sem a imposiĂ§ĂŁo de crenĂ§as religiosas.
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
