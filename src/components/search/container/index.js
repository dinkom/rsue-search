import { connect } from 'react-redux';
import { setSearching, setFilteredResults } from '../../../redux/actions';
import View from '../index';

const mapStateToProps = state => ({
  isSearching: state.isSearching,
  filteredSearchResults: state.filteredSearchResults,
});

const mapDispatchToProps = {
  setSearching,
  setFilteredResults,
};

const Search = connect(mapStateToProps, mapDispatchToProps)(View);

export default Search;
