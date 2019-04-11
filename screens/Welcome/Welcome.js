/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View, Button } from 'react-native';
import style from './Welcome.style';
import constants from '../../constants';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.buttonPressHandler = this.buttonPressHandler.bind(this);
  }

  async buttonPressHandler() {
    const { changeView } = this.props;
    changeView(constants.views.search);
  }

  render() {
    return (
      <View style={style.container}>
        <View>
          <Text style={style.textTitle}>Discogs</Text>
          <Text style={style.textSubtitle}>Поиск артистов</Text>
        </View>
        <View style={style.button || {}}>
          <Button color="#1b3039" title="Искать" onPress={this.buttonPressHandler} />
        </View>
      </View>
    );
  }
}
