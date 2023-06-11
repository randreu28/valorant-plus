import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Subtitle({children, style}) {
  return (
      <Text style={{...styles.abilitiesWrapper, ...style}}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    abilitiesWrapper: {
      color: "#FF4654",
      textAlign: "left",
      width: "100%",
      paddingHorizontal: 30,
      fontSize: 40,
      fontFamily: "tungsten",
      textTransform: 'capitalize'
    },
  });