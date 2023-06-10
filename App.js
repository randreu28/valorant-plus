import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as React from "react";
import IntroScreen from "./src/screens/IntroScreen";
import HomeIcon from "./src/components/icons//HomeIcon";
import AgentsIcon from "./src/components/icons/AgentsIcon";
import MapsIcon from "./src/components/icons/MapsIcon";
import ProfileIcon from "./src/components/icons/ProfileIcon";
import WeaponsIcon from "./src/components/icons/WeaponsIcon";
import AgentsTab from "./src/tabs/AgentsTab";
import HomeTab from "./src/tabs/HomeTab";
import MapsTab from "./src/tabs/MapsTab";
import ProfileTab from "./src/tabs/ProfileTab";
import WeaponsTab from "./src/tabs/WeaponsTab";
import { state } from "./src/state";
import { colors } from "./src/lib/colors";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

state.load();

const App = () => {
  const isIntroDone = state.getIsIntroDone();

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
        <Stack.Navigator initialRouteName={!isIntroDone ? "Intro" : "Main"} screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Intro" component={IntroScreen}
            theme={{
              dark: true,
              colors: {
                primary: colors.highlights,
                background: colors.highlights,
                card: colors.highlights,
                text: colors.highlights,
                border: colors.highlights,
                notification: colors.highlights,
              },
            }}
          />
          <Stack.Screen name="Main" component={MainStackScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

const MainStackScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{ animation: 'fade' }}
        listeners={({ navigation }) => ({
          tabPress: event => {
            // prevent default action
            event.preventDefault();
            // navigate to the first screen of the stack
            navigation.reset({
              index: 0,
              routes: [{ name: 'Profile' }],
            });
          },
        })}
      />
      <Tab.Screen
        name="Agents"
        component={AgentsTab}
        options={{ animation: 'fade' }}
        listeners={({ navigation }) => ({
          tabPress: event => {
            event.preventDefault();
            state.setEditable(false);
            navigation.reset({
              index: 0,
              routes: [{ name: 'Agents' }],
            });
          },
        })}
      />
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{ animation: 'fade' }}
        listeners={({ navigation }) => ({
          tabPress: event => {
            event.preventDefault();
            state.setEditable(false);
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            });
          },
        })}
      />
      <Tab.Screen
        name="Weapons"
        component={WeaponsTab}
        options={{ animation: 'fade' }}
        listeners={({ navigation }) => ({
          tabPress: event => {
            event.preventDefault();
            state.setEditable(false);
            navigation.reset({
              index: 0,
              routes: [{ name: 'Weapons' }],
            });
          },
        })}
      />
      <Tab.Screen
        name="Maps"
        component={MapsTab}
        options={{ animation: 'fade' }}
        listeners={({ navigation }) => ({
          tabPress: event => {
            event.preventDefault();
            state.setEditable(false);
            navigation.reset({
              index: 0,
              routes: [{ name: 'Maps' }],
            });
          },
        })}
      />
    </Tab.Navigator>
  );
}

export default App;