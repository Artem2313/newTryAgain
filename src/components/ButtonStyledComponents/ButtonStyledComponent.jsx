import React from 'react';
import StyledButton from './Button.styles'

const ButtonStyledComponent = ({
  type = 'button',
  label = '',
  disabled = false,
  icon = '',
}) => {
  return (
    <StyledButton type={type} disabled={disabled} icon={icon}>
      {label}
    </StyledButton>
  );
};

export default ButtonStyledComponent;
