import React from 'react';
import PropTypes from 'prop-types';
import './inputField.css';

function InputField(props) {
  return (
    <div className="common-text-input-field">
      <label htmlFor={props.title.toLowerCase()}>{props.title}</label>
      <input type={props.type} value={props.currentText} onChange={props.handleTextChange} />
    </div>
  );
}

InputField.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  currentText: PropTypes.string,
  handleTextChange: PropTypes.func,
};

InputField.defaultProps = {
  title: '',
  type: 'text',
  currentText: '',
  handleTextChange: () => true,
};

export { InputField };
