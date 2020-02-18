import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import { getSearchData } from '../../services/dataService';
import { prepareQueries, search } from '../../utils/searchUtils';
import SearchResult from '../search-result';
import './Search.scss';

const Search = (props) => {
  const {
    filteredSearchResults,
    setSearching,
    setFilteredResults,
  } = props;

  const handleChange = (e) => {
    const q = e.target.value;

    if (q) {
      setSearching(true);
      const queries = prepareQueries(q);
      getSearchData()
        .then((response) => {
          const filteredResults = search(response, queries);
          setFilteredResults(filteredResults);
          setSearching(false);
        })
        .catch(error => console.log(error));
    } else {
      setFilteredResults([]);
    }
  }

  return (
    <div
      className={filteredSearchResults.length ? 'search search__has-results' : 'search'}
    >
      <DebounceInput
        debounceTimeout={300}
        onChange={handleChange}
        placeholder="Search"
      />
      {
        filteredSearchResults.length ?
        <div className="search__results">
          {
            filteredSearchResults.map(
              result => <SearchResult result={result} key={result.guid} />)
          }
        </div> : ''
      }
    </div>
  );
}

Search.propTypes = {
  filteredSearchResults: PropTypes.array.isRequired,
  setSearching: PropTypes.func.isRequired,
  setFilteredResults: PropTypes.func.isRequired,
};

export default Search;
