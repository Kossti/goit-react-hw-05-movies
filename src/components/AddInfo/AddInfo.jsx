import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AddInfo.module.css';
import PropTypes from 'prop-types';

const AddInfo = ({ location }) => {
  return (
    <div>
      <p className={css.addInfo}>Assitional Information</p>
      <ul>
        <li>
          <NavLink to={'cast'} state={{ from: location }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to={'reviews'} state={{ from: location }}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AddInfo;

AddInfo.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.bool,
  }).isRequired,
};
