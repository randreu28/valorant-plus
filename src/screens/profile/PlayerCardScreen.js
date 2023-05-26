import React from "react";
import { StyleSheet, View } from "react-native";
import Error from "../../components/Error";
import Grid from "../../components/Grid";
import Loading from "../../components/Loading";
import { useValorantApi } from "../../lib/hooks";
import { state } from "../../state";

export default function PlayerCardScreen() {
  const { data: tiers, error, isLoading } = useValorantApi("/competitivetiers");

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (state.getView("playerCard") === "grid") {
    return (
      <View style={styles.gridWrapper}>
        <Grid
          items={tiers}
          // @ts-ignore
          horizontalScroll
          context="agents"
        />
      </View>
    );
  } else
    return (
      <View style={styles.gridWrapper}>
        <Grid
          // @ts-ignore
          context="playerCard"
          items={tiers}
          title="PLAYER CARDS"
          listViewIcon={true}
          size="full-width"
          columns={1}
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
