import { ButtonStyled } from "./ButtonStyled";

export interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps): JSX.Element => {
  return <ButtonStyled disabled>{text}</ButtonStyled>;
};

export default Button;
