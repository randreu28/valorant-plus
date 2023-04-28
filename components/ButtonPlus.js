import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../lib/colors';
import { useState, useEffect } from 'react';

const ButtonPlus = ({ type = 'more' }) => {

  const [btnText, setBtnText] = useState();

  useEffect(() => {
    switch (type) {
      case 'more':
        setBtnText('+ See more');
        break;
      case 'favorite':
        setBtnText('Favorite');
        break;
    }
  }, [type]);

  return (
    <View>
      <Text style={styles.button}>{btnText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    color: colors.highlights,
    borderWidth: 1,
    borderColor: colors.highlights,
    borderRadius: 100,
    backgroundColor: 'transparent',
    paddingVertical: 3,
    paddingHorizontal: 10,
  }
});

export default ButtonPlus;