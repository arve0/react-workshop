import React, { PropTypes } from 'react';
import './Input.css'


const Input = (props) => {

  const { label } = props
  return (
    <div>
      {label && <label>{label}</label>}
      <input {...props} />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
}

export default Input;
