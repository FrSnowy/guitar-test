/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';
import ViewHeader from '../../components/ViewHeader/ViewHeader';
import SearchResults from '../../components/SearchResults/SearchResults';
import style from './Saved.style';

export default function Search(props) {
  const { savedResults, isResultSaved } = props;

  const arrResults = Object.keys(savedResults).map(key => savedResults[key]);

  return (
    <View style={style.container}>
      <ViewHeader title="Сохраненное" />
      <SearchResults
        results={arrResults}
        isResultSaved={isResultSaved}
      />
    </View>
  );
}
