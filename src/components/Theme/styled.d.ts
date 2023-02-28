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
    };

    fonts: {
      buttonFontSize: string;
      tittlesFontFamily: string;
      textFontFamily: string[];
      sizes: {
        smallFont: string;
        mediumFont: string;
        bigFont: string;
        tittleFont: string;
      };
    };
  }
}
