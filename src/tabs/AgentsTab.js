import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FavoriteButton from "../components/FavoriteButton";
import { colors } from "../lib/colors";
import AgentsDetailScreen from "../screens/agents/AgentsDetailScreen";
import AgentsMainScreen from "../screens/agents/AgentsMainScreen";

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
      <Stack.Screen name="AgentsMain" component={AgentsMainScreen} />
      <Stack.Screen name="AgentsDetails" component={AgentsDetailScreen} />
    </Stack.Navigator>
  );
}
