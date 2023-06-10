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
import { Text } from "react-native";

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
  listViewIcon,
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
        key={columns}
        horizontal={horizontalScroll}
        numColumns={!horizontalScroll ? columns : 1}
        data={items}
        renderItem={({ item, index }) => {

          let itemContext;
          switch (context) {
            case "favorites":
            case "daily":
              itemContext = item.context;
              console.log("itemContext: " + itemContext);
              break;
            default:
              itemContext = context;
              break;
          }

          let image;
          let text;
          let itemImageType;
          switch (itemContext) {
            case "maps":
              image = "listViewIcon";
              text = "displayName";
              itemImageType = "cover";
              break;
            case "weapons":
              image = "displayIcon";
              text = "displayName";
              itemImageType = "center";
              break;
            case "playerCard":
              image = "largeArt";
              text = "displayName";
              itemImageType = "cover";
              break;
            case "rankFavorite":
            case "rank":
              text = "tierName";
              image = "largeIcon";
              itemImageType = "center";
              break;
            default:
              image = "displayIcon";
              text = "displayName";
              break;
          }

          console.log('itemContext: ' + itemContext);

          itemImageType = itemContext === 'playerTitle' ? "center" : itemImageType;

          let itemButton;
          if (itemContext === 'playerTitle') {
            itemButton = false;
          } else {
            itemButton = button ? button : true;
          }

          return (

            <View
              style={
                horizontalScroll
                  ? { marginRight: 20 }
                  : { marginBottom: space }
              }
            >
              <>
                <GridItem
                  key={item.uuid}
                  context={itemContext}
                  item={item}
                  id={item.uuid}
                  title={item[text]}
                  imageUrl={item[image]}
                  imageBg={imageBg}
                  imageType={itemImageType}
                  size={size}
                  button={itemButton}
                  buttonType={buttonType}
                />
              </>
            </View>
          )
        }}
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
