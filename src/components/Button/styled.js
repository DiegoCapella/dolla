import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#8a05be' : '#fff')};
  /* background: ${({ primary }) => (primary ? '#fff' : '#8a05be')}; */
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ?  '#fff' : '#8a05be')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#e6e6e6' : '#8a05be' )};
    color: ${({ dark }) => (dark ? '#8a05be' : '#e6e6e6')};
  } 
` 
