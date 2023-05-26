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
import Bullets from "./Bullets";
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from "@react-navigation/native";
import { state } from "../state";
import { observer } from "mobx-react-lite";
import Title from "./Title";

/**
*
*@param {{
*  items: Array,
*  mode: "intro" | "agents" | "weapons" | "skins"
*}} Props
*
*/

const Slider = ({ items, mode = "agents" }) => {

  const navigation = useNavigation();

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

  let buttonsColor, buttonsColorPressed, showButtons, showButtonUp, showBullets;
  let skipButton = false;
  switch (mode) {
    case "skins":
      buttonsColor = colors.neutral;
      buttonsColorPressed = colors.highlights;
      showButtons = true;
      showButtonUp = false;
      break;
    case "intro":
      buttonsColor = colors.neutral;
      buttonsColorPressed = colors.highlights;
      showBullets = true;
      showButtons = false;
      showButtonUp = true;
      skipButton = true;
      break;
    default:
      showBullets = false;
      buttonsColor = colors.highlights;
      buttonsColorPressed = colors.neutral;
      showButtons = true;
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
        navigation.navigate(mode + 'Detail', { uuid: items[currentItem].uuid, item: items[currentItem] });
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

  function goToHome() {
    state.setIntroDone(true);
    navigation.navigate('Main');
  }

  if (!items) {
    return (
      <View>
        <ActivityIndicator size="large" color={colors.neutral} />
      </View>
    );
  }

  return (
    <>
      <GestureRecognizer style={[styles.container, mode === 'intro' ? styles.containerIntro : null]}
        onSwipeLeft={() => { mode !== 'intro' ? viewItem(1) : currentItem < items.length - 1 ? viewItem(1) : null }}
        onSwipeRight={() => { mode !== 'intro' ? viewItem(-1) : null }}
      >
        {mode === 'intro' && 
          <View style={styles.appTitleWrapper}>
            <Title>VALORANT+</Title>
          </View>
        }
        {showButtons ? (
          <>
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
          </>
        ) : null}

        <Pressable style={[styles.slideWrapper, mode === 'intro' ? styles.slideWrapperIntro : null]} onPress={goToItem()}>
          {({ pressed }) => (
            <>

              {/* LEFT DECORATION */}
              {showButtonUp ? (mode === "agents" ? (
                <View style={[styles.decoration, styles.decorationAgentLeft]}>
                  <DecorationAgentLeft />
                </View>
              ) : mode === "weapons" ? (
                <View style={[styles.decoration, styles.decorationWeaponLeft]}>
                  <DecorationWeaponLeft />
                </View>
              ) : null) : null}

              {/* SLIDE */}
              <Animated.View style={[styles.slide, mode === 'intro' ? styles.slideIntro : null, { opacity: previousItemFadeAnimation }]}>
                <Slide item={items[previousItem]} mode={mode} />
              </Animated.View>
              <Animated.View style={[styles.slide, mode === 'intro' ? styles.slideIntro : null, { opacity: currentItemFadeAnimation }]}>
                <Slide item={items[currentItem]} mode={mode} />
              </Animated.View>
              <Animated.View style={[styles.slide, mode === 'intro' ? styles.slideIntro : null, { opacity: nextItemFadeAnimation }]}>
                <Slide item={items[nextItem]} mode={mode} />
              </Animated.View>

              {/* RIGHT DECORATION */}
              {mode === "agents" ? (
                <View style={[styles.decoration, styles.decorationAgentRight]}>
                  <DecorationAgentRight />
                </View>
              ) : mode === "weapons" ? (
                <View style={[styles.decoration, styles.decorationWeaponRight]}>
                  <DecorationWeaponRight />
                </View>
              ) : null}

              {/* CALL TO ACTION */}
              <View style={[styles.callToAction, mode === 'intro' ? styles.callToActionIntro : null]}>
                <Animated.View style={[styles.titleWrapper, mode === "intro" ? styles.titleWrapperIntro : null, { opacity: previousItemFadeAnimation }, mode === 'skins' ? { bottom: 0 } : null]}>
                  <Text style={[styles.title, mode === "skins" ? styles.titleSkins : mode === 'intro' ? styles.titleIntro : null]}>
                    {items[previousItem].displayName}
                  </Text>
                </Animated.View>
                <Animated.View style={[styles.titleWrapper, mode === "intro" ? styles.titleWrapperIntro : null, { opacity: currentItemFadeAnimation }, mode === 'skins' ? { bottom: 0 } : null]}>
                  <Text style={[styles.title, mode === "skins" ? styles.titleSkins : mode === 'intro' ? styles.titleIntro : null]}>
                    {items[currentItem].displayName}
                  </Text>
                </Animated.View>
                <Animated.View style={[styles.titleWrapper, mode === "intro" ? styles.titleWrapperIntro : null, { opacity: nextItemFadeAnimation }, mode === 'skins' ? { bottom: 0 } : null]}>
                  <Text style={[styles.title, mode === "skins" ? styles.titleSkins : mode === 'intro' ? styles.titleIntro : null]}>
                    {items[nextItem].displayName}
                  </Text>
                </Animated.View>
                {mode === "agents" || mode === "weapons" || (mode === "intro" && currentItem === items.length - 1) ? (
                  <Pressable style={[styles.buttonUp, mode === 'intro' ? styles.buttonUpIntro : null]} onPress={() => goToHome() }>
                    <ArrowUpIcon color={pressed ? mode === 'intro' ? colors.neutral : buttonsColorPressed : mode === 'intro' ? colors.details : buttonsColor} />
                  </Pressable>
                ) : null}
              </View>
              {showBullets ? (
                <View style={styles.bulletsWrapper}>
                  <Bullets key={'bullet' + currentItem} num={items.length} activeNum={currentItem} />
                </View>
              ) : null}
            </>
          )}
        </Pressable>
        {skipButton ? (
        <Pressable style={styles.skipButtonWrapper} onPress={() => goToHome()}>
          <Text style={styles.skipButton}>Skip</Text>
        </Pressable>
      ) : null}
      </GestureRecognizer>
      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
  },
  containerIntro: {
    backgroundColor: colors.highlights,
  },
  appTitleWrapper: {
    marginTop: 60,
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
  buttonUpIntro: {
    bottom: 80,
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
  callToActionIntro: {
    position: 'relative',
    flex: 1,
  },
  titleWrapper: {
    position: "absolute",
    bottom: 50,
  },
  titleWrapperIntro: {
    bottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 50,
    fontFamily: "tungsten",
    marginBottom: 0,
    textTransform: "uppercase",
    textAlign: "center",
  },
  titleSkins: {
    fontSize: 30,
    textTransform: "capitalize",
  },
  titleIntro: {
    fontSize: 15,
    fontWeight: "normal",
    textTransform: "none",
  },
  slideWrapper: {
    flex: 1,
    zIndex: 2,
  },
  slideWrapperIntro: {
    flex: 5,
  },
  slide: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 2,
  },
  slideIntro: {

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
  bulletsWrapper: {
    position: "absolute",
    bottom: 10,
    left: 0,
    width: "100%",
    height: 50,
    zIndex: 10,
  },
  skipButtonWrapper: {
    
  },
  skipButton: {
    color: colors.neutral,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default observer(Slider);
