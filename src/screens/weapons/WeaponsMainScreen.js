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
          title={<Title isHeader>WEAPONS</Title>}
          imageType="center"
        />
      </View>
    );
  } else {
    return (
      <View style={styles.notGirdWrapper}>
        <Title isHeader>WEAPONS</Title>
        <View style={styles.sliderWrapper}>
          <Slider items={weapons} mode="weapons" />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  notGirdWrapper: {
    height: "100%",
  },
  gridWrapper: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sliderWrapper: {
    height: "100%",
    width: "100%",
    flex: 1,
    transform: [{ translateY: -50 }],
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
