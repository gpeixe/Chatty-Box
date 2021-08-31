import {colors} from 'src/styles/colors';
import styled from 'styled-components/native';

export interface InputStyledProps {
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;

  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;

  color?: string;
}

export const Container = styled.View<InputStyledProps>`
  flex: 1;
  background-color: ${colors.colorPrimary};
  justify-content: center;
  align-items: center;
`;

export const TextField = styled.TextInput<InputStyledProps>`
  margin-top: ${props => props.marginTop || '0px'};
  margin-right: ${props => props.marginRight || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  margin-left: ${props => props.marginLeft || '0px'};

  color: ${props => props.color || colors.textSecondary};
  padding-top: ${props => props.paddingTop || '0px'};
  padding-right: ${props => props.paddingRight || '0px'};
  padding-bottom: ${props => props.paddingBottom || '0px'};
  padding-left: ${props => props.paddingLeft || '0px'};
`;
