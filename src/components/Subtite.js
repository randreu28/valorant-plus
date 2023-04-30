import React from "react";
import { Text } from "react-native";
import { colors } from "../lib/colors";

export default function Subtite({ children }) {
  return (
    <Text
      style={{
        fontFamily: "tungsten",
        color: colors.highlights,
        marginTop: 20,
        textAlign: "center",
        fontSize: 50,
      }}
    >
      {children}
    </Text>
  );
}
