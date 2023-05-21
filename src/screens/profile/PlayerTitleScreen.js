import React, { useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import {} from "react-native-web";
import PlayerTitle from "../../components/PlayerTitle";
import SearchBar from "../../components/SearchBar";
import Title from "../../components/Title";
import { colors } from "../../lib/colors";
import { useValorantApi } from "../../lib/hooks";

export default function PlayerTitleScreen() {
  const [text, onChangeText] = useState("");
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

      <SearchBar onChangeText={onChangeText} />

      <FlatList
        data={data.filter((item) => {
          if (text === "") {
            return true;
          } else {
            const titleText = String(item.titleText);
            return titleText.includes(text);
          }
        })}
        renderItem={({ item }) => (
          <PlayerTitle uuid={item.uuid}>{item.titleText}</PlayerTitle>
        )}
      />
    </View>
  );
}
