import { View, ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Title from "../../components/Title";
import Ability from "../../components/Ability";
import AgentDetail from "../../components/AgentDetail";
import { useRoute } from '@react-navigation/native';
import { getAgents } from "../../api";
import { useState, useEffect } from "react";
import { colors } from "../../lib/colors";

export default function AgentsDetailScreen() {

  const route = useRoute();
  const { uuid } = route.params;

  const [agent, setAgent] = useState(null)

  useEffect(() => {
    getAgents(uuid)
      .then(setAgent)
      .catch((error) => console.error(error));
  }, [uuid]);

  if (!agent) {
    return (
      <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
        <ActivityIndicator color={colors.neutral} size="large"></ActivityIndicator>
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
        <Title subtitle="AGENTS">{agent.displayName}</Title>
        {/* agent details component */}
        <AgentDetail
          icon={agent.role.displayIcon}
          rol={agent.role.displayName}
          quote={agent.description}
          inforol={agent.role.description}
          bg={agent.background}
          agent={agent.fullPortrait}
        />

        {/* ability component */}
        <View style={styles.abilityWrapper}>
          {agent.abilities.map((ability, index) => (
            <Ability
              key={index}
              image={ability.displayIcon}
              title={ability.displayName}
              description={ability.description}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  abilityWrapper: {
    flex: 1,
    alignItems: "left",
  },
});