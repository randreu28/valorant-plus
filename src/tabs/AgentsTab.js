import FavoriteButton from "../components/FavoriteButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../lib/colors";
import AgentsScreen from "../screens/AgentsScreen";

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
      <Stack.Screen name="AgentsTab1" component={AgentsScreen} />
    </Stack.Navigator>
  );
}