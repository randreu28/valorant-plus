import { View, ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Title from "../../components/Title";
import Ability from "../../components/Ability";
import AgentDetail from "../../components/AgentDetail";
import { useRoute } from '@react-navigation/native';
import { colors } from "../../lib/colors";

export default function AgentsDetailScreen() {

  const route = useRoute();
  const { item } = route.params;

  return (
    <ScrollView>
      <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
        <Title subtitle="AGENTS">{item.displayName}</Title>
        {/* agent details component */}
        <AgentDetail
          icon={item.role.displayIcon}
          rol={item.role.displayName}
          quote={item.description}
          inforol={item.role.description}
          bg={item.background}
          agent={item.fullPortrait}
          soundUrl={item.voiceLine.mediaList[0]?.wave}
        />

        {/* ability component */}
        <View style={styles.abilityWrapper}>
          {item.abilities.map((ability, index) => (
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