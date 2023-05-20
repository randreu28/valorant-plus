import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Grid from "../../components/Grid";
import { useMaps } from "../../lib/hooks";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function MapListScreen({ navigation }) {
  const { data: maps, error, isLoading } = useMaps();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.mapsView}>
      <Grid
        items={maps}
        title="MAPS"
        imageBg={undefined}
        imageType={undefined}
        size="full-width"
        button={undefined}
        buttonType={undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mapsView: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
