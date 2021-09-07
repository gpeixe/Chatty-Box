import React from 'react';
import * as Styled from './styles';
import {colors} from '../../../styles/colors';
import {TextInputProps} from 'react-native';

interface InputProps extends Styled.InputStyledProps, TextInputProps {
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
