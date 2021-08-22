import { title } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/site-styles/imagesStyles.js";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#999",
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  imgFluid: {
    maxWidth: "50% !important",
    height: "auto",
  },
  imgRaised: {
    boxShadow: "none",
  },
};

export default productStyle;
