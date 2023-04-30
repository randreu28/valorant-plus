import { View, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const Slide = ({ item }) => {
    return (
        
            <ImageBackground source={{ uri: item.background, }} resizeMode="cover" style={styles.backgroundImage} imageStyle={{ opacity: 0.1 }} >
                <Image style={styles.image} source={{ uri: item.displayIcon, }} />
            </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        top: '-5%',
        width: '60%',
        height: '100%',
        minWidth: 200,
        minHeight: 200,
        maxWidth: 380,
        resizeMode: 'contain',
    },
    backgroundImage: {
        width: '100%',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Slide