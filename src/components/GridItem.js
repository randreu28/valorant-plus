import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../lib/colors';
import { useState, useEffect } from 'react';

export default function GridItem({item, imageBg = colors.highlights, size = 'normal', button = true, buttonType = 'more'}) {

  const [imgBg, setImgBg] = useState();
  const [btn, setBtn] = useState();
  const [imageSize, setImageSize] = useState({width: 100, height: 100});
  const [btnType, setBtnType] = useState();

  useEffect(() => {
    setImgBg(imageBg);
    setBtn(button);
    setBtnType(buttonType)
    switch (size) {
      case 'normal':
        setImageSize({width: 120, height: 111});
        break;
      case 'large':
        setImageSize({width: 141, height: 122});
        break;
    }
  }, [imageBg, button, size, buttonType]);

  return (
    <View style={styles.container}>
      <View style={styles.decorationTopLeft} />
      <View style={[styles.imageWrapper, {backgroundColor: imgBg}]}>
        <Image source={item.displayIconSmall} style={[styles.image]}></Image>
      </View>
      <Text style={styles.name}>{item.displayName}</Text>
      {btn ? btnType === 'more' ? <Text>See +</Text> : <Text>Favorite</Text> : null}
      <View style={styles.decorationBottomRight} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: "center",
    backgroundColor: colors.darkBase,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 18,
  },
  name: {
    color: colors.neutral,
    fontFamily: "tungsten",
    fontSize: 25,
    textTransform: "uppercase",
    marginTop: 5,
    marginBottom: 5,
  },
  decorationTopLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 18,
    height: 18,
    borderTopColor: colors.details,
    borderTopWidth: 1,
    borderLeftColor: colors.details,
    borderLeftWidth: 1,
  },
  decorationBottomRight: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 18,
    height: 18,
    borderBottomColor: colors.details,
    borderBottomWidth: 1,
    borderRightColor: colors.details,
    borderRightWidth: 1,
  },
  imageWrapper: {
    flex: 1,
    width: '100%',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 111,
    position: 'relative',
    left: '-20%',
  }
});