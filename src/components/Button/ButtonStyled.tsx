import "@fontsource/saira-stencil-one";
import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.main};
  :disabled {
    background-color: ${(props) => props.theme.colors.darkerMain};
  }
  width: 323px;
  height: 40px;
  left: 19px;
  top: 824px;
  border-radius: ${(props) => props.theme.variables.radius};
  font-size: ${(props) => props.theme.fonts.buttonFontSize};
  color: ${(props) => props.theme.colors.mainFontColor};
  font-family: ${(props) => props.theme.fonts.tittlesFontFamily};

  @media (min-width: 900px) {
    height: 57px;
  }
`;
