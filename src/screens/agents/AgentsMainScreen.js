import { React, useState, useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { getAgents } from "../../api";
import { colors } from "../../lib/colors";
import Grid from "../../components/Grid";
import Title from "../../components/Title";
import GridButton from "../../components/GridButton";
import { LinearGradient } from "expo-linear-gradient";
import { state } from "../../state";
import { observer } from "mobx-react-lite";
import Slider from "../../components/Slider";

const AgentsMainScreen = ({ navigation }) => {

  const [agents, setAgents] = useState(null)

  useEffect(() => {
    getAgents()
      .then(setAgents)
      .catch((error) => console.error(error));
  }, []);

  if (!agents) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator color={colors.neutral} size="large"></ActivityIndicator>
      </View>
    );
  }

  return (
    <>
      {state.getView('agents') === 'grid'
        ? <View style={styles.gridWrapper}>
          <Grid items={agents} context="agents" title="AGENTS" />
        </View>
        : <View style={styles.sliderWrapper}>
          <Title isHeader>AGENTS</Title>
          <Slider items={agents} mode="agents" />
        </View>}
    </>
  );
}

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
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 99999,
    paddingBottom: 20,
  },
});

export default observer(AgentsMainScreen);