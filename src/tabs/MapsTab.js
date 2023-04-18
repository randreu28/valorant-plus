import FavoriteButton from "../components/FavoriteButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { colors } from "../lib/colors";

const Stack = createNativeStackNavigator();

export default function MapsTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "MapsTab",
        headerRight: FavoriteButton,
        statusBarColor: colors.base,
        navigationBarColor: colors.base,
      }}
    >
      <Stack.Screen name="MapsTab1" children={MapsTab1} />
    </Stack.Navigator>
  );
}

function MapsTab1() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white" }}>Maps!</Text>
    </View>
  );
}
