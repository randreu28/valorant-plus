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
                    <View>
                        {items.map((item) => 
                            <View style={styles.gridItemWrapper} key={item.uuid}>
                                <GridItem 
                                    item={item} 
                                    imageBg={imageBg} 
                                    size={size} 
                                    button={button} 
                                    buttonType={buttonType} 
                                />
                            </View>)}
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    gridItemWrapper: {
        margin: 10,
    }
});

export default Grid;