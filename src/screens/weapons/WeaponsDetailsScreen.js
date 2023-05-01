import React from "react";
import Title from "../../components/Title";
import WeaponStats from "../../components/WeaponStats";
import Slider from "../../components/Slider";
import { Text } from "react-native";
import { colors } from "../../lib/colors";

const skins = [
  {
    uuid: "89be9866-4807-6235-2a95-499cd23828df",
    displayName: "Altitude Odin",
    themeUuid: "537e0587-416c-f8f3-965c-bba3508156d7",
    contentTierUuid: "0cebb8be-46d7-c12a-d306-e9907bfc5a25",
    displayIcon:
      "https://media.valorant-api.com/weaponskins/89be9866-4807-6235-2a95-499cd23828df/displayicon.png",
    wallpaper: null,
    assetPath:
      "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Airplane/HMG_Airplane_PrimaryAsset",
    chromas: [
      {
        uuid: "092a25a4-422f-f577-37ac-26a5d489c155",
        displayName: "Altitude Odin",
        displayIcon: null,
        fullRender:
          "https://media.valorant-api.com/weaponskinchromas/092a25a4-422f-f577-37ac-26a5d489c155/fullrender.png",
        swatch: null,
        streamedVideo: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Airplane/Chromas/Standard/HMG_Airplane_Standard_PrimaryAsset",
      },
    ],
    levels: [
      {
        uuid: "578e9077-4f88-260c-e54c-b988425c60e4",
        displayName: "Altitude Odin",
        levelItem: null,
        displayIcon:
          "https://media.valorant-api.com/weaponskinlevels/578e9077-4f88-260c-e54c-b988425c60e4/displayicon.png",
        streamedVideo: null,
        assetPath:
          "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Airplane/Levels/HMG_Airplane_Lv1_PrimaryAsset",
      },
    ],
  },
  {
    uuid: "abef8114-4495-6da7-2ade-02bd0f014fd3",
    displayName: "Rune Stone Odin",
    themeUuid: "65d8e156-4e4c-f9de-844f-3fa05a9624e4",
    contentTierUuid: "12683d76-48d7-84a3-4e09-6985794f0445",
    displayIcon:
      "https://media.valorant-api.com/weaponskins/abef8114-4495-6da7-2ade-02bd0f014fd3/displayicon.png",
    wallpaper: null,
    assetPath:
      "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Codex/HMG_Codex_PrimaryAsset",
  },
  {
    uuid: "97af88e4-4176-9fa3-4a26-57919443dab7",
    displayName: "Glitchpop Odin",
    themeUuid: "5b014f36-414b-4703-9c65-1876c630feaa",
    contentTierUuid: "e046854e-406c-37f4-6607-19a9ba8426fc",
    displayIcon:
      "https://media.valorant-api.com/weaponskins/97af88e4-4176-9fa3-4a26-57919443dab7/displayicon.png",
    wallpaper: null,
    assetPath:
      "ShooterGame/Content/Equippables/Guns/HvyMachineGuns/HMG/Cyberpunk/HeavyMachineGun_Cyberpunk_PrimaryAsset",
  },
];

export default function WeaponsDetailsScreen() {
  return (
    <>
      <Title subtitle="WEAPONS">SHERIFF</Title>

      <Slider items={skins} mode="skins" />

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
