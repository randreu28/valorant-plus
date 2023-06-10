import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../lib/colors";
import { FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function AgentDetail({
  icon,
  rol,
  quote,
  inforol,
  bg,
  agent,
  soundUrl,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundObject = new Audio.Sound();
  const playSound = async () => {
    if (!isPlaying) {
      try {
        const { sound } = await Audio.Sound.createAsync(
          { uri: soundUrl },
          { shouldPlay: true },
          (status) => {
            if (status.didJustFinish) {
              setIsPlaying(false);
            }
          }
        );
        setIsPlaying(true);
      } catch (error) {
        console.log("Error en la reproducció del fitxer de so:", error);
      }
    }
  };

  useEffect(() => {
    playSound();
  }, []);

  return (
    <View style={styles.detailsGlobalView}>
      <View style={styles.detailsTitleView}>
        <Image
          style={styles.detailsIconView}
          source={{
            uri: icon,
          }}
        />
        <Text style={styles.detailsTitleText}>{rol}</Text>
      </View>
      <View style={styles.detailsBgWrapper}>
        <Image
          style={styles.detailsBgImg}
          source={{
            uri: bg,
          }}
        />
      </View>
      <View
        style={{
          ...styles.detailsAgentImg,
        }}
      >
        <Image
          style={{ height: 600 }}
          source={{
            uri: agent,
          }}
        />
        <LinearGradient
          colors={["transparent", colors.darkBase]}
          style={styles.gradient}
        />
      </View>
      <View style={styles.detailsinfoView}>
        <Pressable onPress={playSound}>
          <FontAwesome
            name="music"
            size={30}
            color={isPlaying ? colors.highlights : colors.details}
            style={{ marginBottom: 10 }}
          />
        </Pressable>
        <View style={styles.detailsquoteView}>
          <Text style={styles.detailsquoteText}>{quote}</Text>
        </View>
      </View>

      <View style={styles.detailsiconView}>
        <Image
          style={styles.detailsiconImg}
          source={{
            uri: icon,
          }}
        />
        <View style={styles.detailsinforolView}>
          <Text style={styles.detailsinforolText}>{inforol}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsGlobalView: {
    alignContent: "center",
    alignItems: "center",
  },
  detailsTitleView: {
    alignContent: "center",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  detailsIconView: {
    width: 15,
    height: 15,
    tintColor: colors.details,
  },
  detailsTitleText: {
    fontSize: 20,
    color: colors.details,
    fontFamily: "tungsten",
    textAlign: "center",
  },
  detailsBgWrapper: {
    height: 400,
    width: 400,
    overflow: "hidden",
    position: "absolute",
  },
  detailsBgImg: {
    height: 600,
    position: "absolute",
    opacity: 0.1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  detailsAgentImg: {
    width: 400,
    height: 400,
    overflow: "hidden",
  },
  detailsinfoView: {
    alignContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 10,
    gap: 10,
  },
  detailsquoteView: {
    flex: 1,
    alignContent: "flex-start",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 10,
  },
  detailsquoteText: {
    fontSize: 16,
    color: "white",
    fontFamily: "tungsten",
    textAlign: "center",
  },
  detailsiconView: {
    alignContent: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 25,
  },
  detailsiconImg: {
    width: 30,
    height: 30,
    tintColor: colors.details,
  },
  detailsinforolView: {
    flex: 1,
    alignContent: "flex-start",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 10,
  },
  detailsinforolText: {
    fontSize: 12,
    color: colors.details,
    textAlign: "center",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
  },
});
