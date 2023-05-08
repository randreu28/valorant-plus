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
import AgentsTab from "./src/tabs/AgentsTab";
import HomeTab from "./src/tabs/HomeTab";
import MapsTab from "./src/tabs/MapsTab";
import ProfileTab from "./src/tabs/ProfileTab";
import WeaponsTab from "./src/tabs/WeaponsTab";

const Tab = createBottomTabNavigator();

export default function App() {
  // GENIAL: El uso de fuentes sin que lo haya explicado en clase
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
            tabBarInactiveTintColor: "white",
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
          <Tab.Screen name="Profile" component={ProfileTab} />
          <Tab.Screen name="Agents" component={AgentsTab} />
          <Tab.Screen name="Home" component={HomeTab} />
          <Tab.Screen name="Weapons" component={WeaponsTab} />
          <Tab.Screen name="Maps" component={MapsTab} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}
