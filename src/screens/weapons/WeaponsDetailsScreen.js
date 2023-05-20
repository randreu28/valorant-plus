import React from "react";
import Title from "../../components/Title";
import WeaponStats from "../../components/WeaponStats";
import Slider from "../../components/Slider";
import { Text, View } from "react-native";
import { colors } from "../../lib/colors";
import { useValorantApi } from "../../lib/hooks";

export default function WeaponsDetailsScreen() {
  const { data, error, isLoading } = useValorantApi("/weapons/skins");
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
        <Text style={{ color: "red" }}>{error}</Text>
      </View>
    );
  }
  return (
    <>
      <Title subtitle="WEAPONS">SHERIFF</Title>

      <Slider items={data} mode="skins" />

      <Text
        style={{
          color: colors.highlights,
          textAlign: "center",
          fontSize: 25,
          fontFamily: "tungsten",
          marginVertical: 10,
        }}
      >
        Statistics
      </Text>
      <WeaponStats
        fireRate={4}
        magCapacity={30}
        reloadTime={4}
        head={182}
        body={95}
        legs={55}
      />
    </>
  );
}
