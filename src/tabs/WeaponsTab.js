import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FavoriteButton from "../components/FavoriteButton";
import { colors } from "../lib/colors";
import WeaponsMainScreen from "../screens/weapons/WeaponsMainScreen";
import WeaponsDetailsScreen from "../screens/weapons/WeaponsDetailsScreen";
import GridButton from "../components/GridButton";

const Stack = createNativeStackNavigator();

export default function WeaponsTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        statusBarColor: colors.base,
        navigationBarColor: colors.base,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        options={{ headerRight: () => <GridButton context="agents" /> }}
        name="WeaponsMain"
        children={WeaponsMainScreen}
      />
      <Stack.Screen name="WeaponsDetails" children={WeaponsDetailsScreen} />
    </Stack.Navigator>
  );
}
