import React from "react";
import { Image, View } from "react-native";
import Title from "../../components/Title";
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
          gap: 20,
        }}
      >
        <Title subtitle="PROFILE">BIRD CARD</Title>

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
