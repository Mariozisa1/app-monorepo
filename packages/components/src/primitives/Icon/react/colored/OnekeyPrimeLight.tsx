import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const SvgOnekeyPrimeLight = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" accessibilityRole="image" {...props}>
    <Path d="M14 20a9 9 0 1 0 0-18v18Z" fill="url(#a)" />
    <Path
      d="m1.387 10 2.334-7H11v18H5V10H1.387Z"
      fill="#000"
      stroke="#000"
      strokeWidth={2}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={18.5}
        y1={2}
        x2={18.5}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3ADE00" />
        <Stop offset={1} stopColor="#00E19D" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgOnekeyPrimeLight;
