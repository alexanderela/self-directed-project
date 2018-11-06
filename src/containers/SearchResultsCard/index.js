import React from 'react';
import './SearchResultsCard.css';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchResultsCard = ({ courses }) => {
  const courseResults = courses.map(course => {
    const { name, address, city, state, zip, id } = course;

    return (
      <div className="course-search-result" key={name}>
        <p className="search-results-entry">{`${name} ${address}, ${city}, ${state} ${zip}`}</p>
        <Link to={`/findcourses/searchresults/courseinfo/${id}`}>
          <button className="search-result-btn">Select</button>
        </Link>
      </div>
    );
  });

  return (
    <div className="SearchResultsCard">
      <h2 className="search-result-header">Search Results</h2>
      <h4 className="nearby-courses">Nearby Courses</h4>
      {courses.length
        ? courseResults
        : 'Oops! There are no courses near where you searched.'}
    </div>
  );
};

SearchResultsCard.propTypes = {
  courses: PropTypes.array.isRequired
}

export default withRouter(SearchResultsCard);
