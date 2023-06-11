import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Error from "../../components/Error";
import Grid from "../../components/Grid";
import Loading from "../../components/Loading";
import Title from "../../components/Title";
import { useValorantApi } from "../../lib/hooks";
import Subtitle from "../../components/Subtitle";

export default function RankScreen() {
  const {
    data: _ranks,
    error,
    isLoading,
  } = useValorantApi("/competitivetiers");

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  /**
   *  @type array
   *  @description A sanitized list of ranks
   **/
  const ranks = _ranks[4].tiers.slice(3, _ranks[4].tiers.length);

  return (
    <ScrollView>
      <Title subtitle="PROFILE">RANKS</Title>

      {ranks.map((rank, index) => {
        /* Ranks are grouped by trios */
        if (index % 3 !== 0) {
          return;
        }

        return (
          <View key={index} style={styles.gridWrapper}>
            <Subtitle>{rank.divisionName}</Subtitle>
            <Grid
              items={ranks.slice(index, index + 3)}
              context="rank"
              horizontalScroll
              buttonType="favorite"
            />
          </View>
        );
      })}
    </ScrollView>
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
    paddingVertical: 20,
  },
  sliderWrapper: {
    height: "100%",
  },
  abilitiesWrapper: {
    color: "#FF4654",
    textAlign: "left",
    width: "100%",
    paddingHorizontal: 30,
    fontSize: 40,
    fontFamily: "tungsten",
  },
});
