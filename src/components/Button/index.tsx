import { ReactNode } from "react";

import {
  Container,
  StyledButton,
  StyledWhiteButton,
  StyledDarkButton,
} from "./styles";

interface ButtonProps {
  children: ReactNode;
}

const ButtonWrapping = (Component: any, props: Props) => {
  const { children, disabled, isLoading, ...rest } = props;
  const button = (
    <Component disabled={disabled || isLoading} {...rest}>
      {children}
    </Component>
  );

  return button;
};
type Props = {
  target?: string;
  href?: string;
  to?: string;
  children: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: any;
  className?: string;
  size?: "small";
};

export const WhiteButton = (props: Props) =>
  ButtonWrapping(StyledWhiteButton, props);

export const DarkButton = (props: Props) =>
  ButtonWrapping(StyledDarkButton, props);
