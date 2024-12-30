import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const SvgOnekeyPrimeDark = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" accessibilityRole="image" {...props}>
    <Path d="M14 20a9 9 0 1 0 0-18v18Z" fill="url(#a)" />
    <Path d="M12 2H3l-3 9h4v11h8V2Z" fill="#fff" />
    <Defs>
      <LinearGradient
        id="a"
        x1={18.5}
        y1={2}
        x2={18.5}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#42FF00" />
        <Stop offset={1} stopColor="#00FFD1" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgOnekeyPrimeDark;
