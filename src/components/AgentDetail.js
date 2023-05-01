import { View, Text, Image } from "react-native";
import React from "react";
import { colors } from "../lib/colors";
import { FontAwesome } from "@expo/vector-icons";

export default function AgentDetail({ icon, rol, quote, inforol, bg, agent }) {
  return (
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
            uri: icon,
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
          {rol}
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
          uri: bg,
        }}
      />
      <Image
        style={{ width: 400, height: 400 }}
        source={{
          uri: agent,
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
            {quote}
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
            uri: icon,
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
            {inforol}
          </Text>
        </View>
      </View>
    </View>
  );
}
