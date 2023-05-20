import React, { useEffect } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { colors } from "../lib/colors";
import { AntDesign } from "@expo/vector-icons";
import { state } from "../state";
import { observer } from "mobx-react-lite";

const FavoriteButton = ({ context, uuid }) => {
  return (
    <Pressable
      onPress={() => state.toggleFavorite(context, uuid)}
      style={[
        styles.favoriteButton,
        state.isFavorite(context, uuid) ? styles.favoriteButtonActive : null,
      ]}
    >
      <View style={styles.favoriteButtonView}>
        <AntDesign
          name={state.isFavorite(context, uuid) ? "heart" : "hearto"}
          size={18}
          color={
            state.isFavorite(context, uuid)
              ? colors.darkBase
              : colors.highlights
          }
        />
        <Text
          style={[
            styles.textButton,
            state.isFavorite(context, uuid) ? styles.textButtonActive : null,
          ]}
        >
          Favorite
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  favoriteButton: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: colors.highlights,
    borderWidth: 2,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  favoriteButtonActive: {
    backgroundColor: colors.highlights,
  },
  favoriteButtonView: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: colors.highlights,
    textAlign: "center",
  },
  textButtonActive: {
    color: colors.darkBase,
  },
});

export default observer(FavoriteButton);
