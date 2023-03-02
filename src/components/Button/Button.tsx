import { ButtonStyled } from "./ButtonStyled";

export interface ButtonProps {
  text: string;
  type: string;
  disabled: boolean;
}

const Button = ({ text, type, disabled }: ButtonProps): JSX.Element => {
  return <ButtonStyled>{text}</ButtonStyled>;
};

export default Button;
