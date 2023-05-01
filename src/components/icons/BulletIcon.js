import * as React from "react"
import Svg, { Circle } from "react-native-svg"
const BulletIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <Circle cx={8.5} cy={8.5} r={5.5} fill="#fff" />
  </Svg>
)
export default BulletIcon
