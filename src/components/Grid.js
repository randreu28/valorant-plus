import {
  View,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
} from "react-native";
import { React } from "react";
import { colors } from "../lib/colors";
import GridItem from "./GridItem";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Title from "./Title";

/**
 *
 *@param {{
 *  items: Array,
 *  horizontalScroll?: [boolean],
 *  imageBg?: ,
 *}} Props
 */

const Grid = ({
  context,
  items,
  horizontalScroll = false,
  columns,
  imageBg,
  imageType,
  size,
  button,
  buttonType,
  title,
}) => {
  const space = 20;

  if (!horizontalScroll) {
    if (columns === undefined) {
        const windowWidth = Dimensions.get("window").width;
        columns = Math.floor(windowWidth / 180);
    }
  }

  if (!items) {
    return (
      <View>
        <ActivityIndicator
          color={colors.neutral}
          size="large"
        ></ActivityIndicator>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={horizontalScroll}
        numColumns={!horizontalScroll ? columns : 1}
        data={items}
        renderItem={({ item }) => (
          <View
            style={
              horizontalScroll
                ? { marginRight: 20 }
                : { height: "100%", marginBottom: space }
            }
          >
            <GridItem
              key={item.uuid}
              context={context}
              item={item}
              id={item.uuid}
              title={item.displayName}
              imageUrl={item.displayIcon}
              imageBg={imageBg}
              imageType={imageType}
              size={size}
              button={button}
              buttonType={buttonType}
            />
          </View>
        )}
        keyExtractor={(item) => item.uuid}
        columnWrapperStyle={
          !horizontalScroll && columns !== 1 ? { justifyContent: "space-around" } : null
        }
        ListHeaderComponent={
          title ? (
            <View>
              <Title isHeader>{title}</Title>
            </View>
          ) : null
        }
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "95%",
  },
});

export default Grid;
