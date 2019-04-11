/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text } from 'react-native';
import style from './ViewHeader.style';

export default function ViewHeader(props) {
  const { title } = props;

  return (
    <View style={style.wrapper}>
      <Text style={style.content}>{title}</Text>
    </View>
  );
}
