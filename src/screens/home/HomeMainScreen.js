import { View, Text } from "react-native";
import Slider from "../../components/Slider";
import React, { useEffect, useState } from "react";
import { getIntroSlides } from "../../api";
import Title from "../../components/Title";
import Grid from "../../components/Grid";

export default function HomeMainScreen() {
  return (
    <View>
      <Title isHeader>FAVORITES</Title>
      
      <Title isHeader>DAILY</Title>
    </View>
  );
}
