import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableHighlight, View, StyleSheet } from "react-native";
import { colors } from "../lib/colors";
import { state } from "../state";
import { observer } from "mobx-react-lite";

function EditButton() {
  const isEditing = state.profileEditable;

  return (
    <TouchableHighlight
      onPress={() => state.toggleEditable()}
      style={{
        ...styles.border,
        backgroundColor: isEditing ? colors.highlights : colors.base,
      }}
    >
      <View
        style={styles.align}
      >
        <MaterialCommunityIcons
          name="pencil"
          size={18}
          color={isEditing ? colors.darkBase : colors.highlights}
        />
        <Text
          style={{
            ...styles.text,
            color: isEditing ? colors.darkBase : colors.highlights,
          }}
        >
          Edit
        </Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center"
  },
  border: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: colors.highlights,
    borderWidth: 2,
  },
  align: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default observer(EditButton);
