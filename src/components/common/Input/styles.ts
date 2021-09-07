import {colors} from '../../../styles/colors';
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

  borderRadius?: string;

  width?: string;
  height?: string;

  color?: string;
  backgroundColor?: string;
}

export const TextInput = styled.TextInput<InputStyledProps>`
  margin-top: ${props => props.marginTop || '0px'};
  margin-right: ${props => props.marginRight || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  margin-left: ${props => props.marginLeft || '0px'};

  width: ${props => props.width || '0px'};
  height: ${props => props.height || '0px'};

  color: ${props => props.color || colors.textSecondary};
  background-color: ${props =>
    props.backgroundColor || colors.backgroundSecondary};

  border-radius: ${props => props.borderRadius || '0px'};
  padding-top: ${props => props.paddingTop || '0px'};
  padding-right: ${props => props.paddingRight || '0px'};
  padding-bottom: ${props => props.paddingBottom || '0px'};
  padding-left: ${props => props.paddingLeft || '0px'};
`;
