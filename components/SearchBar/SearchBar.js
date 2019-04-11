/* eslint-disable react/prop-types */
import React from 'react';
import { View, TextInput } from 'react-native';
import style from './SearchBar.style';
import ClickableImage from '../ClickableImage/ClickableImage';
import saveIcon from '../../assets/save.png';
import constants from '../../constants';

export default function ViewHeader(props) {
  const {
    searchingText,
    search,
    icon,
    changeSearchingText,
    changeView,
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
      <ClickableImage source={icon} onPress={search} right={20} />
      <ClickableImage
        source={saveIcon}
        onPress={() => { changeView(constants.views.saved); }}
        right={70}
      />
    </View>
  );
}
