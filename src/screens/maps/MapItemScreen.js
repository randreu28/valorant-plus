import { useRoute } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";
import Title from "../../components/Title";
import { colors } from "../../lib/colors";

export default function MapItemScreen() {
  const { params } = useRoute();

  return (
    <View style={{ position: "relative", flex: 1 }}>
      <Image
        source={{
          // @ts-ignore
          uri: params["splashImage"],
        }}
        style={{ flex: 1, height: "100%", opacity: 0.5 }}
      />

      <View
        style={{
          position: "absolute",
          zIndex: 1.5,
          flex: 1,
          height: "100%",
          width: "100%",
          backgroundColor: colors.base,
          opacity: 0.5,
        }}
      />

      <View
        style={{
          position: "absolute",
          zIndex: 2,
          flex: 1,
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 100,
        }}
      >
        <Title subtitle="MAPS">ASCENT</Title>
        <Image
          source={{
            // @ts-ignore
            uri: params["displayIcon"],
          }}
          style={{
            width: "95%",
            height: "95%",
            margin: 20,
            zIndex: 5,
            resizeMode: "contain",
          }}
        />
      </View>
    </View>
  );
}
