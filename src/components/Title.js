import React from "react";
import { Text, View } from "react-native";
import { colors } from "../lib/colors";

// GENIAL: El uso de tipos para "developer experience"!
/**
 *
 *@param {{
 *  children: React.ReactNode,
 *  isHeader?: boolean
 *  subtitle?: React.ReactNode
 * }} Props
 */
export default function Title({ children, subtitle, isHeader = false }) {
  // SUGERENCIA: Usar llaves aquí, si no el 'if' pasa desapercibido a la vista.
  if (isHeader) return <Header>{children}</Header>;

  // FIXME: Usar un StyleSheet en estos estilos!
  return (
    <View style={{marginTop:25, marginBottom:20}}>
      {subtitle && (
        <Text
          style={{
            color: colors.highlights,
            textAlign: "center",
            fontSize: 25,
            fontFamily: "tungsten",
            textTransform: "uppercase",
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
          textTransform: "uppercase",
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
    <View style={{ width: "100%"}}>
      <Text
        style={{
          color: colors.darkBase,marginTop:25, marginBottom:20,
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
        }}
      >
        {children}
      </Text>

      <Text
        style={{
          fontFamily: "tungsten",
          color: colors.highlights,
          marginTop:25, marginBottom:20,
          textAlign: "center",
          fontSize: fontSize,
          zIndex: 1,
        }}
      >
        {children}
      </Text>
    </View>
  );
}
