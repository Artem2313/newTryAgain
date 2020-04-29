import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  HamburgerButton,
  DropDownContainer,
  Menu,
  MenuItem,
} from './Dropdown.styles';

const Dropdown = ({ isOpen = false }) => {
  return (
    <Container>
      <HamburgerButton type="button">&#9776;</HamburgerButton>
      {isOpen && (
        <DropDownContainer>
          <Menu>
            <MenuItem>Option 1</MenuItem>
            <MenuItem>Option 2</MenuItem>
            <MenuItem>Option 3</MenuItem>
          </Menu>
        </DropDownContainer>
      )}
    </Container>
  );
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
};

export default Dropdown;
