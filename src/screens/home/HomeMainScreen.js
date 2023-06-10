import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { getFavorites } from "../../api";
import { getDaily } from "../../api";
import Grid from "../../components/Grid";
import Title from "../../components/Title";
import { ScrollView, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { state } from "../../state";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const HomeMainScreen = () => {
  const [favorites, setFavorites] = useState(null);
  const [daily, setDaily] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFavorites().then(setFavorites).catch(setError);
  }, [
    state.getFavorite("agents"),
    state.getFavorite("maps"),
    state.getFavorite("weapons"),
    state.getFavorite("playerCard"),
    state.getFavorite("rank"),
  ]);

  useEffect(() => {
    getDaily().then(setDaily).catch(setError);
  }, []);

  if (error) {
    return <Error />;
  }

  if (!favorites || !daily) {
    return <Loading />;
  }

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
