import styled from 'styled-components/native';

export interface ImageProps {
  width: number;
  height: number;
  borderRadius: string;

  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;

  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
}

export const Image = styled.Image<ImageProps>`
  width: ${props => `${props.width}px` || '50px'};
  height: ${props => `${props.height}px` || '50px'};

  border-radius: ${props => props.borderRadius || '50px'};

  padding-top: ${props => props.paddingTop || '0px'};
  padding-right: ${props => props.paddingRight || '0px'};
  padding-bottom: ${props => props.paddingBottom || '0px'};
  padding-left: ${props => props.paddingLeft || '0px'};

  margin-top: ${props => props.marginTop || '0px'};
  margin-right: ${props => props.marginRight || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  margin-left: ${props => props.marginLeft || '0px'};
`;
