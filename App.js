import React from 'react';
import { AsyncStorage } from 'react-native';
import Welcome from './screens/Welcome/Welcome';
import constants from './constants';
import Search from './screens/Search/Search';
import Saved from './screens/Saved/Saved';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: constants.views.welcome,
    };

    this.changeView = this.changeView.bind(this);
    this.saveResult = this.saveResult.bind(this);
    this.isResultSaved = this.isResultSaved.bind(this);
  }

  async componentDidMount() {
    const savedResults = JSON.parse(
      await AsyncStorage.getItem(constants.STORAGE),
    ) || { };
    if (!Object.keys(savedResults)) {
      await AsyncStorage.setItem(constants.STORAGE, JSON.stringify({ }));
    }
    this.setState({ savedResults });
  }

  async saveResult(key, result) {
    const currentStorage = JSON.parse(
      await AsyncStorage.getItem(constants.STORAGE),
    ) || { };
    currentStorage[key] = result;
    await AsyncStorage.setItem(constants.STORAGE, JSON.stringify(currentStorage));

    this.setState({
      savedResults: currentStorage,
    });
  }

  isResultSaved(key) {
    const { savedResults } = this.state;
    return Boolean(savedResults[key]);
  }

  changeView(nextView) {
    this.setState({ currentView: nextView });
  }

  render() {
    const { currentView, savedResults } = this.state;

    switch (currentView) {
      case constants.views.welcome:
        return (<Welcome changeView={this.changeView} />);
      case constants.views.search:
        return (
          <Search
            changeView={this.changeView}
            title="Поиск"
            saveResult={this.saveResult}
            isResultSaved={this.isResultSaved}
            savedResults={savedResults}
          />
        );
      case constants.views.saved:
        return (
          <Saved
            savedResults={savedResults}
            isResultSaved={this.isResultSaved}
            saveResult={this.saveResult}
          />
        );
      default: return null;
    }
  }
}
