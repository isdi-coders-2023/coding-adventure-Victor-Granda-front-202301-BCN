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
  background-color: #fff;
  font-family: ${(props) => props.theme.fonts.textFontFamily};
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
  font-size: ${(props) => props.theme.fonts.sizes.tittleFont};
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
`;
export default GlobalStyles;
