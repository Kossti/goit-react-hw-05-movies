import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './BackLinkButton.module.css';
import PropTypes from 'prop-types';

const BackLinkButton = ({ backlinkRef }) => {
  return (
    <div>
      <button type="button" className={css.backLinkBtn}>
        <NavLink to={backlinkRef} className={css.backLink}>
          <span>Go back</span>
        </NavLink>
      </button>
    </div>
  );
};

export default BackLinkButton;

BackLinkButton.propTypes = {
  backlinkRef: PropTypes.shape({
    state: PropTypes.bool,
    pathname: PropTypes.string,
  }).isRequired,
};
