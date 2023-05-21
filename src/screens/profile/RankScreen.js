import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import Error from "../../components/Error";
import Grid from "../../components/Grid";
import Loading from "../../components/Loading";
import Slider from "../../components/Slider";
import Title from "../../components/Title";
import { useValorantApi } from "../../lib/hooks";
import { state } from "../../state";

export default function RankScreen() {
  const { data: ranks, error, isLoading } = useValorantApi("/competitivetiers");

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View>
      <FlatList
        data={ranks[4].tiers}
        renderItem={({ item }) => (
          <Text style={{ color: "white", fontSize: 30 }}>{item.tierName}</Text>
        )}
      />
    </View>
  );

  /*  if (state.getView("playerRank") === "grid") {
    return (
      <View style={styles.gridWrapper}>
        <Grid
          items={ranks[3]}
          context="playerRank"
          title="RANKS"
          imageType="center"
        />
      </View>
    );
  } else {
    return (
      <View style={styles.sliderWrapper}>
        <Title subtitle="PROFILE">RANKS</Title>
        <Slider items={ranks[3]} mode="weapons" />
      </View>
    );
  } */
}

const styles = StyleSheet.create({
  mapsView: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  gridWrapper: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sliderWrapper: {
    height: "100%",
  },
});
