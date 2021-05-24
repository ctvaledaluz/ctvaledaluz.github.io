import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chat from "@material-ui/icons/Chat";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/site-styles/views/localSections/productStyle.js";
const useStyles = makeStyles(styles);

export default function VisaoGeralSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Apresentação e Objetivos</h2>
          <h5 className={classes.description}>
            A <b>Comunidade Terapêutica Vale da Luz</b> é uma ação de cunho
            assistencial desenvolvida pela{" "}
            <b>
              SASIEQ (Serviço de Ação Social, Integração, Educação e Qualidade)
            </b>{" "}
            de Joinville - SC e tem como objetivo o acolhimento e reabilitação
            de dependentes de álcool e drogas.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Ação"
              description="Promover ações especializadas de inclusão e/ou reinclusão social do usuário/dependente de drogas psicoativas."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Reação"
              description="Provocar mudança de valores com humanização e desenvolvimento de potencialidades, abrangendo especialmente a família."
              icon={EmojiPeopleIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Resultado"
              description="Melhoria da qualidade de vida; prevenção situações de risco, exclusão e o isolamento social."
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
