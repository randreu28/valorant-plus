import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { getIntroSlides } from "../api";
import Loading from "../components/Loading";
import Slider from "../components/Slider";

const IntroScreen = () => {
  const [introSlides, setIntroSlides] = useState(false);
  useEffect(() => {
    getIntroSlides()
      .then(setIntroSlides)
      .catch((error) => console.error(error));
  }, []);

  if (!introSlides) {
    return (
      <View style={styles.loaderWrapper}>
        <Loading />
      </View>
    );
  } else {
    return <Slider mode="intro" items={introSlides} />;
  }
};

const styles = StyleSheet.create({
  loaderWrapper: {
    flex: 1,
    justifyContent: "center",
  },
});

export default IntroScreen;
