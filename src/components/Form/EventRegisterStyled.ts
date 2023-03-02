import styled from "styled-components";

export const EventRegisterStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 48px;

  .form {
    &__label {
      display: flex;
      flex-direction: column;
      gap: 9px;
    }

    &__input {
      padding: 11px;
      border-radius: 8px;
      background-color: ${(props) => props.theme.colors.labelBackground};
      border: 1px solid ${(props) => props.theme.colors.mainFontColor};
      color: ${(props) => props.theme.colors.mainFontColor};
      ::placeholder {
        color: ${(props) => props.theme.colors.mainFontColor};
      }
    }
  }

  @media screen and (min-width: 987px) {
    .form {
      &__input {
        padding: 20px 11px;
      }
      max-width: 20.189rem;
    }
  }
`;

export default EventRegisterStyled;
