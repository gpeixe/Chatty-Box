import {colors} from '../../../styles/colors';
import styled, {css} from 'styled-components/native';

export interface ButtonStyledProps {
  color?: string;

  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;

  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;

  width?: string;
  height?: string;

  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;

  flex?: number;
}

export const Button = styled.TouchableOpacity<ButtonStyledProps>`
  justify-content: center;
  align-items: center;

  background-color: ${props => props.color || colors.colorPrimary};

  height: ${props => props.height || '56px'};
  width: ${props => props.width || '100%'};

  border-radius: ${props => props.borderRadius || '100px'};

  justify-content: center;
  align-items: center;

  margin-top: ${props => props.marginTop || '0px'};
  margin-right: ${props => props.marginRight || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  margin-left: ${props => props.marginLeft || '0px'};

  overflow: hidden;

  ${props =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}

  ${props =>
    props.borderColor &&
    css`
      border-color: ${props.borderColor};
    `}

    ${props =>
    props.borderWidth &&
    css`
      border-width: ${props.borderWidth};
    `}
`;

export const Text = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
`;
