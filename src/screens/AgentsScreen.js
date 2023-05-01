import { View, Text, StyleSheet, ActivityIndicator, SafeAreaView, ScrollView, Button } from 'react-native'
import React from 'react'
import Grid from '../components/Grid'
import { useEffect, useState } from 'react'
import { getAgents, getIntroSlides, getWeapons } from '../api'
import { colors } from '../lib/colors'
import GridItem from '../components/GridItem'
import Slider from '../components/Slider'
import { useNavigation } from "@react-navigation/native";

const AgentsScreen = () => {


    const navigation = useNavigation();

    const [agents, setAgents] = useState(null);
    const [weapons, setWeapons] = useState(null);
    const [introSlides, setIntroSlides] = useState(null);

    useEffect(() => {
        getAgents()
            .then(setAgents)
            .catch(error => console.error(error));
        getWeapons()
            .then(setWeapons)
            .catch(error => console.error(error));
        getIntroSlides()
            .then(setIntroSlides)
            .catch(error => console.error(error));
    }, []);

    return (
        <ScrollView>
            <View>
                <Button title='Agents Details' onPress={() => navigation.navigate("AgentsDetails")}></Button>

                {(agents !== null && weapons !== null) ? (
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
                            <GridItem title={agents[0].displayName} imageUrl={agents[0].displayIcon} id={agents[0].uuid} />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>GridItem (size = 'large')</Text>
                            <GridItem title={agents[0].displayName} imageUrl={agents[0].displayIcon} id={agents[0].uuid} size="large" />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>GridItem (size = 'full-width')</Text>
                            <GridItem title={agents[0].displayName} imageUrl={agents[0].displayIcon} id={agents[0].uuid} size="full-width" />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>GridItem (button = false)</Text>
                            <GridItem title={agents[0].displayName} imageUrl={agents[0].displayIcon} id={agents[0].uuid} button={false} />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>GridItem (buttonType = 'favorite')</Text>
                            <GridItem title={agents[0].displayName} imageUrl={agents[0].displayIcon} id={agents[0].uuid} buttonType="favorite" />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>GridItem (imageBg = '#0c1823')</Text>
                            <GridItem title={agents[0].displayName} imageUrl={agents[0].displayIcon} id={agents[0].uuid} imageBg={colors.darkBase} />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>GridItem (imageType = 'center')</Text>
                            <GridItem title={agents[0].displayName} imageUrl={agents[0].displayIcon} id={agents[0].uuid} imageType='center' />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>GridItem without item info ( title = 'Lorem ipsum')</Text>
                            <GridItem title="Lorem ipsum" />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>GridItem without item info ( title = 'Lorem ipsum')</Text>
                            <GridItem title="Lorem ipsum" size='large' />
                        </View>

                        <View style={[styles.componentWrapper, { height: 400, overflow: 'hidden' }]}>
                            <Text style={styles.componentTitle}>Grid</Text>
                            <Grid items={agents} />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>Grid (isSingleLine = true)</Text>
                            <Grid items={agents} isSingleLine={true} />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>Grid Weapons</Text>
                            <Grid items={weapons} imageType='center' />
                        </View>

                    </View>

                ) : (
                    <View style={styles.centered}>
                        <Text>Loading...</Text>
                        <ActivityIndicator color={colors.neutral} size="large"></ActivityIndicator>
                    </View>
                )}
            </View>
        </ScrollView>
    )
}

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
        backgroundColor: '#ffffff0d',
        borderWidth: 2,
        padding: 10,
        marginBottom: 10,
    },
    componentTitle: {
        color: 'white',
        marginBottom: 10,
    }
});

export default AgentsScreen