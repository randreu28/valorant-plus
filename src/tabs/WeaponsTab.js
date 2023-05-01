import FavoriteButton from "../components/FavoriteButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { colors } from "../lib/colors";
import Mannequin from "../components/icons/Mannequin";
import Title from "../components/Title";

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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Weapons!</Text>
      <Title subtitle="Stadistics"></Title>
      <WeaponStats></WeaponStats>
    </View>
  );
}

function WeaponStats() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontFamily: "tungsten" }}>Distance</Text>

      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Mannequin head="#00ffbc" body="#80ffde" legs="#ffffff"></Mannequin>
        <View
          style={{
            flex: 1,
          }}
        >
          <Text style={{ color: "#00ffbc", fontFamily: "tungsten" }}>182</Text>
          <Text style={{ color: "#80ffde", fontFamily: "tungsten" }}>95</Text>
          <Text style={{ color: "#ffffff", fontFamily: "tungsten" }}>55</Text>
        </View>
      </View>
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
