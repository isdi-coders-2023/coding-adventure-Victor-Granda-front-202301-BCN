import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  variables: {
    radius: "10px",
  },

  colors: {
    main: "#cccf18",
    darkerMain: "#92942b",
    mainFontColor: "black",
    secondaryFontColor: "white",
    warningColor: "#F3949A",
  },

  fonts: {
    buttonFontSize: "1.25rem",
    tittlesFontFamily: "Saira Stencil One",
    textFontFamily: ["Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans"],
    sizes: {
      smallFont: "0.9375rem",
      mediumFont: "1rem",
      bigFont: "1,25rem",
      tittleFont: "2rem",
    },
  },
};

export default theme;
