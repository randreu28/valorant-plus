import * as React from "react"
import Svg, { Path } from "react-native-svg";
export default function DecorationWeaponLeft(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={136}
            height={616}
            fill="none"
            {...props}
        >
            <Path
                stroke="#FF4654"
                strokeWidth={5}
                d="M70 701.125v-153.5l63-62.5v-320.5L6.5 39.125-30 2.625"
            />
            <Path
                stroke="#22FFC5"
                strokeWidth={5}
                d="m-29.5 22.125 149.5 149.5v389l-65 59.5v96.5"
            />
        </Svg>
    )
}