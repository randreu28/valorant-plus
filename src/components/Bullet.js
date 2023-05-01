import { View, Text } from 'react-native'
import React from 'react'
import BulletIcon from './icons/BulletIcon'
import BulletActiveIcon from './icons/BulletActiveIcon'
import { useState } from 'react'
import { StyleSheet } from 'react-native'

const Bullet = ({isActive}) => {
    const [active, setActive] = useState(isActive);

    if (active === false) {
        return (
            <View style={styles.bulletWrapper}>
                <BulletIcon />
            </View>
        )
    } else {
        return (
            <View style={styles.bulletWrapper}>
                <BulletActiveIcon />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bulletWrapper: {
        marginHorizontal: 3,
    },
});

export default Bullet