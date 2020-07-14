import React from 'react'
import './index.scss'
import { string, func, bool } from 'prop-types'

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
  text: string.isRequired,
  onClick: func.isRequired,
  secondary: bool,
}

Button.defaultProps = {
  secondary: false,
}

export default Button
