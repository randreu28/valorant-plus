import React from "react";
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { colors } from "../lib/colors";
import { useNavigation } from "@react-navigation/native";

// GENIAL: El componente es muy bueno, la pinta que tiene el editable es perfecta

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
    <View style={styles.generalView}>
      <View style={styles.view}>
        <TouchableHighlight
          onPress={() => {
            /* @ts-ignore */
            navigate("ProfileRank");
          }}
          style={[styles.touchableView, { borderWidth: isEditable ? 3 : 0 }]}
        >
          <Image
            source={{
              uri: playerRank,
            }}
            style={styles.touchableImg}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            /* @ts-ignore */
            navigate("ProfilePlayerTitle");
          }}
          style={[styles.touchableView2, { borderWidth: isEditable ? 3 : 0 }]}
        >
          <Text style={styles.touchableText}>{playerTitle}</Text>
        </TouchableHighlight>
      </View>

      {/* SUGERENCIA: Yo haría un Pressable en vez de TouchableHighlight, aunque es algo más de trabajo... */}
      <TouchableHighlight
        onPress={() => {
          /* @ts-ignore */
          navigate("ProfilePlayerCard");
        }}
        style={[styles.touchableView3, { borderWidth: isEditable ? 3 : 0 }]}
      >
        <Image source={{ uri: playerCard }} style={styles.touchableImg2} />
      </TouchableHighlight>
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
    borderColor: colors.highlights,
    borderStyle: "dashed",
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
    borderColor: colors.highlights,
    borderStyle: "dashed",
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
    borderColor: colors.highlights,
    borderStyle: "dashed",
  },
  touchableImg2: {
    flex: 1,
    borderRadius: 20,
    width: "100%",
    backgroundColor: colors.base,
  },
});
