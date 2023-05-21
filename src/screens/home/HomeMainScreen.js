import { View, Text } from "react-native";
import Slider from "../../components/Slider";
import React, { useEffect, useState } from "react";
import { getIntroSlides } from "../../api";
import Title from "../../components/Title";
import Grid from "../../components/Grid";
import { getAgents } from "../../api";

export default function HomeMainScreen() {

  const [agents, setAgents] = useState(null)

  useEffect(() => {
    getAgents()
      .then(setAgents)
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Title isHeader>FAVORITES</Title>
      <Grid items={agents} horizontalScroll={true} />
      <Title isHeader>DAILY</Title>
      <Grid items={agents} horizontalScroll={true} />
    </View>
  );
}
