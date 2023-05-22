import React from "react";
import Title from "../../components/Title";
import { observer } from "mobx-react-lite";
import { View } from "react-native";
import PlayerCard from "../../components/PlayerCard";
import { state } from "../../state";

const MainScreen = () => {
  return (
    <>
      <Title isHeader>PROFILE</Title>
      <View style={{ flex: 1 }}>
        <PlayerCard
          playerCard="https://media.valorant-api.com/playercards/fc209787-414b-10d0-dcac-04832fc2c654/largeart.png"
          playerRank="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/11/largeicon.png"
          playerTitle="King"
          isEditable={state.isEditable()}
        />
      </View>
    </>
  );
};

export default observer(MainScreen);
