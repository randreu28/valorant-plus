import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import PlayerCard from "../components/PlayerCard";

export default function ProfileMainScreen() {
  const { params } = useRoute();

  if (params === undefined) {
    throw Error("Invalid route params");
  }

  return (
    <>
      {/* TODO: Use Title component instead */}
      <Text
        style={{
          color: "white",
          marginTop: 20,
          textAlign: "center",
          fontSize: 50,
        }}
      >
        Profile
      </Text>

      <PlayerCard {...params} />
    </>
  );
}
