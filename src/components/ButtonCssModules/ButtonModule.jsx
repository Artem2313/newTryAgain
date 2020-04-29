import React from 'react';
import styles from './ButtonModule.module.css'

const ButtonModule = ({
  type = 'button',
  label = '',
  disabled = false,
  icon = '',
}) => {
  console.log(styles)
  

  return(
  <button
    type={type}
    disabled={disabled}
    className={disabled ? styles.disabled : styles.active}
    style={{
      backgroundImage: `url(${icon})`,
    }}
  >
    {label}
  </button>
)};

export default ButtonModule;
