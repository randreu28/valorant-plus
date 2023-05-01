import { View, Text, Image } from "react-native";
import React from "react";
import Title from "../../components/Title";
import Ability from "../../components/Ability";
import AgentDetail from "../../components/AgentDetail";

export default function AgentsDetailScreen() {
  return (
    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
      <Title subtitle="AGENTS">GEKKO</Title>
      {/* agent details component */}
      <AgentDetail />
      {/* ability component */}
      <Ability />
    </View>
  );
}
