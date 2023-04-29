import React from "react";
import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { colors } from "../../lib/colors";

export default function PlayerCardScreen() {
  const { params } = useRoute();

  if (params === undefined) {
    throw Error("Invalid route params");
  }

  return (
    <>
      <View
        style={{
          flex: 1,
          borderRadius: 20,
          height: "100%",
          padding: 20,
          backgroundColor: colors.base,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 50,
            marginVertical: 10,
          }}
        >
          {params["title"]}
        </Text>
        <Image
          source={{ uri: params["url"] }}
          style={{
            flex: 1,
            borderRadius: 20,
            height: "100%",
            padding: 20,
          }}
        />
      </View>
    </>
  );
}
