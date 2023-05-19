import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { colors } from "../lib/colors";
import { FontAwesome } from "@expo/vector-icons";
import { Audio } from 'expo-av';
import { useState, useEffect } from "react";

export default function AgentDetail({ icon, rol, quote, inforol, bg, agent, soundUrl }) {

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
        console.log('Error en la reproducció del fitxer de so:', error);
      }
    }
  };

  useEffect(() => {
    playSound();
  }, []);

  return (
    <View
      style={{
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          alignContent: "center",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 15, height: 15, tintColor: colors.details }}
          source={{
            uri: icon,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: colors.details,
            fontFamily: "tungsten",
            textAlign: "center",
          }}
        >
          {rol}
        </Text>
      </View>
      <Image
        style={{
          height: 500,
          position: "absolute",
          opacity: 0.1,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        source={{
          uri: bg,
        }}
      />
      <Image
        style={{ width: 400, height: 400 }}
        source={{
          uri: agent,
        }}
      />
      <View
        style={{
          alignContent: "center",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 50,
          paddingVertical: 10,
          gap: 10,
        }}
      >
        <Pressable onPress={playSound}>
          <FontAwesome
            name="music"
            size={30}
            color={isPlaying ? colors.highlights : colors.details}
            style={{ marginBottom: 10 }}
          />
        </Pressable>
        <View
          style={{
            flex: 1,
            alignContent: "flex-start",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "white",
              fontFamily: "tungsten",
              textAlign: "center",
            }}
          >
            {quote}
          </Text>
        </View>
      </View>

      <View
        style={{
          alignContent: "center",
          flexDirection: "row",
          alignItems: "center",
          padding: 25,
        }}
      >
        <Image
          style={{ width: 30, height: 30, tintColor: colors.details }}
          source={{
            uri: icon,
          }}
        />
        <View
          style={{
            flex: 1,
            alignContent: "flex-start",
            flexDirection: "column",
            alignItems: "flex-start",

            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: colors.details,
              textAlign: "center",
            }}
          >
            {inforol}
          </Text>
        </View>
      </View>
    </View>
  );
}
