import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import GridItem from './GridItem'

const Grid = ({ items, imageBg, size, button, buttonType }) => {
    return (
        <View>
            {items === null ?
                (
                    <View>
                        <Text>Loading...</Text>
                    </View>
                ) : (
                    <View style={styles.gridItemWrapper}>
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
        justifyContent: 'space-between',
        alignContent: 'space-around',
        gap: 20,
    }
});

export default Grid;