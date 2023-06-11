import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../lib/colors";

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
  playerTitle = "Player Title",
  playerRank = undefined,
}) {
  const { navigate } = useNavigation();

  return (
    <View style={styles.generalView}>
      <Pressable
        onPress={() => {
          /* @ts-ignore */
          if (isEditable) navigate("ProfilePlayerCard");
        }}
        style={styles.view}
      >
        <Pressable
          onPress={() => {
            /* @ts-ignore */
            if (isEditable) navigate("ProfileRank");
          }}
          style={[
            styles.touchableView,
            {
              borderColor: isEditable
                ? colors.highlights
                : colors.darkBaseTransparent,
            },
          ]}
        >
          <Image
            source={{
              uri:
                playerRank !== undefined
                  ? playerRank
                  : "https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/0/largeicon.png",
            }}
            style={{
              ...styles.touchableImg,
              transform: [{ translateY: playerRank === undefined ? 10 : 0 }],
            }}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            /* @ts-ignore */
            if (isEditable) navigate("ProfilePlayerTitle");
          }}
          style={[
            styles.touchableView2,
            {
              borderColor: isEditable
                ? colors.highlights
                : colors.darkBaseTransparent,
            },
          ]}
        >
          <Text style={{...styles.touchableText,  color:playerTitle!=="Player Title" ? 'white' : 'grey'}}>{playerTitle}</Text>
        </Pressable>
      </Pressable>

      <Pressable
        onPress={() => {
          /* @ts-ignore */
          if (isEditable) navigate("ProfilePlayerCard");
        }}
        style={[
          styles.touchableView3,
          {
            borderColor: isEditable
              ? colors.highlights
              : colors.darkBaseTransparent,
          },
        ]}
      >
        <Image
          source={{ uri: playerCard }}
          style={{
            ...styles.touchableImg2,
            backgroundColor: playerCard === undefined && colors.bg,
          }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  generalView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    paddingTop: 0,
  },
  view: {
    position: "absolute",
    zIndex: 2,
    padding: 20,
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
  },
  touchableView: {
    borderStyle: "dashed",
    borderWidth: 3,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    margin: 20,
  },
  touchableImg: {
    width: 100,
    height: 100,
    margin: 20,
  },
  touchableView2: {
    backgroundColor: "rgba(0 ,0 ,0 ,0.5)",
    borderStyle: "dashed",
    borderWidth: 3,
  },
  touchableText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
  },
  touchableView3: {
    flex: 1,
    width: "100%",
    borderRadius: 20,
    borderStyle: "dashed",
    borderWidth: 3,
  },
  touchableImg2: {
    flex: 1,
    borderRadius: 20,
    width: "100%",
    backgroundColor: colors.base,
  },
});
