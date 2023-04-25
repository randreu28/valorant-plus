import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import Grid from '../components/Grid'
import { useEffect, useState } from 'react'
import { getAgents } from '../api'
import { colors } from '../lib/colors'

const AgentsScreen = () => {

    const [agents, setAgents] = useState(null);

    useEffect(() => {
        getAgents()
            .then(setAgents)
            .catch(error => console.error(error));
    }, []);

    return (
        <View style={styles.screen}>
            {agents !== null ? (
                <View>
                    <Grid items={agents} />
                </View>
            ) : (
                <View style={styles.centered}>
                    <Text>Loading...</Text>
                    <ActivityIndicator color="blue" size="large"></ActivityIndicator>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    screen:{
        backgroundColor: colors.base,
    } 
});

export default AgentsScreen