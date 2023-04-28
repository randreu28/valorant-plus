import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { React } from 'react'
import { colors } from '../lib/colors'
import GridItem from './GridItem'

const Grid = ({ items, isSingleLine = false, imageBg, imageType, size, button, buttonType }) => {

    if (!items) {
        return (
            <View>
                <ActivityIndicator color={colors.neutral} size="large"></ActivityIndicator>
            </View>
        );
    }

    return (
        <View style={[styles.gridItemWrapper, isSingleLine ? styles.gridItemWrapperSingleLine : null]}>
            {items.map((item) =>
                <GridItem
                    key={item.uuid}
                    item={item}
                    imageBg={imageBg}
                    imageType={imageType}
                    size={size}
                    button={button}
                    buttonType={buttonType}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    gridItemWrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 10,
        justifyContent: 'flex-start',
        alignContent: 'space-around',
        gap: 20,
    },
    gridItemWrapperSingleLine: {
        flexWrap: 'nowrap',
        overflow: 'scroll',
    },
});

export default Grid;