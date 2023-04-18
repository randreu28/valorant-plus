import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapListScreen from "../screens/MapListScreen";
import MapItemScreen from "../screens/MapItemScreen";
import { colors } from "../lib/colors";

const Stack = createNativeStackNavigator();

export default function MapsTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        statusBarColor: colors.base,
        navigationBarColor: colors.base,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen name="MapList" children={MapListScreen} />
      <Stack.Screen name="MapItem" children={MapItemScreen} />
    </Stack.Navigator>
  );
}
