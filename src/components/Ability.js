import { View, Text, Image } from "react-native";
import React from "react";
import { colors } from "../lib/colors";

export default function Ability() {
  return (
    <View
      style={{
        flex: 1,
        alignContent: "flex-start",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: 10,
      }}
    >
      <Image
        style={{
          width: 50,
          height: 50,
          color: colors.details,
          marginTop: 10,
        }}
        source={{
          uri:
            "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability1/displayicon.png",
        }}
      />
      <View
        style={{
          flex: 1,
          alignContent: "flex-start",
          flexDirection: "column",
          alignItems: "flex-start",

          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            color: colors.highlights,
            fontFamily: "tungsten",
            textAlign: "left",
          }}
        >
          Wingman
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "white",
            textAlign: "justify",
          }}
        >
          EQUIP Wingman. FIRE to send Wingman forward seeking enemies. Wingman
          unleashes a concussive blast toward the first enemy he sees ALT FIRE
          when targeting a Spike site or planted Spike to have Wingman defuse or
          plant the Spike. To plant, Gekko must have the Spike in his inventory.
          When Wingman expires he reverts into a dormant globule INTERACT to
          reclaim the globule and gain another Wingman charge after a short
          cooldown.
        </Text>
      </View>
    </View>
  );
}
