import { View, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const Slide = ({ item, mode }) => {
    return (
        <ImageBackground source={{ uri: item.background, }} resizeMode={mode === 'intro' ? 'contain' : 'cover'} style={[styles.backgroundImage, mode === 'intro' ? styles.backgroundImageIntro : null ]} imageStyle={[styles.backgroundImageStyle, mode === 'intro' ? styles.backgroundImageStyleIntro : null]} >
            <Image style={[ styles.image, mode === 'intro' ? styles.imageIntro : null ]} source={{ uri: item.displayIcon, }} />
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
    imageIntro: {
        width: '100%',
        height: '90%',
        maxWidth: '100%',
        resizeMode: 'cover',
        top: '-10%'
    },
    backgroundImage: {
        width: '100%',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    backgroundImageStyle: {
        opacity: 0.1,
    },
    backgroundImageStyleIntro: {
        opacity: 1,
        maxHeight: '90%',
    },
});

export default Slide