import React, { useEffect, useState } from "react";
import { View, TextInput } from "react-native";
import {} from "react-native-web";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../lib/colors";
import Title from "../../components/Title";
import PlayerTitle from "../../components/PlayerTitle";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../../components/SearchBar";

export default function PlayerTitleScreen() {
  const [text, onChangeText] = useState();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: null,
    });
  }, [navigation]);
  return (
    <View style={{}}>
      <Title subtitle="PROFILE">PLAYER TITLE</Title>

      <SearchBar />

      <PlayerTitle>Catalyst</PlayerTitle>
      <PlayerTitle>Chicken</PlayerTitle>
      <PlayerTitle>Foxy</PlayerTitle>
    </View>
  );
}
