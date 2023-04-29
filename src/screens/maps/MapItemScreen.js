import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import FavoriteButton from "../../components/FavoriteButton";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function MapItemScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();

  useEffect(() => {
    navigation.setOptions({
      headerRight: FavoriteButton,
    });
  }, [navigation]);

  if (params === undefined) {
    throw Error("Invalid route params");
  }
  return (
    <>
      <Image
        source={{
          uri: params["splashImage"],
        }}
        style={{ flex: 1, height: "100%", opacity: 0.5 }}
      />
      <View
        style={{
          position: "absolute",
          zIndex: 2,
          flex: 1,
          height: "100%",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 100,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 50, color: "white" }}>
          Ascent
        </Text>
        <Image
          source={{
            uri: params["displayIcon"],
          }}
          style={{ width: 300, height: 300, margin: 20, zIndex: 5 }}
        />
      </View>
    </>
  );
}
