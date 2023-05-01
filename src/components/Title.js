import React from "react";
import { Text, View } from "react-native";
import { colors } from "../lib/colors";
/**
 *
 *@param {{
 *  children: React.ReactNode,
 *  isHeader?: boolean
 *  subtitle?: React.ReactNode
 * }} Props
 */
export default function Title({ children, subtitle, isHeader = false }) {
  if (isHeader) return <Header>{children}</Header>;

  return (
    <View style={{ marginTop: 20 }}>
      {subtitle && (
        <Text
          style={{
            color: colors.highlights,
            textAlign: "center",
            fontSize: 25,
            fontFamily: "tungsten",
          }}
        >
          {subtitle}
        </Text>
      )}

      <Text
        style={{
          fontFamily: !subtitle && !isHeader ? "valorant" : "tungsten",
          color:
            subtitle || (!subtitle && !isHeader) ? "white" : colors.highlights,

          textAlign: "center",
          fontSize: 50,
        }}
      >
        {children}
      </Text>
    </View>
  );
}

const fontSize = 50;

function Header({ children }) {
  return (
    <View>
      <Text
        style={{
          color: colors.base,
          marginTop: 20,
          width: "100%",
          fontFamily: "tungsten",
          textAlign: "center",
          position: "absolute",
          fontSize: fontSize * 1.5,
          transform: [{ translateY: -(fontSize * 1.5) / 5 }],
          textShadowColor: colors.highlights,
          textShadowOffset: {
            height: 0,
            width: 0,
          },
          textShadowRadius: 5,

          /* position: "absolute",
          width: "100%",
          fontFamily: "tungsten",
          color: "white",
          marginTop: 20,
          textAlign: "center",
          opacity: 0.2,
          fontSize: fontSize * 1.5,
          transform: [{ translateY: -(fontSize * 1.5) / 5 }], */
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
