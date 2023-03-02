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
    labelBackground: "#e8e8e8",
    background: "#1E1E1E",
  },

  fonts: {
    buttonFontSize: "1.25rem",
    tittlesFontFamily: "Saira Stencil One",
    textFontFamily: "Roboto",
    sizes: {
      smallFont: "0.9375rem",
      mediumFont: "1rem",
      bigFont: "1,25rem",
      mobileH2Font: "1.25rem",
      desktopH2Font: "2.5rem",
    },
    weight: {
      h2: "400",
    },
  },
};

export default theme;
