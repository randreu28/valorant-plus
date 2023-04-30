import { View, Text, Image } from "react-native";
import React from "react";
import Title from "../../components/Title";
import { colors } from "../../lib/colors";
import { FontAwesome } from "@expo/vector-icons";


export default function AgentsDetailScreen() {
  return (
    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
      <Title subtitle="AGENTS">GEKKO</Title>
      <View
        style={{
          alignContent: "center",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 15, height: 15, color: colors.details }}
          source={{
            uri:
              "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: colors.details,
            fontFamily: "tungsten",
            textAlign: "center",
          }}
        >
          INITIATOR
        </Text>
      </View>
      <Image
        style={{ width: 400, height: 400, color: colors.details }}
        source={{
          uri:
            "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png",
        }}
      />
      <View
        style={{
          alignContent: "center",
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
          margin:20
        }}
      >
        <FontAwesome name="music" size={30} color={colors.details} />
        <Text
          style={{
            fontSize: 18,
            color: "white",
            fontFamily: "tungsten",
            textAlign: "center",
            padding:10
          }}
        >
          "Gekko the Angeleno leads...to regroup and go again."
        </Text>
      </View>
      <View
        style={{
            flex:1,
          alignContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 30, height: 30, color: colors.details }}
          source={{
            uri:
              "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
          }}
        />
        <Text
          style={{
            fontSize: 12,
            color: colors.details,
            textAlign: "center",
            padding:10
          }}
        >
          Initiators challenge angles by setting up their team to enter contested ground and push defenders away.
        </Text>
      </View>
    </View>
  );
}
