import { ButtonPropType } from "../../types/components.types";
import { ButtonComponent, ButtonWrapper } from "./Button.styles";

const Button: React.FC<ButtonPropType> = ({
  title,
  onClick,
  background,
  color,
  border,
  className
}) => {
  return (
    <ButtonWrapper>
      <ButtonComponent
        background={background}
        border={border}
        onClick={onClick}
        color={color}
        className={className}
      >
        <p>{title}</p>
      </ButtonComponent>
    </ButtonWrapper>
  );
};

export default Button;
