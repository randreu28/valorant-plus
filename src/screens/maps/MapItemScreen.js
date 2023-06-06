import { useRoute } from "@react-navigation/native";
import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Title from "../../components/Title";
import { colors } from "../../lib/colors";

export default function MapItemScreen() {
  const route = useRoute();
  const { item } = route.params;

  return (
    <View style={styles.screenWraper}>
      <Image
        source={{
          // @ts-ignore
          uri: item.splash,
        }}
        style={styles.splashImg}
      />

      <View style={styles.mapsGeneralView} />

      <View style={styles.mapsView}>
        <Title subtitle="MAPS"> {item.displayName} </Title>
        <Image
          source={{
            // @ts-ignore
            uri: item.displayIcon,
          }}
          style={styles.mapsImg}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenWraper: {
    position: "relative",
    flex: 1,
  },
  splashImg: { flex: 1, height: "100%", opacity: 0.5 },
  mapsGeneralView: {
    position: "absolute",
    zIndex: 1.5,
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: colors.base,
    opacity: 0.5,
  },
  mapsView: {
    position: "absolute",
    zIndex: 2,
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 100,
  },
  mapsImg: {
    width: "95%",
    height: "95%",
    margin: 20,
    zIndex: 5,
    resizeMode: "contain",
  },
});
