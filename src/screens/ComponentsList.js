import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getAgents, getIntroSlides, getWeapons } from "../api";
import Ability from "../components/Ability";
import AgentDetail from "../components/AgentDetail";
import FavoriteButton from "../components/FavoriteButton";
import Grid from "../components/Grid";
import GridButton from "../components/GridButton";
import GridItem from "../components/GridItem";
import PlayerCard from "../components/PlayerCard";
import PlayerTitle from "../components/PlayerTitle";
import SearchBar from "../components/SearchBar";
import SeeMoreButton from "../components/SeeMoreButton";
import Slider from "../components/Slider";
import Title from "../components/Title";
import WeaponStats from "../components/WeaponStats";
import { colors } from "../lib/colors";
import MapItemScreen from "./maps/MapItemScreen";

const ComponentsList = () => {
  const navigation = useNavigation();

  const [agents, setAgents] = useState(null);
  const [weapons, setWeapons] = useState(null);
  const [introSlides, setIntroSlides] = useState(null);

  useEffect(() => {
    getAgents()
      .then(setAgents)
      .catch((error) => console.error(error));
    getWeapons()
      .then(setWeapons)
      .catch((error) => console.error(error));
    getIntroSlides()
      .then(setIntroSlides)
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView>
      <View style={styles.componentWrapper}>
        <Text style={styles.componentTitle}>Title</Text>
        <Title>MAIN TITLE</Title>
      </View>

      <View style={styles.componentWrapper}>
        <Text style={styles.componentTitle}>Title (header)</Text>
        <Title isHeader>PAGE TITLE</Title>
      </View>

      <View style={styles.componentWrapper}>
        <Text style={styles.componentTitle}>Title (with subtitle)</Text>
        <Title subtitle="PAGE TITLE">DETAIL PAGE TITLE</Title>
      </View>

      <View style={styles.componentWrapper}>
        <Text style={styles.componentTitle}>Subtitle</Text>
        <Title subtitle="Subtitle"> </Title>
      </View>

      <View style={[styles.componentWrapper, { height: 700 }]}>
        <Text style={styles.componentTitle}>Player card</Text>
        <PlayerCard
          playerRank="https://media.valorant-api.com/competitivetiers/edb72a72-7e6d-6010-9591-7c053bbdbf48/13/largeicon.png"
          playerTitle="Spicy"
          playerCard="https://media.valorant-api.com/playercards/33c1f011-4eca-068c-9751-f68c788b2eee/largeart.png"
        />
      </View>

      <View style={[styles.componentWrapper, { height: 700 }]}>
        <Text style={styles.componentTitle}>Player card (editable)</Text>
        <PlayerCard
          isEditable
          playerCard="https://media.valorant-api.com/playercards/fc209787-414b-10d0-dcac-04832fc2c654/largeart.png"
          playerRank="https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/11/largeicon.png"
          playerTitle="King"
        />
      </View>

      <View style={[styles.componentWrapper, { height: 700 }]}>
        <Text style={styles.componentTitle}>Player card (without iamges)</Text>
        <PlayerCard isEditable />
      </View>

      <View style={[styles.componentWrapper, { width: 150 }]}>
        <Text style={styles.componentTitle}>Grid Button</Text>
        <GridButton />
      </View>

      <View style={[styles.componentWrapper, { width: 150 }]}>
        <Text style={styles.componentTitle}>Favorite button</Text>
        <FavoriteButton />
      </View>

      <View style={[styles.componentWrapper, { width: 150 }]}>
        <Text style={styles.componentTitle}>See more button</Text>
        <SeeMoreButton onPress={() => null} />
      </View>

      <View style={styles.componentWrapper}>
        <Text style={styles.componentTitle}>Player title</Text>
        <PlayerTitle>Catalyst</PlayerTitle>
      </View>

      <View style={styles.componentWrapper}>
        <Text style={styles.componentTitle}>Player title Search bar</Text>
        <SearchBar />
      </View>

      <View style={styles.componentWrapper}>
        <Text style={styles.componentTitle}>Agent detail</Text>
        <AgentDetail
          icon="https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png"
          rol="INITIATOR"
          quote="Gekko the Angeleno leads...to regroup and go again."
          inforol="Initiators challenge angles by setting up their team to enter
      contested ground and push defenders away."
          bg="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/background.png"
          agent="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png"
        />
      </View>

      <View style={styles.componentWrapper}>
        <Text style={styles.componentTitle}>Agent abiliy</Text>
        <Ability
          image="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability1/displayicon.png"
          title="Wingman"
          description="EQUIP Wingman. FIRE to send Wingman forward seeking enemies. Wingman
          unleashes a concussive blast toward the first enemy he sees ALT FIRE
          when targeting a Spike site or planted Spike to have Wingman defuse or
          plant the Spike. To plant, Gekko must have the Spike in his inventory.
          When Wingman expires he reverts into a dormant globule INTERACT to
          reclaim the globule and gain another Wingman charge after a short
          cooldown."
        />
      </View>

      <View style={styles.componentWrapper}>
        <Text style={styles.componentTitle}>Weapon stats</Text>
        <WeaponStats
          fireRate={4}
          magCapacity={30}
          reloadTime={4}
          head={182}
          body={95}
          legs={55}
        />
      </View>

      <View style={styles.componentWrapper}>
        <Text style={styles.componentTitle}>
          Weapon stats (with color interpolation)
        </Text>
        <WeaponStats
          fireRate={2}
          magCapacity={100}
          reloadTime={6}
          head={130}
          body={30}
          legs={150}
        />
      </View>

      <View style={[styles.componentWrapper, { height: 700 }]}>
        <Text style={styles.componentTitle}>Map item</Text>
        <MapItemScreen />
      </View>

      <View>
        {agents !== null && weapons !== null && introSlides !== null ? (
          <View>
            <View style={[styles.componentWrapper, { height: 600 }]}>
              <Text style={styles.componentTitle}>Slider (mode=intro)</Text>
              <Slider items={introSlides} mode="intro" />
            </View>

            <View style={[styles.componentWrapper, { height: 600 }]}>
              <Text style={styles.componentTitle}>Slider (mode=agents)</Text>
              <Slider items={agents} mode="agents" />
            </View>

            <View style={[styles.componentWrapper, { height: 600 }]}>
              <Text style={styles.componentTitle}>Slider (mode=weapons)</Text>
              <Slider items={weapons} mode="weapons" />
            </View>

            <View style={[styles.componentWrapper, { height: 300 }]}>
              <Text style={styles.componentTitle}>Slider (mode=skins)</Text>
              <Slider items={weapons[0].skins} mode="skins" />
            </View>

            <View style={styles.componentWrapper}>
              <Text style={styles.componentTitle}>GridItem</Text>
              <GridItem
                title={agents[0].displayName}
                imageUrl={agents[0].displayIcon}
                id={agents[0].uuid}
              />
            </View>

            <View style={styles.componentWrapper}>
              <Text style={styles.componentTitle}>
                GridItem (size = 'large')
              </Text>
              <GridItem
                title={agents[0].displayName}
                imageUrl={agents[0].displayIcon}
                id={agents[0].uuid}
                size="large"
              />
            </View>

            <View style={styles.componentWrapper}>
              <Text style={styles.componentTitle}>
                GridItem (size = 'full-width')
              </Text>
              <GridItem
                title={agents[0].displayName}
                imageUrl={agents[0].displayIcon}
                id={agents[0].uuid}
                size="full-width"
              />
            </View>

            <View style={styles.componentWrapper}>
              <Text style={styles.componentTitle}>
                GridItem (button = false)
              </Text>
              <GridItem
                title={agents[0].displayName}
                imageUrl={agents[0].displayIcon}
                id={agents[0].uuid}
                button={false}
              />
            </View>

            <View style={styles.componentWrapper}>
              <Text style={styles.componentTitle}>
                GridItem (buttonType = 'favorite')
              </Text>
              <GridItem
                title={agents[0].displayName}
                imageUrl={agents[0].displayIcon}
                id={agents[0].uuid}
                buttonType="favorite"
              />
            </View>

            <View style={styles.componentWrapper}>
              <Text style={styles.componentTitle}>
                GridItem (imageBg = '#0c1823')
              </Text>
              <GridItem
                title={agents[0].displayName}
                imageUrl={agents[0].displayIcon}
                id={agents[0].uuid}
                imageBg={colors.darkBase}
              />
            </View>

            <View style={styles.componentWrapper}>
              <Text style={styles.componentTitle}>
                GridItem (imageType = 'center')
              </Text>
              <GridItem
                title={agents[0].displayName}
                imageUrl={agents[0].displayIcon}
                id={agents[0].uuid}
                imageType="center"
              />
            </View>

            <View style={styles.componentWrapper}>
              <Text style={styles.componentTitle}>
                GridItem without item info ( title = 'Lorem ipsum')
              </Text>
              <GridItem title="Lorem ipsum" />
            </View>

            <View style={styles.componentWrapper}>
              <Text style={styles.componentTitle}>
                GridItem without item info ( title = 'Lorem ipsum')
              </Text>
              <GridItem title="Lorem ipsum" size="large" />
            </View>

            <View
              style={[
                styles.componentWrapper,
                { height: 400, overflow: "hidden" },
              ]}
            >
              <Text style={styles.componentTitle}>Grid</Text>
              <Grid items={agents} />
            </View>

            <View style={styles.componentWrapper}>
              <Text style={styles.componentTitle}>
                Grid (isSingleLine = true)
              </Text>
              <Grid items={agents} isSingleLine={true} />
            </View>
          </View>
        ) : (
          <View style={styles.centered}>
            <Text>Loading...</Text>
            <ActivityIndicator
              color={colors.neutral}
              size="large"
            ></ActivityIndicator>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: colors.base,
    padding: 0,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  componentWrapper: {
    backgroundColor: colors.darkBase,
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
  },
  componentTitle: {
    color: "white",
    marginBottom: 10,
  },
});

export default ComponentsList;
