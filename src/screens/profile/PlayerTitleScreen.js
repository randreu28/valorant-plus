import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import {} from "react-native-web";
import Loading from "../../components/Loading";
import PlayerTitle from "../../components/PlayerTitle";
import SearchBar from "../../components/SearchBar";
import Title from "../../components/Title";
import { useValorantApi } from "../../lib/hooks";
import Error from "../../components/Error";

export default function PlayerTitleScreen() {
  const [text, onChangeText] = useState("");
  const { data, error, isLoading } = useValorantApi("/playertitles");

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
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

            return titleText.toLowerCase().includes(text.toLowerCase());
          }
        })}
        renderItem={({ item }) => (
          <PlayerTitle uuid={item.uuid}>{item.titleText}</PlayerTitle>
        )}
      />
    </View>
  );
}
