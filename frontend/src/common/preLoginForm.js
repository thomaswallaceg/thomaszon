import React from 'react';
import PropTypes from 'prop-types';
import './preLoginForm.css';

function PreLoginForm(props) {
  const height = 100 * props.children.length + 50;
  return (
    <form className="prelogin-form" onSubmit={props.handleSubmit} style={{ height }}>
      {props.children}
      <button className="prelogin-submit-button" type="submit">{props.buttonText}</button>
    </form>
  );
}

PreLoginForm.propTypes = {
  children: PropTypes.element,
  handleSubmit: PropTypes.func,
  buttonText: PropTypes.string,
};

PreLoginForm.defaultProps = {
  children: <div />,
  handleSubmit: () => {},
  buttonText: 'Submit',
};

export { PreLoginForm };
