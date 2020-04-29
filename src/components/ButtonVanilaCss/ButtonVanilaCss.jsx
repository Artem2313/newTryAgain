import React from 'react';
import './ButtonVanilaCss.css'

const ButtonVanilaCss = ({
  type = 'button',
  label = '',
  disabled = false,
  icon = '',
}) => {
  // Добавляем условие, при котором кнопка будет дисаблед
  const btnClasses = ['Button'];

  if (disabled) {
    btnClasses.push('Button-disabled')
  }
  return(
  <button
    type={type}
    disabled={disabled}
    className={btnClasses.join(' ')}
    style={{
      backgroundImage: `url(${icon})`,
    }}
  >
    {label}
  </button>
)};

export default ButtonVanilaCss;
