import { useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import Slider from "../../components/Slider";
import Title from "../../components/Title";
import ManequinInfo from "../../components/ManequinInfo";
import { colors } from "../../lib/colors";
import WeaponStats from "../../components/WeaponStats";

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

      {params.item.weaponStats && (
        <>
          <Text style={styles.text}>Statistics</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              gap: 50,
              justifyContent: "center",
            }}
          >
            {params.item.weaponStats.damageRanges.map((damageRange, key) => {
              return (
                <ManequinInfo
                  key={key}
                  rangeStartMeters={damageRange.rangeStartMeters}
                  rangeEndMeters={damageRange.rangeEndMeters}
                  bodyDamage={damageRange.bodyDamage}
                  headDamage={damageRange.headDamage}
                  legDamage={damageRange.legDamage}
                />
              );
            })}
          </View>
          <WeaponStats {...params.item.weaponStats} />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.highlights,
    textAlign: "center",
    fontSize: 25,
    fontFamily: "tungsten",
    marginVertical: 10,
  },
});
