import React from 'react';
import PropTypes from 'prop-types';
import './SearchResult.scss';

const SearchResult = ({ result }) => {
  return (
    <div className="search__result">
      {`${result.first_name} ${result.last_name}`}
      <span className="search__result-email">
        {`(${result.contact_email})`}
      </span>
    </div>
  );
}

SearchResult.propTypes = {
  result: PropTypes.object.isRequired,
};

export default SearchResult;
