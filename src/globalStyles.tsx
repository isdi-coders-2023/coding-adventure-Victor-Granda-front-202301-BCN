import "@fontsource/saira-stencil-one";
import "@fontsource/roboto";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, ::after, ::before {
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fonts.textFontFamily};
}
body {
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.background}; ;
  color: ${(props) => props.theme.colors.main};
  font-family: ${(props) =>
    props.theme.fonts
      .textFontFamily}, "Oxygen", "Ubuntu", "Cantarell", "Fira Sans";
  width: 100%;
  min-height: 100vh;

}
a {
  text-decoration: none;
  color: inherit;
}
h1,h2{
  padding: 0;
  margin: 0;
  font-family: ${(props) => props.theme.fonts.tittlesFontFamily} ;
  font-weight: ${(props) => props.theme.fonts.weight.h2};
  
  @media screen and (min-width: 987px) {
  h2 {
  font-family: ${(props) => props.theme.fonts.sizes.desktopH2Font} ;
    
    }

  }
}
ol, ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

label{
  color: ${(props) => props.theme.colors.secondaryFontColor}
}

.button__container{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4.68rem;
}

.required{
  color: ${(props) => props.theme.colors.warningColor};
     
}


`;
export default GlobalStyles;
