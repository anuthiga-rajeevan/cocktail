import styled from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { Theme as themeType } from '../../Types';

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 3px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }`;

const Theme = () => {
  const { theme, setTheme } = useTheme();

  return <Button onClick={() => setTheme(theme === themeType.light ? themeType.dark : themeType.light)}>Switch Theme</Button>;
};

export default Theme;
