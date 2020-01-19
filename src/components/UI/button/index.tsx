import React from 'react';
import { ButtonWrapper } from './button-styled';

interface ButtonProps {
  type?: 'button' | 'reset' | 'submit' | undefined;
  click?: () => void;
  name?: string;
  title?: string;
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  click,
  name,
  title = 'Button'
}) => {
  return (
    <ButtonWrapper onClick={click} type={type}>
      {title}
    </ButtonWrapper>
  );
};
