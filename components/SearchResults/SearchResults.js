/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList } from 'react-native';
import ResultView from '../ResultView/ResultView';
import style from './SearchResults.style';

export default function SearchResults(props) {
  const { results, isResultSaved } = props;

  return (
    <FlatList
      style={style}
      data={results}
      numColumns={3}
      renderItem={
        ({ item: result }) => (
          <ResultView
            name={result.name}
            img={result.image}
            saveResult={() => { }}
            isResultSaved={isResultSaved}
          />
        )
      }
    />
  );
}
