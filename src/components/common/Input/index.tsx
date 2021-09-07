import React from 'react';
import * as Styled from './styles';
import {colors} from '../../../styles/colors';

interface InputProps extends Styled.InputStyledProps {
  color?: string;
  placeholder: string;
  placeholderTextColor?: string;
}

export const Input: React.FC<InputProps> = props => {
  return (
    <Styled.TextInput
      {...props}
      placeholderTextColor={props.placeholderTextColor || colors.textSecondary}
    />
  );
};
