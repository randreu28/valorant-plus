import { View, ActivityIndicator, ScrollView, StyleSheet,Text } from "react-native";
import React from "react";
import Title from "../../components/Title";
import Ability from "../../components/Ability";
import AgentDetail from "../../components/AgentDetail";
import { useRoute } from '@react-navigation/native';

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
       
       <Text style={styles.abilitiesWrapper}>Abilities</Text>


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
  },
  abilitiesWrapper: {
    color: "#FF4654",
    textAlign: 'left',
    fontSize: 40,
    fontFamily: "tungsten",
  }
});