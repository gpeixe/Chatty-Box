import * as React from 'react';
import Svg, {SvgProps, Path, Defs, Pattern, Use, Image} from 'react-native-svg';

export function SelectPhoto(props: SvgProps) {
  return (
    <Svg width={87} height={83} fill="none" {...props}>
      <Path
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        d="M67.5 10.5h18M76.5 19.5v-18"
      />
      <Path fill="url(#prefix__pattern0)" d="M0 3h79v80H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use
            xlinkHref="#prefix__image0"
            transform="matrix(.01 0 0 .00988 0 .006)"
          />
        </Pattern>
        <Image
          id="prefix__image0"
          width={100}
          height={100}
          xlinkHref={
            'data:image/png;base64,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'
          }
        />
      </Defs>
    </Svg>
  );
}
