import { ButtonStyled } from "./ButtonStyled";

export interface ButtonProps {
  text: string;
  type: string;
  disabled: boolean;
}

const Button = ({ text, type, disabled }: ButtonProps): JSX.Element => {
  return (
    <div className="button__container">
      <ButtonStyled>{text}</ButtonStyled>
      <span className="required">Sorry, something went wrong</span>
    </div>
  );
};

export default Button;
