import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} width={106} height={635}>
    <Path
      stroke="#FF4654"
      strokeWidth={2}
      d="M91 .385v41l13.5 12v447.5l-53.5 70v50.5"
    />
    <Path stroke="#22FFC5" strokeWidth={2} d="M98 3.385v530l-58 76.5v40.5" />
  </Svg>
)
export default SvgComponent
