import { useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import Slider from "../../components/Slider";
import Title from "../../components/Title";
import WeaponStats from "../../components/WeaponStats";
import { colors } from "../../lib/colors";

export default function WeaponsDetailsScreen() {
  /**
   * @type any
   */
  const { params } = useRoute();

  return (
    <ScrollView>
      <Title subtitle="WEAPONS">{params.item.displayName}</Title>

      <View style={{ height: 300 }}>
        <Slider items={params.item.skins} mode="skins" />
      </View>

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

      {params.item.weaponStats.damageRanges.map((damageRange, key) => {
        return (
          <WeaponStats
            key={key}
            rangeStartMeters={damageRange.rangeStartMeters}
            rangeEndMeters={damageRange.rangeEndMeters}
            fireRate={params.item.weaponStats.fireRate}
            magCapacity={params.item.weaponStats.magazineSize}
            reloadTime={params.item.weaponStats.reloadTimeSeconds}
            head={damageRange.headDamage}
            body={damageRange.bodyDamage}
            legs={damageRange.legDamage}
          />
        );
      })}
    </ScrollView>
  );
}
