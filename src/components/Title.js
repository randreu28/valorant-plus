import React from "react";
import { Text, View, StyleSheet } from "react-native";
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
  if (isHeader) {
    return <Header>{children}</Header>;
  }

  return (
    <View style={styles.titleWrapper}>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}

      <Text
        style={{
          fontFamily: !subtitle && !isHeader ? "valorant" : "tungsten",
          color:
            subtitle || (!subtitle && !isHeader) ? "white" : colors.highlights,
          ...styles.baseText,
        }}
      >
        {children}
      </Text>
    </View>
  );
}

function Header({ children }) {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.header_back}>{children}</Text>

      <Text style={styles.header_top}>{children}</Text>
    </View>
  );
}

const fontSize = 70;

const styles = StyleSheet.create({
  titleWrapper: {
    marginTop: 25,
    marginBottom: 20,
  },
  headerWrapper: {
    width: "100%",
  },
  baseText: {
    textAlign: "center",
    fontSize: 50,
    textTransform: "uppercase",
  },
  subtitle: {
    color: colors.highlights,
    textAlign: "center",
    fontSize: 25,
    fontFamily: "tungsten",
    textTransform: "uppercase",
  },
  header_back: {
    color: colors.darkBase,
    marginTop: 25,
    marginBottom: 20,
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
  },
  header_top: {
    fontFamily: "tungsten",
    color: colors.highlights,
    marginTop: 25,
    marginBottom: 20,
    textAlign: "center",
    fontSize: fontSize,
    zIndex: 1,
  },
});
