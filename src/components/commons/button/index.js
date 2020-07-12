import React from "react";
import "./index.scss";
import PropTypes from "prop-types";

const Button = ({ onClick, text }) => {
  return (
    <button className='button' onClick={onClick}>
      { text }
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;