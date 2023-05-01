import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const BulletActiveIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <Circle cx={8.5} cy={8.5} r={5.5} fill="#22FFC5" />
    <Path
      fill="#22FFC5"
      fillRule="evenodd"
      d="M8.5 17a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0-1.214a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default BulletActiveIcon
