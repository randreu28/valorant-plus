import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Bullet from './Bullet'

const Bullets = ({ num, activeNum }) => {
    const bulletArray = Array.from({ length: num }, (_, index) => index);
    return (
        <View style={styles.container}>
            {bulletArray.map((bulletIndex) => (
                <Bullet key={bulletIndex} isActive={bulletIndex === activeNum} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default Bullets;