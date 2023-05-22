import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import GridButton from "../components/GridButton";
import { colors } from "../lib/colors";
import WeaponsDetailsScreen from "../screens/weapons/WeaponsDetailsScreen";
import WeaponsMainScreen from "../screens/weapons/WeaponsMainScreen";
import FavoriteButton from "../components/FavoriteButton";

const Stack = createNativeStackNavigator();

export default function WeaponsTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        statusBarColor: colors.base,
        navigationBarColor: colors.base,
        animation: "slide_from_bottom",
      }}
    >
      <Stack.Screen
        options={{ headerRight: () => <GridButton context="weapons" /> }}
        name="WeaponsMain"
        component={WeaponsMainScreen}
      />
      <Stack.Screen
        name="weaponsDetail"
        options={({ route }) => {
          const { params } = route;
          const uuid = params && params["uuid"];
          return {
            headerTitle: "",
            headerRight: () => <FavoriteButton context="weapons" uuid={uuid} />,
          };
        }}
        component={WeaponsDetailsScreen}
      />
    </Stack.Navigator>
  );
}
