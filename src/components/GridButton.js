import { MaterialCommunityIcons } from "@expo/vector-icons";
import { observer } from "mobx-react-lite";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../lib/colors";
import { state } from "../state";

const GridButton = ({ context }) => {

  return (
    <Pressable
      onPress={() => state.toggleView(context)}
      style={[styles.gridButton, state.getView(context) === 'grid' ? styles.GridButtonActive : null]}
    >
      <View
        style={styles.gridView}
      >
        <MaterialCommunityIcons
          name="dots-grid"
          size={18}
          color={state.getView(context) === 'grid' ? colors.darkBase : colors.highlights}
        />
        <Text
          style={[styles.textButton, state.getView(context) === 'grid' ? styles.textButtonActive : null]}
        >
          Grid
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  gridButton:
  {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: colors.highlights,
    borderWidth: 2,
    backgroundColor: colors.base,
  },
  GridButtonActive: {
    backgroundColor: colors.highlights,
  },
  textButton: {
    color: colors.highlights,
    textAlign: "center",
  },
  textButtonActive: {
    color: colors.darkBase,
  },
});

export default observer(GridButton);