import React, { MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store';

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }`;

const Theme = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const toggleTheme = () => {};

  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

export default Theme;
