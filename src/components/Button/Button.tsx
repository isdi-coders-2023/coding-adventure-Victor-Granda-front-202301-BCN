import { ButtonStyled } from "./ButtonStyled";

export interface buttonProps {
  text: string;
}

const Button = ({ text }: buttonProps): JSX.Element => {
  return <ButtonStyled disabled>{text}</ButtonStyled>;
};

export default Button;
