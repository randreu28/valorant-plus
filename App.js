/* @ts-check */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as React from "react";
import HomeIcon from "./src/components/icons//HomeIcon";
import AgentsIcon from "./src/components/icons/AgentsIcon";
import MapsIcon from "./src/components/icons/MapsIcon";
import ProfileIcon from "./src/components/icons/ProfileIcon";
import WeaponsIcon from "./src/components/icons/WeaponsIcon";
import { colors } from "./src/lib/colors";
import ComponentsList from "./src/screens/ComponentsList";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsHaveLoaded, error] = useFonts({
    // @ts-ignore
    valorant: require("./assets/fonts/valorant.ttf"),
    // @ts-ignore
    tungsten: require("./assets/fonts/tungsten.otf"),
  });

  if (fontsHaveLoaded)
    return (
      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            primary: colors.highlights,
            background: colors.darkBase,
            card: colors.base,
            text: colors.neutral,
            border: colors.darkBase,
            notification: colors.details,
          },
        }}
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              switch (route.name) {
                case "Profile":
                  return <ProfileIcon color={color} size={size} />;

                case "Agents":
                  return <AgentsIcon color={color} size={size} />;

                case "Home":
                  return <HomeIcon color={color} size={size} />;

                case "Weapons":
                  return <WeaponsIcon color={color} size={size} />;

                case "Maps":
                  return <MapsIcon color={color} size={size} />;
              }
            },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Profile" component={ComponentsList} />
          <Tab.Screen name="Agents" component={ComponentsList} />
          <Tab.Screen name="Home" component={ComponentsList} />
          <Tab.Screen name="Weapons" component={ComponentsList} />
          <Tab.Screen name="Maps" component={ComponentsList} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}
