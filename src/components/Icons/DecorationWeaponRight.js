import * as React from "react"
import Svg, { Path } from "react-native-svg";
export default function DecorationWeaponRight(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={144}
            height={628}
            fill="none"
            {...props}
        >
            <Path
                stroke="#FF4654"
                strokeWidth={5}
                d="m169.5 2.125-167 167v320.5l63 62.5v153.5"
            />
            <Path
                stroke="#22FFC5"
                strokeWidth={5}
                d="m166.5 25.625-151 151v389l65 59.5v96.5"
            />
        </Svg>
    )
}
