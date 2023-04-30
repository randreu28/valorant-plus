import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function HomeIcon({ size, color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 42 34"
    >
      <Path
        fill={color}
        d="M41.164 15.937V.257c0-.242-.302-.343-.464-.161L23.57 21.499c-.142.162-.02.424.201.424h12.375c.342 0 .645-.162.846-.424l3.91-4.877c.161-.181.262-.423.262-.685zm-40.066.705l12.858 16.083c.202.262.524.403.867.403h12.374c.222 0 .343-.242.202-.403L1.299.115C1.14-.064.836.036.836.278v15.68c.02.242.1.484.262.685z"
      />
    </Svg>
  );
}
