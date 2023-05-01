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
      <AgentDetail
        icon="https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png"
        rol="INITIATOR"
        quote="Gekko the Angeleno leads...to regroup and go again."
        inforol="Initiators challenge angles by setting up their team to enter
      contested ground and push defenders away."
        bg="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/background.png"
        agent="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png"
      />
      {/* ability component */}
      <Ability
        image="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability1/displayicon.png"
        title="Wingman"
        description="EQUIP Wingman. FIRE to send Wingman forward seeking enemies. Wingman
          unleashes a concussive blast toward the first enemy he sees ALT FIRE
          when targeting a Spike site or planted Spike to have Wingman defuse or
          plant the Spike. To plant, Gekko must have the Spike in his inventory.
          When Wingman expires he reverts into a dormant globule INTERACT to
          reclaim the globule and gain another Wingman charge after a short
          cooldown."
      />
    </View>
  );
}
