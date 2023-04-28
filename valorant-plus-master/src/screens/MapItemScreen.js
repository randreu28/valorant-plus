import { View, Text, Button } from "react-native";
import FavoriteButton from "../components/FavoriteButton";
import { useEffect } from "react";

export default function MapItemScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: FavoriteButton,
    });
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>MapItemScreen!</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
