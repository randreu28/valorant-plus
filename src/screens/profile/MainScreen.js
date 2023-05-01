import { useRoute } from "@react-navigation/native";
import React from "react";
import Title from "../../components/Title";

import PlayerCard from "../../components/PlayerCard";
import { ScrollView, View } from "react-native";

export default function MainScreen() {
  const { params } = useRoute();

  if (params === undefined) {
    throw Error("Invalid route params");
  }

  return (
    <ScrollView>
      <Title isHeader>PROFILE</Title>
      <View style={{ height: 700 }}>
        <PlayerCard {...params} />
      </View>

      <View style={{ height: 700 }}>
        <PlayerCard
          isEditable
          playerCard="https://media.valorant-api.com/playercards/fc209787-414b-10d0-dcac-04832fc2c654/largeart.png"
          playerRank="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/11/largeicon.png"
          playerTitle="King"
        />
      </View>

      <View style={{ height: 700 }}>
        <PlayerCard isEditable />
      </View>
    </ScrollView>
  );
}
