import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { colors } from "../lib/colors";
import AgentsDetailScreen from "../screens/agents/AgentsDetailScreen";
import AgentsMainScreen from "../screens/agents/AgentsMainScreen";
import GridButton from "../components/GridButton";
import FavoriteButton from "../components/FavoriteButton";

const Stack = createNativeStackNavigator();

export default function AgentsTab() {
  const route = useRoute();

  const { params } = route;
  const uuid = params && params.uuid;

  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: colors.base,
        navigationBarColor: colors.base,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="AgentsMain"
        component={AgentsMainScreen}
        options={{
          headerTitle: "",
          headerRight: () => <GridButton context="agents" />,
        }}
      />

      <Stack.Screen
        name="agentsDetail"
        component={AgentsDetailScreen}
        options={({ route }) => {
          const { params } = route;
          const uuid = params && params.uuid;
          return {
            headerTitle: "",
            headerRight: () => <FavoriteButton context="agents" uuid={uuid} />,
          };
        }}
      />
    </Stack.Navigator>
  );
}
