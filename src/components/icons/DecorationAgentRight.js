import * as React from "react"
import Svg, { Path } from "react-native-svg";

export default function DecorationAgentRight(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={107}
      height={651}
      fill="none"
      {...props}
    >
      <Path
        stroke="#FF4654"
        strokeWidth={2}
        d="M92.5.896v41l13.5 12v447.5l-73.5 70v50.5"
      />
      <Path stroke="#22FFC5" strokeWidth={2} d="M99.5 3.896v510l-98 93.5v43.5" />
    </Svg>
  )
}
