import React, { useEffect, useState } from "react";
import { View, TextInput } from "react-native";
import {} from "react-native-web";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../lib/colors";
import Title from "../../components/Title";
import PlayerTitle from "../../components/PlayerTitle";
import { useNavigation } from "@react-navigation/native";

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

      <View
        style={{
          borderRadius: 40,
          backgroundColor: colors.bg,
          height: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 20,
          padding: 20,
        }}
      >
        <TextInput
          placeholder="Search a title..."
          placeholderTextColor="#A5A5A5"
          onChangeText={onChangeText}
          value={text}
        />
        <FontAwesome name="search" size={20} color="white" />
      </View>

      <PlayerTitle>Catalyst</PlayerTitle>
      <PlayerTitle>Chicken</PlayerTitle>
      <PlayerTitle>Foxy</PlayerTitle>
    </View>
  );
}
