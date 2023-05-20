import React from "react";
import { Image, Text, View } from "react-native";
import { colors } from "../../lib/colors";

export default function PlayerCardScreen() {
  return (
    <>
      <View
        style={{
          flex: 1,
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
          Bird card
        </Text>
        <Image
          source={{
            uri: "https://media.valorant-api.com/playercards/fc209787-414b-10d0-dcac-04832fc2c654/largeart.png",
          }}
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
