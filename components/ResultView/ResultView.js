/* eslint-disable react/prop-types */
import React from 'react';
import {
  ImageBackground, Text, View, TouchableHighlight,
} from 'react-native';
import { LinearGradient } from 'expo';
import style from './ResultView.style';
import noImg from '../../assets/no-image.jpg';

export default class ResultView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isSaved: false };
    this.saveCardToStorage = this.saveCardToStorage.bind(this);
  }

  async componentDidMount() {
    const { isResultSaved, name } = this.props;
    this.setState({
      isSaved: await isResultSaved(name),
    });
  }

  async saveCardToStorage() {
    const { name, img, saveResult } = this.props;

    await saveResult(name, { name, image: img, key: name });
    this.setState({ isSaved: true });
  }

  render() {
    const { name, img } = this.props;
    const { isSaved } = this.state;

    return (
      <TouchableHighlight onPress={this.saveCardToStorage}>
        <ImageBackground style={style.background} source={img === null ? noImg : { uri: img }}>
          <LinearGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, .4)']} style={{ flex: 1 }}>
            <Text style={style.text}>{name}</Text>
            <View style={{ ...style.savedView, ...{ backgroundColor: isSaved ? 'green' : 'transparent' } }} />
          </LinearGradient>
        </ImageBackground>
      </TouchableHighlight>
    );
  }
}
