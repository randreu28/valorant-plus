import { React, useState, useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { getAgents } from "../../api";
import { colors } from "../../lib/colors";
import Grid from "../../components/Grid";
import Title from "../../components/Title";
import GridButton from "../../components/GridButton";
import { LinearGradient } from "expo-linear-gradient";

export default function AgentsMainScreen({ navigation }) {

  const [agents, setAgents] = useState(null)

  useEffect(() => {
    getAgents()
      .then(setAgents)
      .catch((error) => console.error(error));
  }, []);

  if (!agents) {
    return (
      <View>
        <ActivityIndicator color={colors.neutral} size="large"></ActivityIndicator>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Grid items={agents} title="AGENTS" />
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
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