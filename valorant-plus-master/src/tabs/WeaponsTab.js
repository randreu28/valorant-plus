import FavoriteButton from "../components/FavoriteButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { colors } from "../lib/colors";

const Stack = createNativeStackNavigator();

export default function WeaponsTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "WeaponsTab",
        headerRight: FavoriteButton,
        statusBarColor: colors.base,
        navigationBarColor: colors.base,
      }}
    >
      <Stack.Screen name="WeaponsTab1" children={WeaponsTab1} />
    </Stack.Navigator>
  );
}

function WeaponsTab1() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white" }}>Weapons!</Text>
    </View>
  );
}
