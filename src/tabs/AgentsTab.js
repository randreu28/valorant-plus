import React from "react";
import FavoriteButton from "../components/FavoriteButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../lib/colors";
import ComponentsList from "../screens/ComponentsList";
import AgentsDetailScreen from "../screens/agents/AgentsDetailScreen";

const Stack = createNativeStackNavigator();

export default function AgentsTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "AgentsTab",
        headerRight: FavoriteButton,
        statusBarColor: colors.base,
        navigationBarColor: colors.base,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="AgentsMain" component={ComponentsList} />
      <Stack.Screen name="AgentsDetails" component={AgentsDetailScreen} />
    </Stack.Navigator>
  );
}
