/* eslint-disable react/prop-types */
import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import style from './ClickableImage.style';

export default function ViewHeader(props) {
  const { source, onPress, right } = props;

  return (
    <TouchableHighlight style={{ ...style.wrapper, right }} onPress={onPress}>
      <Image source={source} style={style.image} />
    </TouchableHighlight>
  );
}
