import React from "react";
import { StyleSheet, View } from "react-native";
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
    <View style={styles.gridWrapper}>
      <Title isHeader>RANKS</Title>
      <Grid
        items={ranks[4].tiers}
        context="rank"
        imageType="center"
        horizontalScroll
        buttonType="favorite"
      />
      <Title isHeader>RANKS</Title>
      <Grid
        items={ranks[4].tiers}
        context="rank"
        imageType="center"
        horizontalScroll
      />
    </View>
  );
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
