import { useRoute } from "@react-navigation/native";
import React from "react";
import Title from "../../components/Title";

import PlayerCard from "../../components/PlayerCard";

export default function MainScreen() {
  const { params } = useRoute();

  if (params === undefined) {
    throw Error("Invalid route params");
  }

  return (
    <>
      <Title>PROFILE</Title>
      <PlayerCard {...params} />
    </>
  );
}
