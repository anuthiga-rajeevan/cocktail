import { Card } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledNavBar = styled(Card)`
  &&{
    display: flex;
    justify-content: center;
    background: ${({ theme }: { theme?: any }) => theme.header};
    padding-top: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
    padding-bottom: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
  }
`;

export const SearchDiv = styled.div`
  width: 45%;
`;

export const MenuDiv = styled.div`
  display: flex;
  color: ${({ theme }: { theme?: any }) => theme.text};
  width: 35%;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledNavLink = styled(NavLink)`
  padding-right: ${({ theme }: { theme?: any }) => theme.getSpacing(8)};
  color: ${({ theme }: { theme?: any }) => theme.text};
  text-decoration: none;
  font-size: ${({ theme }: { theme?: any }) => theme.sizes.medium};
  line-height: ${({ theme }: { theme?: any }) => theme.sizes.medium};
  font-weight: 500;
  &.active {
    color: ${({ theme }: { theme?: any }) => theme.activeLink};
    text-decoration: underline
  }
`;