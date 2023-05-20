import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, Text, FlatList } from "react-native";
import {} from "react-native-web";
import PlayerTitle from "../../components/PlayerTitle";
import SearchBar from "../../components/SearchBar";
import Title from "../../components/Title";
import { useValorantApi } from "../../lib/hooks";
import { colors } from "../../lib/colors";

export default function PlayerTitleScreen() {
  const [text, onChangeText] = useState();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: null,
    });
  }, [navigation]);

  const { data, error, isLoading } = useValorantApi("/playertitles");

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator color={colors.neutral} size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          flex: 1,
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>{error}</Text>
      </View>
    );
  }

  return (
    <View>
      <Title subtitle="PROFILE">PLAYER TITLE</Title>

      <SearchBar />

      <FlatList
        data={data}
        renderItem={({ item }) => <PlayerTitle>{item.titleText}</PlayerTitle>}
      />
    </View>
  );
}
