/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/site-styles/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/*<ListItem className={classes.listItem}>*/}
      {/*  <CustomDropdown*/}
      {/*    noLiPadding*/}
      {/*    buttonText="Páginas"*/}
      {/*    buttonProps={{*/}
      {/*      className: classes.navLink,*/}
      {/*      color: "transparent"*/}
      {/*    }}*/}
      {/*    buttonIcon={Apps}*/}
      {/*    dropdownList={[*/}
      {/*      <Link to="/" className={classes.dropdownLink}>*/}
      {/*        Início*/}
      {/*      </Link>,*/}
      {/*      <Link to="/" className={classes.dropdownLink}>*/}
      {/*        Sobre*/}
      {/*      </Link>,*/}
      {/*    ]}*/}
      {/*  />*/}
      {/*</ListItem>*/}
      <ListItem className={classes.listItem}>
        <Tooltip
          title="Contato por Whatsapp"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://api.whatsapp.com/send?phone=554792675740&text=Contato%20pelo%20site%20"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-whatsapp"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Siga nosso facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/ctvaledaluz"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Siga nosso instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/valedaluzct"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
