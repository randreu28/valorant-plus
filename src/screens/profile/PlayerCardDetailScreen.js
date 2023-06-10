import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Title from "../../components/Title";
import { colors } from "../../lib/colors";

export default function PlayerCardDetailScreen({ route }) {
  return (
    <View style={styles.container}>
      <Title subtitle="PROFILE">{route.params.item.displayName}</Title>

      <Image
        source={{
          uri: route.params.item.largeArt,
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
