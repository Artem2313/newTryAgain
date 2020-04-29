import React from 'react';

const buttonStyles = {
  display: 'inline-flex',
  margin: '0 4px',
  padding: '8px 24px',
  border: 0,
  borderRadius: 2,
  fontSize: 14,
  fontFamily: 'inherit',
};

const Button = ({
  type = 'button',
  label = '',
  disabled = false,
  icon = '',
}) => (
  <button
    type={type}
    disabled={disabled}
    style={{
      ...buttonStyles,
      backgroundImage: `url(${icon})`,
      backgroundColor: disabled ? '#0000001f' : '#2196f3',
    }}
  >
    {label}
  </button>
);

export default Button;
