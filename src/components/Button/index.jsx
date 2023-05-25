import React from 'react'
import './style.css'

const Button = ({ navigate, displayText }) => {
  return <button onClick={navigate}>{displayText}</button>
}

export default Button
