import { IconButton } from '@mui/material';
import { styled } from 'styled-components';

export const StyledIconButton = styled(IconButton)`
&& {
    color: ${({ theme }: { theme?: any }) => theme?.colors?.[1]};   
}
 
`;
