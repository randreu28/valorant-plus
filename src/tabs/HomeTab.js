import FavoriteButton from "../components/FavoriteButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../lib/colors";
import HomeMainScreen from "../screens/home/HomeMainScreen";
import AgentsDetailScreen from "../screens/agents/AgentsDetailScreen";
import WeaponsDetailsScreen from "../screens/weapons/WeaponsDetailsScreen";
import MapItemScreen from "../screens/maps/MapItemScreen";
import PlayerCardDetailScreen from "../screens/profile/PlayerCardDetailScreen";
import RankScreen from "../screens/profile/RankScreen";
import PlayerTitleScreen from "../screens/profile/PlayerTitleScreen";

const Stack = createNativeStackNavigator();

export default function HomeTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        statusBarColor: colors.base,
        navigationBarColor: colors.base,
      }}
    >
      <Stack.Screen name="HomeMainScreen" component={HomeMainScreen} />
      <Stack.Screen
        name="agentsDetail"
        component={AgentsDetailScreen}
        options={({ route }) => {
          const { params } = route;
          const uuid = params && params.uuid;
          return {
            headerTitle: "",
            headerRight: () => <FavoriteButton context="agents" uuid={uuid} />,
          };
        }}
      />
      <Stack.Screen
        name="weaponsDetail"
        options={({ route }) => {
          const { params } = route;
          const uuid = params && params["uuid"];
          return {
            headerTitle: "",
            headerRight: () => <FavoriteButton context="weapons" uuid={uuid} />,
          };
        }}
        component={WeaponsDetailsScreen}
      />
      <Stack.Screen
        name="mapsDetail"
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
      <Stack.Screen
        options={({ route }) => {
          const { params } = route;
          const uuid = params && params["uuid"];
          return {
            headerTitle: "",
            headerRight: () => (
              <FavoriteButton context="playerCard" uuid={uuid} />
            ),
          };
        }}
        name="playerCardDetail"
        component={PlayerCardDetailScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: "",
        }}
        name="ProfileRank"
        component={RankScreen}
      />
       <Stack.Screen
        options={{ headerTitle: "", headerRight: () => null }}
        name="ProfilePlayerTitle"
        component={PlayerTitleScreen}
      />
    </Stack.Navigator>
  );
}

