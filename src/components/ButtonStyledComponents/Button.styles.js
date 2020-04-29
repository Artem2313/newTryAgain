import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  margin: 0 4px;
  padding: 8px 24px;
  border: 0;
  border-radius: 2px;
  color: #ffffff;
  font-size: 14px;
  font-family: font-stack;
  background-color: ${props => (props.disabled ? '#2196f3' : 'yellow')};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: ${props => (props.disabled ? 'red' : 'blue')};
  background-image: ${props => `url(${props.icon})`};

  :hover,
  :focus {
    background-color: #1976d2;
  }
`;

export default StyledButton;