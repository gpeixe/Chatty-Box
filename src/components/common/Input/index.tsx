import React from 'react';
import * as Styled from './styles';

interface InputProps extends Styled.InputStyledProps {
  text: string;
  color: string;
  placeholder: string;
}

const Button: React.FC<InputProps> = ({...rest}) => {
  return (
    <Styled.Container>
      <Styled.TextField {...rest} />
    </Styled.Container>
  );
};

export default Button;
