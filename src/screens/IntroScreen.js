import { View, Text } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { getIntroSlides } from '../api'
import Loading from '../components/Loading'
import Slider from '../components/Slider'

const IntroScreen = () => {
    const [introSlides, setIntroSlides] = useState(false);
    useEffect(() => {
        getIntroSlides()
            .then(setIntroSlides)
            .catch((error) => console.error(error));
    }, []);

    if (!introSlides) {
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Loading />
        </View>
    } else {
        console.log('introSlides', introSlides);
        return (
            <>
                <Slider mode="intro" items={introSlides} />
            </>
        )
    }
}

export default IntroScreen