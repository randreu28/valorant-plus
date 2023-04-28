/* @ts-check */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import AgentsIcon from "./src/components/AgentsIcon";
import HomeIcon from "./src/components/HomeIcon";
import MapsIcon from "./src/components/MapsIcon";
import ProfileIcon from "./src/components/ProfileIcon";
import WeaponsIcon from "./src/components/WeaponsIcon";
import { colors } from "./src/lib/colors";
import AgentsTab from "./src/tabs/AgentsTab";
import HomeTab from "./src/tabs/HomeTab";
import MapsTab from "./src/tabs/MapsTab";
import ProfileTab from "./src/tabs/ProfileTab";
import WeaponsTab from "./src/tabs/WeaponsTab";
import { useFonts } from "expo-font";
import Cabezera from './components/Cabezera';

const Tab = createBottomTabNavigator();

const ShowComponent = ({ name, children }) => {
  return (
    <View style={styles.show}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.row}>{children}</View>
    </View>
  );
}; 

export default function App() {
  return (
    <View style={styles.container}>
    <ShowComponent name="Cabezera">
      <Cabezera name="cab" />
    </ShowComponent>
    </View>
  );
}

export default function App() {
  useFonts({
    valorant: require("./assets/fonts/valorant.ttf"),
    tungsten: require("./assets/fonts/tungsten.otf"),
  });

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
        <Tab.Screen name="Profile" component={ProfileTab} />
        <Tab.Screen name="Agents" component={AgentsTab} />
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Weapons" component={WeaponsTab} />
        <Tab.Screen name="Maps" component={MapsTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
