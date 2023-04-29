import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, View } from "react-native";

export default function PlayerCardGridScreen() {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="See more"
        onPress={() => {
          /* @ts-ignore */
          navigate("ProfilePlayerCard");
        }}
      />
    </View>
  );
}
