import { View, Text } from "react-native";
import Slider from "../../components/Slider";
import React, { useEffect, useState } from "react";
import { getIntroSlides } from "../../api";

export default function HomeMainScreen() {
 
  return (
    <View >
        <Text>Title (header)</Text>
        <Title isHeader>PAGE TITLE</Title>
      </View>
  );
}
