import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} width={104} height={635}>
    <Path
      stroke="#FF4654"
      strokeWidth={2}
      d="M14.5.385v41l-13.5 12v447.5l53.5 70v50.5"
    />
    <Path stroke="#22FFC5" strokeWidth={2} d="M7.5 3.385v530l58 76.5v40.5" />
  </Svg>
)
export default SvgComponent
