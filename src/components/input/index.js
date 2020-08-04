
import React from 'react';
import styles from './index.module.css';

const Input = ({ label, id, value, onChange}) => {
  return (
    <div>
      <label for={id}>
        {label}:
        <input id={id} avlue={value} onChange={onChange} />
      </label>
    </div>
  )
}

export default Input;
