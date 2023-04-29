import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteButton from "../components/FavoriteButton";
import { colors } from "../lib/colors";
import MainScreen from "../screens/profile/MainScreen";
import RankScreen from "../screens/profile/RankScreen";
import PlayerCardScreen from "../screens/profile/PlayerCardScreen";
import PlayerTitleScreen from "../screens/profile/PlayerTitleScreen";

const Stack = createNativeStackNavigator();

export default function ProfileTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerRight: FavoriteButton,
        statusBarColor: colors.base,
        navigationBarColor: colors.base,
      }}
    >
      <Stack.Screen
        options={{ headerTitle: "" }}
        initialParams={{
          isEditable: false,
          playerRank:
            "https://media.valorant-api.com/competitivetiers/edb72a72-7e6d-6010-9591-7c053bbdbf48/13/largeicon.png",
          playerTitle: "Spicy",
          playerCard:
            "https://media.valorant-api.com/playercards/33c1f011-4eca-068c-9751-f68c788b2eee/largeart.png",
        }}
        name="ProfileMain"
        children={MainScreen}
      />
      <Stack.Screen
        options={{ headerTitle: "" }}
        name="ProfileRank"
        children={RankScreen}
      />

      <Stack.Screen
        options={{ headerTitle: "" }}
        initialParams={{
          url: "https://media.valorant-api.com/playercards/33c1f011-4eca-068c-9751-f68c788b2eee/largeart.png",
          title: "Bird card",
        }}
        name="ProfilePlayerCard"
        children={PlayerCardScreen}
      />

      <Stack.Screen
        options={{ headerTitle: "" }}
        name="ProfilePlayerTitle"
        children={PlayerTitleScreen}
      />
    </Stack.Navigator>
  );
}
