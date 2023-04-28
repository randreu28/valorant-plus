import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../lib/colors';
import { useState, useEffect } from 'react';
import ButtonPlus from './ButtonPlus';
import ValorantLogo from './ValorantLogo';

export default function GridItem({ item, imageBg = colors.highlights, size = 'normal', button = true, buttonType = 'more', imageType = 'crop', title }) {

  const [imgBg, setImgBg] = useState();
  const [btn, setBtn] = useState();
  const [containerSize, setContainerSize] = useState({ width: 154, height: 208 });
  const [imgType, setImgType] = useState();
  const [btnType, setBtnType] = useState();

  useEffect(() => {
    setImgBg(imageBg);
    setBtn(button);
    setBtnType(buttonType);
    setImgType(imageType);
    switch (size) {
      case 'normal':
        setContainerSize({ width: 154, height: 208 });
        break;
      case 'large':
        setContainerSize({ width: 180, height: 220 });
        break;
      case 'full-width':
        setContainerSize({ width: '100%', height: 176 });
        break;
    }
  }, [imageBg, button, size, buttonType, imageType]);

  return (
    <View style={[styles.container, { width: containerSize.width, height: containerSize.height }]} >
      <View style={styles.decorationTopLeft} />
      {item ?
        (
          <>
            <View style={[styles.imageWrapper, { backgroundColor: imgBg }]}>
              <Image source={{ uri: item.displayIcon, }} style={[styles.image, imgType === 'center' ? styles.imageCenter : null]}></Image>
            </View>
            <View style={[styles.infoWrapper, size === 'full-width' ? styles.infoWrapperFullWidth : null]}>
              <Text style={styles.name}>{item.displayName}</Text>
              {btn ? btnType === 'more' ? <ButtonPlus type='more' /> : <ButtonPlus type="favorite" /> : null}
            </View>
          </>
        ) : (
          <>
            <View style={[styles.imageWrapper, styles.noImageWrapper]}>
              <ValorantLogo style={styles.noimage} />
            </View>
            <View style={styles.infoWrapper}>
              <Text style={styles.name}>Text</Text>
            </View>
          </>
        )
      }
      <View style={styles.decorationBottomRight} />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flexBasis: 'auto',
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
  noImageWrapper: {
    backgroundColor: '#444',
    borderWidth: 5,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: '110%',
    height: '110%',
    position: 'relative',
    left: '-20%',
  },
  noimage: {
    color: 'red',
    width: '100%',
    height: 'auto',
  },
  imageCenter: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    left: '0%',
  },
  infoWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  infoWrapperFullWidth: {
    flexDirection: 'row',
    flex: 0.3,
    paddingTop: 15
  }
});