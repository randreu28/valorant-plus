import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { colors } from "../lib/colors";
import AgentsDetailScreen from "../screens/agents/AgentsDetailScreen";
import AgentsMainScreen from "../screens/agents/AgentsMainScreen";
import GridButton from "../components/GridButton";

const Stack = createNativeStackNavigator();

export default function AgentsTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerRight: GridButton,
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
