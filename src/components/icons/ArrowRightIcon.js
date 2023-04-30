import * as React from "react"
import Svg, { Path } from "react-native-svg";
export default function ArrowRightIcon({color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={38}
      height={47}
      fill="none"
    >
      <Path
        stroke={color}
        strokeWidth={12}
        d="M10.333 5 29 23.324 10.333 42M5 19.095l4.267 4.229L5 27.552"
      />
    </Svg>
  )
}
