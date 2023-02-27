import styled from "styled-components";
import "@fontsource/saira-stencil-one";

export const ButtonStyled = styled.button`
  background-color: #92942b;
  :active {
    background-color: #cccf18;
  }
  width: 323px;
  height: 40px;
  left: 19px;
  top: 824px;
  border-radius: 10px;
  font-size: 1.25rem;
  color: black;
  font-family: "Saira Stencil One";

  @media (min-width: 900px) {
    height: 57px;
  }
`;
