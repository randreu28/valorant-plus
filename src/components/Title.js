import React from "react";
import { Text, View } from "react-native";
import { colors } from "../lib/colors";

const fontSize = 50;

export default function Title({ children }) {
  return (
    <View>
      <Text
        style={{
          position: "absolute",
          width: "100%",
          fontFamily: "tungsten",
          color: "white",
          marginTop: 20,
          textAlign: "center",
          opacity: 0.2,
          fontSize: fontSize * 1.5,
          transform: [{ translateY: -(fontSize * 1.5) / 5 }],
        }}
      >
        {children}
      </Text>

      <Text
        style={{
          fontFamily: "tungsten",
          color: colors.highlights,
          marginTop: 20,
          textAlign: "center",
          fontSize: fontSize,
        }}
      >
        {children}
      </Text>
    </View>
  );
}
