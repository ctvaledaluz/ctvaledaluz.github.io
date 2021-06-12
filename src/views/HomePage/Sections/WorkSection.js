import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/site-styles/views/localSections/workStyle";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import { WhatsApp } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={12}>
            <h2 className={classes.title}>Gostaria de saber mais?</h2>
            <h4 className={classes.description}>
              Entre em contato pelo nosso WhatsApp:
            </h4>
            <div align="center">
              <Button
                href="https://api.whatsapp.com/send?phone=554792675740&text=Contato%20pelo%20site%20"
                target="_blank"
                color="success"
                round
                className={classes.navLink}
              >
                <WhatsApp /> Falar conosco!
              </Button>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
