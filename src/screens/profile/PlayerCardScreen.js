import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { colors } from "../../lib/colors";

export default function PlayerCardScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: null,
    });
  }, [navigation]);

  if (params === undefined) {
    throw Error("Invalid route params");
  }

  return (
    <>
      <View
        style={{
          flex: 1,
          height: "100%",
          padding: 20,
          backgroundColor: colors.base,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 50,
            marginVertical: 10,
          }}
        >
          {params["title"]}
        </Text>
        <Image
          source={{ uri: params["url"] }}
          style={{
            flex: 1,
            borderRadius: 20,
            height: "100%",
            padding: 20,
          }}
        />
      </View>
    </>
  );
}
