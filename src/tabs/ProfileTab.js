import FavoriteButton from "../components/FavoriteButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { colors } from "../lib/colors";

const Stack = createNativeStackNavigator();

export default function ProfileTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "ProfileTab",
        headerRight: FavoriteButton,
        statusBarColor: colors.base,
        navigationBarColor: colors.base,
      }}
    >
      <Stack.Screen name="ProfileTab1" children={ProfileTab1} />
    </Stack.Navigator>
  );
}

function ProfileTab1() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white" }}>Profile!</Text>
    </View>
  );
}
