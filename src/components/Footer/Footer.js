/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Telegram from "@material-ui/icons/Telegram";

import styles from "assets/jss/site-styles/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/"
                className={classes.block}
              >
                Comunidade Terapêutica Vale Da Luz
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href=""
                className={classes.block}
              >
                Sobre
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href=""
                className={classes.block}
              >
                Blog (Em breve!)
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , feito por {" "}
          <Telegram className={classes.icon} /> {" "}
          <a
            href="https://t.me/je4npw"
            className={aClasses}
            target="_blank"
          >
            Je4nPw
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
