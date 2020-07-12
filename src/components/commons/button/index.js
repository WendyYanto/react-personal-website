import React from 'react'
import './index.scss'
import PropTypes from 'prop-types'

const Button = ({ onClick, text, secondary }) => {
  const secondaryClass = secondary ? 'secondary' : 'primary'
  const buttonClass = `button ${secondaryClass}`
  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  secondary: PropTypes.bool,
}

Button.defaultProps = {
  secondary: false,
}

export default Button
