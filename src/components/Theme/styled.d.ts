import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    variables: {
      radius: string;
    };

    colors: {
      main: string;
      darkerMain: string;
      mainFontColor: string;
      secondaryFontColor: string;
      warningColor: string;
      labelBackground: string;
      background: string;
    };

    fonts: {
      buttonFontSize: string;
      tittlesFontFamily: string;
      textFontFamily: string;
      sizes: {
        smallFont: string;
        mediumFont: string;
        bigFont: string;
        mobileH2Font: string;
        desktopH2Font: string;
      };
      weight: {
        h2: string;
      };
    };
  }
}
