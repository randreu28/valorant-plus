import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import ArrowLeftIcon from './icons/ArrowLeftIcon'
import ArrowRightIcon from './icons/ArrowRightIcon'
import ArrowUpIcon from './icons/ArrowUpIcon'
import Slide from './Slide'
import { colors } from '../lib/colors'
import DecorationAgentLeft from './icons/DecorationAgentLeft'
import DecorationAgentRight from './icons/DecorationAgentRight'

const Slider = ({ items, mode = 'agent' }) => {

    let buttonsColor, showButtonUp;
    const [currentItem, setCurrentItem] = useState(0)

    switch (mode) {
        case 'skins':
            buttonsColor = colors.neutral;
            showButtonUp = false;
            break;
        default:
            buttonsColor = colors.highlights;
            showButtonUp = true;
            break;
    }

    if (!items) {
        return (
            <View>
                <ActivityIndicator size="large" color={colors.neutral} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Pressable style={[styles.swipeButton, styles.swipeButtonLeft]} onPress={viewItem(-1)}>
                <ArrowLeftIcon color={buttonsColor} />
            </Pressable>
            <Pressable style={[styles.swipeButton, styles.swipeButtonRight]} onPress={viewItem(1)}>
                <ArrowRightIcon color={buttonsColor} />
            </Pressable>

            <Pressable style={styles.buttonUp} onPress={goToItem()}>
                <Text style={[styles.title, mode === 'skins' ? styles.titleSkins : null]}>{items[currentItem].displayName}</Text>
                {mode === 'agent' ?
                    <ArrowUpIcon color={buttonsColor} />
                    : null}
            </Pressable>

            <Pressable onPress={goToItem()} style={styles.slideWrapper}>
                {mode === 'agent' ?
                    <View style={[styles.decorationAgent, styles.decorationAgentLeft]}>
                        <DecorationAgentLeft />
                    </View>
                    : null}
                <Slide item={items[currentItem]} />
                {mode === 'agent' ?
                    <View style={[styles.decorationAgent, styles.decorationAgentRight]}>
                        <DecorationAgentRight />
                    </View>
                    : null}
            </Pressable>
        </View>
    );

    function viewItem(direction) {
        return () => {
            if (currentItem === 0 && direction === -1) {
                setCurrentItem(items.length - 1)
            } else if (currentItem === items.length - 1 && direction === 1) {
                setCurrentItem(0)
            } else {
                setCurrentItem(currentItem + direction);
            }
        }
    }

    function goToItem() {
        return () => {
            if (mode === 'agent') {
                console.log('Go to item ' + items[currentItem].uuid);
            }
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#000',
        overflow: 'hidden',
    },
    swipeButton: {
        position: 'absolute',
        top: '50%',
        marginTop: -19,
        zIndex: 3,
    },
    swipeButtonLeft: {
        left: 10,
    },
    swipeButtonRight: {
        right: 10,
    },
    buttonUp: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
        zIndex: 3,
    },
    title: {
        color: '#fff',
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'Tungsten',
        marginBottom: 0,
        textTransform: 'uppercase',
    },
    titleSkins: {
        fontSize: 30,
        textTransform: 'capitalize',
    },
    slideWrapper: {
        flex: 1,
        zIndex: 2,
    },
    slide: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    decorationAgent: {
        position: 'absolute',
        bottom: -18,
        zIndex: 1,
    },
    decorationAgentLeft: {
        left: 60,
    },
    decorationAgentRight: {
        right: 60,
    },
});

export default Slider