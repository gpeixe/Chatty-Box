import styled from 'styled-components/native';

export interface IImageProps {
  width: number;
  height: number;
  borderRadius: number;

  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;

  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

export const Image = styled.Image<IImageProps>`
  width: ${props => (props.width && `${props.width}px`) || '50px'};
  height: ${props => (props.height && `${props.height}px`) || '50px'};

  border-radius: ${props =>
    (props.borderRadius && `${props.borderRadius}px`) || '50px'};

  padding-top: ${props =>
    (props.paddingTop && `${props.paddingTop}px`) || '0px'};
  padding-right: ${props =>
    (props.paddingRight && `${props.paddingRight}px`) || '0px'};
  padding-bottom: ${props =>
    (props.paddingBottom && `${props.paddingBottom}px`) || '0px'};
  padding-left: ${props =>
    (props.paddingLeft && `${props.paddingLeft}px`) || '0px'};

  margin-top: ${props => (props.marginTop && `${props.marginTop}px`) || '0px'};
  margin-right: ${props =>
    (props.marginRight && `${props.marginRight}px`) || '0px'};
  margin-bottom: ${props =>
    (props.marginBottom && `${props.marginBottom}px`) || '0px'};
  margin-left: ${props =>
    (props.marginLeft && `${props.marginLeft}px`) || '0px'};
`;
