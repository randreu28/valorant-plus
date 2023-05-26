import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Title from "../../components/Title";
import { colors } from "../../lib/colors";

export default function PlayerCardDetailScreen() {
  return (
    <View style={styles.container}>
      <Title subtitle="PROFILE">BIRD CARD</Title>

      <Image
        source={{
          uri: "https://media.valorant-api.com/playercards/fc209787-414b-10d0-dcac-04832fc2c654/largeart.png",
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    padding: 20,
    backgroundColor: colors.base,
    gap: 20,
  },
  image: {
    flex: 1,
    borderRadius: 20,
    height: "100%",
    padding: 20,
  },
});
