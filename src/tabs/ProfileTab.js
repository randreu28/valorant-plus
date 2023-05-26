import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import EditButton from "../components/EditButton";
import { colors } from "../lib/colors";
import MainScreen from "../screens/profile/MainScreen";
import PlayerCardScreen from "../screens/profile/PlayerCardScreen";
import PlayerTitleScreen from "../screens/profile/PlayerTitleScreen";
import RankScreen from "../screens/profile/RankScreen";
import GridButton from "../components/GridButton";
import PlayerCardDetailScreen from "../screens/profile/PlayerCardDetailScreen";
import FavoriteButton from "../components/FavoriteButton";

const Stack = createNativeStackNavigator();

export default function ProfileTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerRight: () => <EditButton />,
        statusBarColor: colors.base,
        navigationBarColor: colors.base,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        options={{ headerTitle: "" }}
        name="ProfileMain"
        component={MainScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: "",
          headerRight: () => <GridButton context="playerRank" />,
        }}
        name="ProfileRank"
        component={RankScreen}
      />

      <Stack.Screen
        options={{
          headerTitle: "",
          headerRight: () => <GridButton context="playerCard" />,
        }}
        name="ProfilePlayerCard"
        component={PlayerCardScreen}
      />

      <Stack.Screen
        options={({ route }) => {
          const { params } = route;
          const uuid = params && params["uuid"];
          return {
            headerTitle: "",
            headerRight: () => (
              <FavoriteButton context="playerCard" uuid={uuid} />
            ),
          };
        }}
        name="PlayerCardDetail"
        component={PlayerCardDetailScreen}
      />

      <Stack.Screen
        options={{ headerTitle: "", headerRight: () => null }}
        name="ProfilePlayerTitle"
        component={PlayerTitleScreen}
      />
    </Stack.Navigator>
  );
}
