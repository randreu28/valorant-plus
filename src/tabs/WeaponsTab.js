import FavoriteButton from "../components/FavoriteButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { colors } from "../lib/colors";
import Mannequin from "../components/icons/Mannequin";

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
      <Mannequin head="#ff0000" body="#00ff00" legs="#0000ff"></Mannequin>
    </View>
  );
}

const HitColor = () => {
  let color;
  if (value === 0) {
    color = "#ffffff";
  } else if (value >= 1 && value < 85) {
    color = "#ffffff";
  } else if (value >= 85 && value < 170) {
    color = "#80ffde";
  } else if (value >= 170 && value < 255) {
    color = "##00ffbc";
  }
  return color;
};
