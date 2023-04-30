import * as React from "react"
import Svg, { Path } from "react-native-svg";
export default function ArrowLeftIcon({color}) {
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
        d="M27.667 42 9 23.676 27.667 5M33 27.905l-4.267-4.229L33 19.448"
      />
    </Svg>
  )
}