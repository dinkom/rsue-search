import { searchActionTypes } from './actionTypes';

export function setSearching(isSearching) {
  return {
    type: searchActionTypes.setSearching,
    isSearching,
  };
}

export function setFilteredResults(filteredSearchResults) {
  return {
    type: searchActionTypes.setFilteredResults,
    filteredSearchResults,
  };
}
