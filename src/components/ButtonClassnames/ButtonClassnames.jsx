import React from 'react';
import styles from './ButtonClassnames.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ButtonClassnames = ({
  type = 'button',
  label = '',
  disabled = false,
  icon = '',
}) => {
  console.log(styles)
  
  const classes = cx({
    button: true,
    active: !disabled,
    disabled: disabled
  })
  return(
  <button
    type={type}
    disabled={disabled}
    className={classes}
    style={{
      backgroundImage: `url(${icon})`,
    }}
  >
    {label}
  </button>
)};

export default ButtonClassnames;
