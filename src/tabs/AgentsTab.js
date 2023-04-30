import FavoriteButton from "../components/FavoriteButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../lib/colors";
import AgentsScreen from "../screens/AgentsScreen";
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
      <Stack.Screen name="Agents" component={AgentsScreen} />
      <Stack.Screen name="AgentsDetails" component={AgentsDetailScreen} />
    </Stack.Navigator>
  );
}