import { View, Text, Button } from "react-native";

export default function MapListScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>MapListScreen!</Text>
      <Button
        title="Go to Map item"
        onPress={() => navigation.navigate("MapItem")}
      />
    </View>
  );
}
