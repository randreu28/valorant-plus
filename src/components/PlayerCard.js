import React from "react";
import { View, Image, Text, TouchableHighlight } from "react-native";
import { colors } from "../lib/colors";
import { useNavigation } from "@react-navigation/native";

/**
 * A component to display the player's Card
 * @param {{
 *  isEditable?: boolean,
 *  playerRank?: string,
 *  playerTitle?: string
 *  playerCard?: string,
 * }} Props
 */
export default function PlayerCard({
  playerCard = undefined,
  isEditable = false,
  playerTitle = "-",
  playerRank = "https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/0/largeicon.png",
}) {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 20,
      }}
    >
      <View
        style={{
          position: "absolute",
          zIndex: 2,
          padding: 20,
          flex: 1,
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <TouchableHighlight
          onPress={() => {
            /* @ts-ignore */
            navigate("ProfileRank");
          }}
          style={{
            borderColor: colors.highlights,
            borderWidth: isEditable ? 3 : 0,
            borderStyle: "dashed",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            margin: 20,
          }}
        >
          <Image
            source={{
              uri: playerRank,
            }}
            style={{
              width: 100,
              height: 100,
              margin: 20,
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            /* @ts-ignore */
            navigate("ProfilePlayerTitle");
          }}
          style={{
            backgroundColor: "rgba(0 ,0 ,0 ,0.5)",
            borderColor: colors.highlights,
            borderWidth: isEditable ? 3 : 0,
            borderStyle: "dashed",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
              padding: 10,
              borderRadius: 5,
            }}
          >
            {playerTitle}
          </Text>
        </TouchableHighlight>
      </View>

      <TouchableHighlight
        onPress={() => {
          /* @ts-ignore */
          navigate("ProfilePlayerCard");
        }}
        style={{
          flex: 1,
          width: "100%",
          borderRadius: 20,
          borderColor: colors.highlights,
          borderWidth: isEditable ? 3 : 0,
          borderStyle: "dashed",
        }}
      >
        <Image
          source={{ uri: playerCard }}
          style={{
            flex: 1,
            borderRadius: 20,
            width: "100%",
            backgroundColor: colors.base,
          }}
        />
      </TouchableHighlight>
    </View>
  );
}
