import FavoriteButton from "../components/FavoriteButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { colors } from "../lib/colors";

const Stack = createNativeStackNavigator();

export default function AgentsTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "AgentsTab",
        headerRight: FavoriteButton,
        statusBarColor: colors.base,
        navigationBarColor: colors.base,
      }}
    >
      <Stack.Screen name="AgentsTab1" children={AgentsTab1} />
    </Stack.Navigator>
  );
}

function AgentsTab1() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white" }}>Agents!</Text>
    </View>
  );
}
