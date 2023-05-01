import { View, Text, Image } from "react-native";
import React from "react";
import Title from "../../components/Title";
import { colors } from "../../lib/colors";
import { FontAwesome } from "@expo/vector-icons";

export default function AgentsDetailScreen() {
  return (
    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
      <Title subtitle="AGENTS">GEKKO</Title>

      {/* agent details component */}

      <View
        style={{
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignContent: "center",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 15, height: 15, tintColor: colors.details }}
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
          style={{
            height: 500,
            position: "absolute",
            opacity: 0.1,
            top: 90,
            bottom: 0,
            left: 0,
            right: 0,
          }}
          source={{
            uri:
              "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/background.png",
          }}
        />
        <Image
          style={{ width: 400, height: 400 }}
          source={{
            uri:
              "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png",
          }}
        />
        <View
          style={{
            alignContent: "center",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 50,
            paddingVertical: 10,
            gap: 10,
          }}
        >
          <FontAwesome
            name="music"
            size={30}
            color={colors.details}
            style={{ marginBottom: 10 }}
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
                fontSize: 16,
                color: "white",
                fontFamily: "tungsten",
                textAlign: "center",
              }}
            >
              "Gekko the Angeleno leads...to regroup and go again."
            </Text>
          </View>
        </View>

        <View
          style={{
            alignContent: "center",
            flexDirection: "row",
            alignItems: "center",
            padding: 25,
          }}
        >
          <Image
            style={{ width: 30, height: 30, tintColor: colors.details }}
            source={{
              uri:
                "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
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
                fontSize: 12,
                color: colors.details,
                textAlign: "center",
              }}
            >
              Initiators challenge angles by setting up their team to enter
              contested ground and push defenders away.
            </Text>
          </View>
        </View>
      </View>

      {/* ability component */}

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
            when targeting a Spike site or planted Spike to have Wingman defuse
            or plant the Spike. To plant, Gekko must have the Spike in his
            inventory. When Wingman expires he reverts into a dormant globule
            INTERACT to reclaim the globule and gain another Wingman charge
            after a short cooldown.
          </Text>
        </View>
      </View>
    </View>
  );
}
