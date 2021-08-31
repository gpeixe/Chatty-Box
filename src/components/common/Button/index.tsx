import React from 'react';
import {Text} from 'react-native';
import * as Styled from './styles';

interface ButtonProps extends Styled.ButtonStyledProps {
  text: string;
  color: string;
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <Styled.Container {...props}>
      <Text>{props.text}</Text>
    </Styled.Container>
  );
};

export default Button;
