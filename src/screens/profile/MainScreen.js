import React from "react";
import Title from "../../components/Title";

import { ScrollView, View } from "react-native";
import PlayerCard from "../../components/PlayerCard";
import { state } from "../../state";
import { observer } from "mobx-react-lite";

const MainScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Title isHeader>PROFILE</Title>
      <View style={{ height: 700 }}>
        <PlayerCard
          playerCard="https://media.valorant-api.com/playercards/fc209787-414b-10d0-dcac-04832fc2c654/largeart.png"
          playerRank="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/11/largeicon.png"
          playerTitle="King"
          isEditable={state.isEditable()}
        />
      </View>
    </ScrollView>
  );
}

export default observer(MainScreen);