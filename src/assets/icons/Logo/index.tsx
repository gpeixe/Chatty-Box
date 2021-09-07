import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export function Logo(props: SvgProps) {
  return (
    <Svg width={90} height={83} fill="none" {...props}>
      <Path
        d="M90 17.077a2 2 0 00-2-2H23.429a2 2 0 00-2 2v50.471a2 2 0 002 2h36.203a2 2 0 011.58.775l8.702 11.233a2 2 0 003.347-.284l5.679-10.664a2 2 0 011.765-1.06H88a2 2 0 002-2V17.077z"
        fill="#A480FA"
      />
      <Path
        d="M0 3a3 3 0 013-3h65.429a3 3 0 013 3v49.91a3 3 0 01-3 3H32.384a3 3 0 00-2.627 1.552l-8.288 15.034c-.806 1.462-2.943 1.352-3.594-.186l-6.167-14.57a3 3 0 00-2.763-1.83H3a3 3 0 01-3-3V3z"
        fill="#8258E6"
      />
      <Path
        d="M35.474 32.316c-.133 1.836-.813 3.282-2.04 4.336-1.218 1.055-2.827 1.582-4.827 1.582-2.188 0-3.91-.734-5.168-2.203-1.25-1.476-1.875-3.5-1.875-6.07v-1.043c0-1.64.289-3.086.867-4.336.578-1.25 1.402-2.207 2.473-2.871 1.078-.672 2.328-1.008 3.75-1.008 1.968 0 3.554.527 4.757 1.582 1.203 1.055 1.899 2.535 2.086 4.442h-3.515c-.086-1.102-.395-1.899-.926-2.391-.524-.5-1.324-.75-2.402-.75-1.172 0-2.051.422-2.637 1.266-.578.835-.875 2.136-.89 3.902v1.289c0 1.844.277 3.191.831 4.043.563.852 1.446 1.277 2.649 1.277 1.085 0 1.894-.246 2.425-.738.54-.5.848-1.27.926-2.309h3.516zM37.782 38V20.937h5.977c2.07 0 3.64.399 4.71 1.196 1.071.789 1.606 1.949 1.606 3.48 0 .836-.215 1.575-.644 2.215-.43.633-1.027 1.098-1.793 1.395.875.218 1.562.66 2.062 1.324.508.664.762 1.476.762 2.437 0 1.641-.523 2.883-1.57 3.727-1.047.844-2.54 1.273-4.477 1.289h-6.633zm3.516-7.43v4.606h3.012c.828 0 1.472-.196 1.933-.586.47-.399.703-.946.703-1.64 0-1.563-.808-2.356-2.425-2.38h-3.223zm0-2.484H43.9c1.773-.031 2.66-.738 2.66-2.121 0-.774-.227-1.328-.68-1.664-.445-.344-1.152-.516-2.121-.516h-2.461v4.3z"
        fill="#fff"
      />
    </Svg>
  );
}
