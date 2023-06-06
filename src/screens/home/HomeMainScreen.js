import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { getFavorites } from "../../api";
import { getDaily } from "../../api";
import Grid from "../../components/Grid";
import Title from "../../components/Title";
import { ScrollView, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { state } from "../../state";

const HomeMainScreen = () => {
  const [favorites, setFavorites] = useState(null);
  const [daily, setDaily] = useState(null);

  useEffect(() => {
    getFavorites()
      .then(setFavorites)
      .catch((error) => console.error(error));
  }, [
    state.getFavorite("agents"),
    state.getFavorite("maps"),
    state.getFavorite("weapons"),
  ]);

  useEffect(() => {
    getDaily()
      .then(setDaily)
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView>
      <View style={styles.screenWrapper}>
        <Title isHeader>FAVORITES</Title>
        <Grid items={favorites} horizontalScroll context="favorites" />
        <Title isHeader>DAILY</Title>
        <Grid items={daily} horizontalScroll context="daily" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    height: "100%",
    marginLeft: 15,
  },
});

export default observer(HomeMainScreen);
