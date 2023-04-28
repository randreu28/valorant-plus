import { View, Text, StyleSheet, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Grid from '../components/Grid'
import { useEffect, useState } from 'react'
import { getAgents } from '../api'
import { colors } from '../lib/colors'
import GridItem from '../components/GridItem'

const AgentsScreen = () => {

    const [agents, setAgents] = useState(null);

    useEffect(() => {
        getAgents()
            .then(setAgents)
            .catch(error => console.error(error));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {agents !== null ? (

                    <View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>GridItem (size = 'normal')</Text>
                            <GridItem item={agents[0]} size="normal" />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>GridItem (size = 'large')</Text>
                            <GridItem item={agents[0]} size="large" />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>GridItem (size = 'full-width')</Text>
                            <GridItem item={agents[0]} size="full-width" />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>GridItem (button = false)</Text>
                            <GridItem item={agents[0]} button={false} />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>GridItem (buttonType = 'favorite')</Text>
                            <GridItem item={agents[0]} buttonType="favorite" />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>GridItem (imageBg = '#0c1823')</Text>
                            <GridItem item={agents[0]} imageBg={colors.darkBase} />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>GridItem (imageType = 'center')</Text>
                            <GridItem item={agents[0]} imageType='center' />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>GridItem without item info ( title = 'Lorem ipsum')</Text>
                            <GridItem title="Lorem ipsum" />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>GridItem without item info ( title = 'Lorem ipsum')</Text>
                            <GridItem title="Lorem ipsum" size='large' />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>Grid</Text>
                            <Grid items={agents} />
                        </View>

                        <View style={styles.componentWrapper}>
                            <Text style={styles.componentTitle}>Grid (singleLine = true)</Text>
                            <Grid items={agents} singleLine={true} />
                        </View>

                    </View>

                ) : (
                    <View style={styles.centered}>
                        <Text>Loading...</Text>
                        <ActivityIndicator color="blue" size="large"></ActivityIndicator>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: colors.base,
        padding: 20,
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