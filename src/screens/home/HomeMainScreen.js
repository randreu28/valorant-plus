import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { getAgents } from "../../api";
import Grid from "../../components/Grid";
import Title from "../../components/Title";
import { ScrollView } from "react-native";

export default function HomeMainScreen() {
  const [agents, setAgents] = useState(null);

  useEffect(() => {
    getAgents()
      .then(setAgents)
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView>
      <View style={{ height: "100%" }}>
        <View>
          <Title isHeader>FAVORITES</Title>
        </View>
        <Grid items={agents} horizontalScroll context="agents" />
        <Title isHeader>DAILY</Title>
        <Grid items={agents} horizontalScroll context="agents" />
      </View>
    </ScrollView>
  );
}
