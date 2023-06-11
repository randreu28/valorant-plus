import React from "react";
import { StyleSheet, View } from "react-native";
import Error from "../../components/Error";
import Grid from "../../components/Grid";
import Loading from "../../components/Loading";
import { useValorantApi } from "../../lib/hooks";
import { state } from "../../state";
import { observer } from "mobx-react-lite";
import Slider from "../../components/Slider";
import Title from "../../components/Title";

const PlayerCardScreen = () => {
  const { data: tiers, error, isLoading } = useValorantApi("/playercards");

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (state.getView("playerCard") === "grid") {
    return (
      <View style={styles.gridWrapper}>
      <Title subtitle="PROFILE">PLAYER CARD</Title>
        {
          <Grid
            context="playerCard"
            items={tiers}
            imageBg={undefined}
            imageType={undefined}
            button={undefined}
            buttonType={undefined}
            columns={2}
          />
        }
      </View>
    );
  } else
    return (
      <View style={styles.gridWrapper}>
        <Title subtitle="PROFILE">PLAYER CARD</Title>
        {
          <Grid
            context="playerCard"
            items={tiers}
            imageBg={undefined}
            imageType={undefined}
            size="full-width"
            button={undefined}
            buttonType={undefined}
            columns={1}
          />
        }
      </View>
    );
};

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

export default observer(PlayerCardScreen);
