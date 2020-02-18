import { searchActionTypes } from './actionTypes';

const initialState = {
  isSearching: false,
  filteredSearchResults: [],
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case searchActionTypes.setSearching:
      return {
        ...state,
        isSearching: action.isSearching,
      }
    case searchActionTypes.setFilteredResults:
      return {
        ...state,
        filteredSearchResults: action.filteredSearchResults,
      }
    default:
      return state;
  }
}
