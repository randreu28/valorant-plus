import React from "react";
import { observer } from "mobx-react-lite";
import { StyleSheet, View } from "react-native";
import Error from "../../components/Error";
import Grid from "../../components/Grid";
import Loading from "../../components/Loading";
import Slider from "../../components/Slider";
import Title from "../../components/Title";
import { state } from "../../state";

import { useWeapons } from "../../lib/hooks";

const WeaponsMainScreen = () => {
  const { data: weapons, error, isLoading } = useWeapons();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (state.getView("weapons") === "grid") {
    return (
      <View style={styles.gridWrapper}>
        <Grid
          items={weapons}
          context="weapons"
          title="WEAPONS"
          imageType="center"
        />
      </View>
    );
  } else {
    return (
      <View style={styles.sliderWrapper}>
          <Title isHeader>WEAPONS</Title>
        <Slider items={weapons} mode="weapons" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  gridWrapper: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sliderWrapper: {
    height: "100%",
  },
  titleWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 99999,
    paddingBottom: 20,
  },
});

export default observer(WeaponsMainScreen);
