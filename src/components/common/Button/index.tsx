import React from 'react';
import * as Styled from './styles';

interface ButtonProps extends Styled.ButtonStyledProps {
  text: string;
  color?: string;
}

export const Button: React.FC<ButtonProps> = props => {
  return (
    <Styled.Button {...props}>
      <Styled.Text>{props.text}</Styled.Text>
    </Styled.Button>
  );
};
