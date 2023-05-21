import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import GridButton from "../components/GridButton";
import { colors } from "../lib/colors";
import WeaponsDetailsScreen from "../screens/weapons/WeaponsDetailsScreen";
import WeaponsMainScreen from "../screens/weapons/WeaponsMainScreen";

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
        options={{ headerRight: () => <GridButton context="weapons" /> }}
        name="WeaponsMain"
        component={WeaponsMainScreen}
      />
      <Stack.Screen name="weaponsDetail" component={WeaponsDetailsScreen} />
    </Stack.Navigator>
  );
}
