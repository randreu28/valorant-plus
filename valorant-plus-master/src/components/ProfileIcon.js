import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function ProfileIcon({ size, color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 34 34"
    >
      <Path
        fill={color}
        d="M26.224 9.663c0 5.334-4.326 9.661-9.661 9.661-5.336 0-9.662-4.327-9.662-9.661C6.901 4.326 11.227 0 16.563 0c5.335 0 9.661 4.326 9.661 9.663zm-2.206 9.91a12.335 12.335 0 01-7.455 2.512c-2.802 0-5.382-.946-7.463-2.515C3.48 22.045 0 29.75 0 33.125h33.125c0-3.344-3.588-11.05-9.107-13.552z"
      />
    </Svg>
  );
}
