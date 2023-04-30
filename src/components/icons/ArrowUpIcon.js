import * as React from "react"
import Svg, { Path } from "react-native-svg";
export default function ArrowUpIcon({color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={66}
      height={49}
      fill="none"
    >
      <Path
        stroke={color}
        strokeWidth={12}
        d="m5 36.676 27.733-28 28.267 28m-34.667 8 6.4-6.4 6.4 6.4"
      />
    </Svg>
  )
}