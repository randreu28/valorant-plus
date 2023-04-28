import { View, Text, StyleSheet } from 'react-native'
import { React, useState, useEffect } from 'react'
import GridItem from './GridItem'

const Grid = ({ items, singleLine = false, imageBg, size, button, buttonType }) => {

    const [isSingleLine, setisSingleLine] = useState(singleLine);

    useEffect(() => {
        setisSingleLine(singleLine);
    }, [singleLine]);

    return (
        <View>
            {items === null ?
                (
                    <View>
                        <Text>Loading...</Text>
                    </View>
                ) : (
                    <View style={[styles.gridItemWrapper, isSingleLine ? styles.gridItemWrapperSingleLine : null]}>
                        {items.map((item) =>
                            <GridItem
                                key={item.uuid}
                                item={item}
                                imageBg={imageBg}
                                size={size}
                                button={button}
                                buttonType={buttonType}
                            />
                        )}
                    </View>
                )
            }
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