import { View, Text, Image } from "react-native";
import React from "react";
import { colors } from "../lib/colors";

export default function Ability({image, title, description}) {


  return (
    <View
      style={{
        flex: 1,
        alignContent: "flex-start",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: 10,
      }}
    >
      <Image
        style={{
          width: 50,
          height: 50,
          color: colors.details,
          marginTop: 10,
        }}
        source={{
          uri:
            image,
        }}
      />
      <View
        style={{
          flex: 1,
          alignContent: "flex-start",
          flexDirection: "column",
          alignItems: "flex-start",

          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            color: colors.highlights,
            fontFamily: "tungsten",
            textAlign: "left",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "white",
            textAlign: "justify",
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
}
