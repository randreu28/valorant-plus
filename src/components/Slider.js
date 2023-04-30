import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  Animated,
} from "react-native";
import React, { useState, useEffect } from "react";
import ArrowLeftIcon from "./icons/ArrowLeftIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import ArrowUpIcon from "./icons/ArrowUpIcon";
import Slide from "./Slide";
import { colors } from "../lib/colors";
import DecorationWeaponLeft from "./icons/DecorationWeaponLeft";
import DecorationWeaponRight from "./icons/DecorationWeaponRight";
import DecorationAgentLeft from "./icons/DecorationAgentLeft";
import DecorationAgentRight from "./icons/DecorationAgentRight";

const Slider = ({ items, mode = "agents" }) => {
  let newItemAnimation;
  const [previousItem, setPreviousItem] = useState(items.length - 1);
  const [currentItem, setCurrentItem] = useState(0);
  const [nextItem, setNextItem] = useState(1);

  useEffect(() => {
    currentItemFadeAnimation.setValue(1);
    previousItemFadeAnimation.setValue(0);
    nextItemFadeAnimation.setValue(0);
  }, [currentItem, nextItem, previousItem]);

  const currentItemFadeAnimation = new Animated.Value(1);
  const previousItemFadeAnimation = new Animated.Value(0);
  const nextItemFadeAnimation = new Animated.Value(0);

  let buttonsColor, buttonsColorPressed, showButtonUp;
  switch (mode) {
    case "skins":
      buttonsColor = colors.neutral;
      buttonsColorPressed = colors.highlights;
      showButtonUp = false;
      break;
    default:
      buttonsColor = colors.highlights;
      buttonsColorPressed = colors.neutral;
      showButtonUp = true;
      break;
  }

  const viewItem = (direction) => {
    let newItem;
    if (currentItem === 0 && direction === -1) {
      newItem = items.length - 1;
    } else if (currentItem === items.length - 1 && direction === 1) {
      newItem = 0;
    } else {
      newItem = currentItem + direction;
    }
    if (direction === -1) {
      newItemAnimation = previousItemFadeAnimation;
    } else {
      newItemAnimation = nextItemFadeAnimation;
    }
    currentItemFadeAnimation.stopAnimation();
    newItemAnimation.stopAnimation();
    fadeTo(newItem);
  };

  const goToItem = () => {
    return () => {
      if (mode === "agents" || mode === "weapons") {
        console.log("Go to item " + items[currentItem].uuid);
      }
    };
  };

  const fadeTo = (newItem) => {
    Animated.parallel([
      Animated.timing(currentItemFadeAnimation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(newItemAnimation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setNewSliderStates(newItem);
    });
  };

  function setNewSliderStates(newItem) {
    setCurrentItem(newItem);
    if (newItem === 0) {
      setPreviousItem(items.length - 1);
    } else {
      setPreviousItem(newItem - 1);
    }
    if (newItem === items.length - 1) {
      setNextItem(0);
    } else {
      setNextItem(newItem + 1);
    }
  }

  if (!items) {
    return (
      <View>
        <ActivityIndicator size="large" color={colors.neutral} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.swipeButton, styles.swipeButtonLeft]}
        onPress={() => viewItem(-1)}>
        {({ pressed }) => (
          <ArrowLeftIcon color={pressed ? buttonsColorPressed : buttonsColor} />
        )}
      </Pressable>
      <Pressable
        style={[styles.swipeButton, styles.swipeButtonRight]}
        onPress={() => viewItem(1)}>
        {({ pressed }) => (
          <ArrowRightIcon color={pressed ? buttonsColorPressed : buttonsColor} />
        )}
      </Pressable>

      <Pressable style={styles.slideWrapper} onPress={goToItem()}>
        {({ pressed }) => (
          <>
            {showButtonUp ? (mode === "agents" ? (
              <View style={[styles.decoration, styles.decorationAgentLeft]}>
                <DecorationAgentLeft />
              </View>
            ) : mode === "weapons" ? (
              <View style={[styles.decoration, styles.decorationWeaponLeft]}>
                <DecorationWeaponLeft />
              </View>
            ) : null) : null}
            <Animated.View style={[styles.slide, { opacity: previousItemFadeAnimation }]}>
              <Slide item={items[previousItem]} />
            </Animated.View>
            <Animated.View style={[styles.slide, { opacity: currentItemFadeAnimation }]}>
              <Slide item={items[currentItem]} />
            </Animated.View>
            <Animated.View style={[styles.slide, { opacity: nextItemFadeAnimation }]}>
              <Slide item={items[nextItem]} />
            </Animated.View>
            {mode === "agents" ? (
              <View style={[styles.decoration, styles.decorationAgentRight]}>
                <DecorationAgentRight />
              </View>
            ) : mode === "weapons" ? (
              <View style={[styles.decoration, styles.decorationWeaponRight]}>
                <DecorationWeaponRight />
              </View>
            ) : null}
            <View style={styles.callToAction}>
              <Animated.View style={[styles.titleWrapper, { opacity: previousItemFadeAnimation }, mode === 'skins' ? {bottom: 0} : null]}>
                <Text style={[styles.title, mode === "skins" ? styles.titleSkins : null]}>
                  {items[previousItem].displayName}
                </Text>
              </Animated.View>
              <Animated.View style={[styles.titleWrapper, { opacity: currentItemFadeAnimation }, mode === 'skins' ? {bottom: 0} : null]}>
                <Text style={[styles.title, mode === "skins" ? styles.titleSkins : null]}>
                  {items[currentItem].displayName}
                </Text>
              </Animated.View>
              <Animated.View style={[styles.titleWrapper, { opacity: nextItemFadeAnimation }, mode === 'skins' ? {bottom: 0} : null]}>
                <Text style={[styles.title, mode === "skins" ? styles.titleSkins : null]}>
                  {items[nextItem].displayName}
                </Text>
              </Animated.View>
              {mode === "agents" || mode === "weapons" ? (
                <View style={styles.buttonUp}>
                  <ArrowUpIcon color={pressed ? buttonsColorPressed : buttonsColor} />
                </View>
              ) : null}
            </View>
          </>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#000",
    overflow: "hidden",
  },
  swipeButton: {
    position: "absolute",
    top: "50%",
    marginTop: -19,
    zIndex: 3,
  },
  swipeButtonLeft: {
    left: 5,
  },
  swipeButtonRight: {
    right: 5,
  },
  buttonUp: {
    position: "absolute",
    bottom: 0,
  },
  callToAction: {
    position: "absolute",
    bottom: 0,
    left: 0,
    textAlign: "center",
    alignItems: "center",
    width: "100%",
    height: '100%',
    zIndex: 3,
  },
  titleWrapper: {
    position: "absolute",
    bottom: 50,
  },
  title: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "tungsten",
    marginBottom: 0,
    textTransform: "uppercase",
    textAlign: "center",
  },
  titleSkins: {
    fontSize: 30,
    textTransform: "capitalize",
  },
  slideWrapper: {
    flex: 1,
    zIndex: 2,
  },
  slide: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 2,
  },
  decoration: {
    position: "absolute",
    bottom: 0,
    zIndex: 0,
  },
  decorationAgentLeft: {
    left: 50,
  },
  decorationAgentRight: {
    right: 50,
  },
  decorationWeaponLeft: {
    left: -40,
  },
  decorationWeaponRight: {
    right: -50,
  },
});

export default Slider;
