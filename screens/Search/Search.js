/* eslint-disable react/prop-types */
import React from 'react';
import { View, Keyboard } from 'react-native';
import ViewHeader from '../../components/ViewHeader/ViewHeader';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import style from './Search.style';
import search from '../../assets/search.png';
import preloader from '../../assets/preloader.gif';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    const { savedResults } = props;

    this.state = {
      isInSearch: false,
      searchingText: '',
      prevSearchingText: null,
      title: 'Поиск',
      links: {
        prev: null,
        next: null,
      },
      results: Object.keys(savedResults).length === 0 ? [] : [
        ...Object.keys(savedResults).map(key => savedResults[key]),
      ],
    };

    this.search = this.search.bind(this);
    this.changeSearchingText = this.changeSearchingText.bind(this);
  }

  search() {
    Keyboard.dismiss();
    const { searchingText, prevSearchingText, isInSearch } = this.state;

    if (searchingText === prevSearchingText || isInSearch) return false;

    const key = 'BJupdNJgPNueXIbJiNvs';
    const secret = 'WCRvCNDZtdqyrRPijpUutMWoHTrFHHFK';
    const URL = 'https://api.discogs.com/database/search';
    const artistName = searchingText;

    const requestUrl = `${URL}?query=${artistName}&type=artist&key=${key}&secret=${secret}&per_page=60`;

    this.setState({ isInSearch: true, prevSearchingText: searchingText });

    fetch(requestUrl)
      .then(response => response.json())
      .then((res) => {
        const links = {
          prev: res.pagination.urls.prev || null,
          next: res.pagination.urls.next || null,
        };
        const results = res.results.map(result => ({
          key: `result-${result.title}`,
          name: result.title,
          image: result.thumb || null,
        }));

        this.setState({ links, results, isInSearch: false });
      });

    return null;
  }

  changeSearchingText(text) {
    this.setState({ searchingText: text });
  }

  render() {
    const {
      searchingText, title, links, results, isInSearch,
    } = this.state;

    const { saveResult, isResultSaved } = this.props;

    return (
      <View style={style.container}>
        <ViewHeader title={title} />
        <SearchBar
          icon={isInSearch ? preloader : search}
          searchingText={searchingText}
          search={this.search}
          changeSearchingText={this.changeSearchingText}
        />
        <SearchResults
          links={links}
          results={results}
          saveResult={saveResult}
          isResultSaved={isResultSaved}
        />
      </View>
    );
  }
}
