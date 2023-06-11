import { observer } from "mobx-react-lite";
import { React } from "react";
import { StyleSheet, View } from "react-native";
import Error from "../../components/Error";
import Grid from "../../components/Grid";
import Loading from "../../components/Loading";
import Slider from "../../components/Slider";
import Title from "../../components/Title";
import { useAgents } from "../../lib/hooks";
import { state } from "../../state";

const AgentsMainScreen = () => {
  const { data: agents, error, isLoading } = useAgents();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      {state.getView("agents") === "grid" ? (
        <View style={styles.gridWrapper}>
          <Grid items={agents} context="agents" title={<Title isHeader>AGENTS</Title>} />
        </View>
      ) : (
        <View style={styles.sliderWrapper}>
          <Title isHeader>AGENTS</Title>

          <View style={styles.internalSliderWrapper}>
            <Slider items={agents} mode="agents" />
          </View>
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
  internalSliderWrapper: {
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
  },
});

export default observer(AgentsMainScreen);
