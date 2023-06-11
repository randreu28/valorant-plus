import { useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import Slider from "../../components/Slider";
import Title from "../../components/Title";
import ManequinInfo from "../../components/ManequinInfo";
import { colors } from "../../lib/colors";
import WeaponStats from "../../components/WeaponStats";
import Subtitle from "../../components/Subtitle";

export default function WeaponsDetailsScreen() {
  /**
   * @type any
   */
  const { params } = useRoute();

  const weaponStats = params.item.weaponStats;

  const filteredSkins = params.item.skins.filter(
    (skin) =>
      skin.displayName !== "Random Favorite Skin" && skin.displayName !== "Luxe Knife" && skin.displayIcon !== null
  );

  let standardSkinIndex = 0;
  filteredSkins.map((skin, index) => {
    if (skin.displayName.indexOf("Standard") === 0) {
      skin.displayIcon = params.item.displayIcon;
      standardSkinIndex = index;
    }
  });

  filteredSkins.unshift(filteredSkins.splice(standardSkinIndex, 1)[0]);

  return (
    <ScrollView>
      <Title subtitle="WEAPONS">{params.item.displayName}</Title>

      <View style={styles.slidderWraper}>
        <Slider items={filteredSkins} mode="skins" />
      </View>

      {weaponStats && (
        <>
          <Subtitle style={styles.text}>statitics</Subtitle>
          <View style={styles.mannequinWraper}>
            {weaponStats.damageRanges[0] && (
              <ManequinInfo
                rangeStartMeters={weaponStats.damageRanges[0].rangeStartMeters}
                rangeEndMeters={weaponStats.damageRanges[0].rangeEndMeters}
                bodyDamage={weaponStats.damageRanges[0].bodyDamage}
                headDamage={weaponStats.damageRanges[0].headDamage}
                legDamage={weaponStats.damageRanges[0].legDamage}
              />
            )}

            {weaponStats.damageRanges[1] && (
              <ManequinInfo
                rangeStartMeters={weaponStats.damageRanges[1].rangeStartMeters}
                rangeEndMeters={weaponStats.damageRanges[1].rangeEndMeters}
                bodyDamage={weaponStats.damageRanges[1].bodyDamage}
                headDamage={weaponStats.damageRanges[1].headDamage}
                legDamage={weaponStats.damageRanges[1].legDamage}
              />
            )}
          </View>

          {weaponStats.damageRanges[2] && (
            <View style={{ paddingVertical: 10 }}>
              <ManequinInfo
                rangeStartMeters={weaponStats.damageRanges[2].rangeStartMeters}
                rangeEndMeters={weaponStats.damageRanges[2].rangeEndMeters}
                bodyDamage={weaponStats.damageRanges[2].bodyDamage}
                headDamage={weaponStats.damageRanges[2].headDamage}
                legDamage={weaponStats.damageRanges[2].legDamage}
              />
            </View>
          )}
          <WeaponStats {...params.item.weaponStats} />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  slidderWraper: {
    height: 300,
  },
  mannequinWraper: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
    gap: 50,
  },
  text: {
    marginVertical: 15,
  },
});
