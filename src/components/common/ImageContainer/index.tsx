import React from 'react';
import {ImageProps} from 'react-native';

import * as Styled from './styles';

interface ImageContainerProps extends Styled.IImageProps {
  source: string | ImageProps;
  resizeMode?: 'center' | 'cover' | 'contain' | 'stretch';
}

export const ImageContainer: React.FC<ImageContainerProps> = ({
  source,
  width,
  height,
  resizeMode,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  borderRadius,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
}) => {
  return (
    <Styled.Image
      source={typeof source === 'string' ? {uri: source} : source}
      width={width}
      borderRadius={borderRadius}
      height={height}
      resizeMode={resizeMode}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
    />
  );
};
