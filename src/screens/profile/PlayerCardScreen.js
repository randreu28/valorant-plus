import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, View } from "react-native";

export default function PlayerCardScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Go to detail"
        // @ts-ignore
        onPress={() => navigation.navigate("PlayerCardDetail")}
      />
    </View>
  );
}
