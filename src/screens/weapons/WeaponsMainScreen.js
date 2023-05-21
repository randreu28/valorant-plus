import { React, useState, useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { getAgents, getWeapons } from "../../api";
import { colors } from "../../lib/colors";
import Grid from "../../components/Grid";
import Title from "../../components/Title";
import GridButton from "../../components/GridButton";
import { LinearGradient } from "expo-linear-gradient";
import { state } from "../../state";
import { observer } from "mobx-react-lite";
import Slider from "../../components/Slider";

const WeaponsMainScreen = ({ navigation }) => {
  const [weapons, setWeapons] = useState(null);

  useEffect(() => {
    getWeapons()
      .then(setWeapons)
      .catch((error) => console.error(error));
  }, []);

  if (!weapons) {
    return (
      <View>
        <ActivityIndicator
          color={colors.neutral}
          size="large"
        ></ActivityIndicator>
      </View>
    );
  }

  return (
    <>
      {state.getView("weapons") === "grid" ? (
        <View style={styles.gridWrapper}>
          <Grid
            items={weapons}
            context="weapons"
            title="WEAPONS"
            imageType="center"
          />
        </View>
      ) : (
        <View style={styles.sliderWrapper}>
          <Title isHeader>WEAPONS</Title>
          <Slider items={weapons} mode="weapons" />
        </View>
      )}
    </>
  );
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
