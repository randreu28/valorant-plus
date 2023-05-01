import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FavoriteButton from "../components/FavoriteButton";
import { colors } from "../lib/colors";
import WeaponsMainScreen from "../screens/weapons/WeaponsMainScreen";
import WeaponsDetailsScreen from "../screens/weapons/WeaponsDetailsScreen";

const Stack = createNativeStackNavigator();

export default function WeaponsTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "WeaponsTab",
        headerRight: FavoriteButton,
        statusBarColor: colors.base,
        navigationBarColor: colors.base,
      }}
    >
      <Stack.Screen name="WeaponsMain" children={WeaponsMainScreen} />
      <Stack.Screen name="WeaponsDetails" children={WeaponsDetailsScreen} />
    </Stack.Navigator>
  );
}
