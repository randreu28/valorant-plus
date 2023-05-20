import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import EditButton from "../components/EditButton";
import { colors } from "../lib/colors";
import MainScreen from "../screens/profile/MainScreen";
import PlayerCardScreen from "../screens/profile/PlayerCardScreen";
import PlayerTitleScreen from "../screens/profile/PlayerTitleScreen";
import RankScreen from "../screens/profile/RankScreen";

const Stack = createNativeStackNavigator();

export default function ProfileTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerRight: EditButton,
        statusBarColor: colors.base,
        navigationBarColor: colors.base,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        options={{ headerTitle: "" }}
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
