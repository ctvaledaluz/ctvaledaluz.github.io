import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chat from "@material-ui/icons/Chat";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/site-styles/views/localSections/productStyle.js";
import logoGov from "../../../assets/img/governo-federal.png";
import classNames from "classnames";
const useStyles = makeStyles(styles);

export default function VisaoGeralSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Apresentação</h2>
          <h5 className={classes.description}>
            A <b>Comunidade Terapêutica Vale da Luz</b> é uma ação de cunho
            assistencial desenvolvida pela{" "}
            <b>
              SASIEQ (Serviço de Ação Social, Integração, Educação e Qualidade)
            </b>{" "}
            de Joinville - SC e tem como objetivo o acolhimento e reabilitação
            de dependentes de álcool e drogas.
          </h5>
          <h3 className={classes.description}>
            Temos vagas gratuitas financiadas pelos governos Estadual (Programa
            Reviver) e Federal (SENAPRED)
          </h3>
          <img
            src={logoGov}
            alt="Governo Federal"
            className={imageClasses}
            style={{ height: "100px !important" }}
          />
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Atuação"
              description="Acolhemos pessoas do sexo masculino,
              com o objetivo de apoiá-los a interromper o uso álcool e drogas,
              através de um novo estilo de vida, com mudanças de valores,
              promovendo ações especializadas de inclusão social e
              desenvolvimento pessoal."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Reação"
              description="Provocar mudança de valores, por meio do  respeito a
              dignidade humana, convivência entre os pares (outros dependentes)
              e  espiritualidade, com humanização e desenvolvimento de
              potencialidades, abrangendo especialmente a família."
              icon={EmojiPeopleIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Resultado"
              description={`Melhoria da qualidade de vida.
              Prevenção de situações de risco, exclusão e o isolamento social.`}
              icon={GroupAddIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
