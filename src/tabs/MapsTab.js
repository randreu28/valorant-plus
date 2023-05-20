import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FavoriteButton from "../components/FavoriteButton";
import { colors } from "../lib/colors";
import MapItemScreen from "../screens/maps/MapItemScreen";
import MapListScreen from "../screens/maps/MapListScreen";

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
      <Stack.Screen name="MapList" component={MapListScreen} />
      <Stack.Screen
        initialParams={{
          splashImage:
            "https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/splash.png",
          displayIcon:
            "https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/displayicon.png",
        }}
        name="MapItem"
        component={MapItemScreen}
        options={({ route }) => {
          const { params } = route;
          const uuid = params && params["uuid"];
          return {
            headerTitle: "",
            headerTransparent: true,
            headerRight: () => <FavoriteButton context="maps" uuid={uuid} />,
          };
        }}
      />
    </Stack.Navigator>
  );
}
