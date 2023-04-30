import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button, View } from "react-native";
import GridButton from "../../components/GridButton";

export default function PlayerCardGridScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: GridButton,
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="See more"
        onPress={() => {
          /* @ts-ignore */
          navigation.navigate("ProfilePlayerCard");
        }}
      />
    </View>
  );
}
