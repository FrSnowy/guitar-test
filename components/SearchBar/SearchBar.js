/* eslint-disable react/prop-types */
import React from 'react';
import { View, TextInput } from 'react-native';
import style from './SearchBar.style';
import ClickableImage from '../ClickableImage/ClickableImage';

export default function ViewHeader(props) {
  const {
    searchingText,
    search,
    icon,
    changeSearchingText,
  } = props;

  return (
    <View style={style.wrapper}>
      <TextInput
        placeholder="Искать"
        style={style.input}
        onChangeText={text => changeSearchingText(text)}
        value={searchingText || ''}
        onEndEditing={search}
      />
      <ClickableImage source={icon} onPress={search} />
    </View>
  );
}
