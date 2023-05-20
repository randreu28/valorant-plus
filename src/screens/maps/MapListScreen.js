import React from "react";
import { Text, View } from "react-native";
import Grid from "../../components/Grid";

import { useMaps } from "../../lib/hooks";

export default function MapListScreen({ navigation }) {
  const { data: maps, error, isLoading } = useMaps();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          flex: 1,
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Loading...</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
