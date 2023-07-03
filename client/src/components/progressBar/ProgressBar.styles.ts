import { CircularProgress } from '@mui/material';
import { styled } from 'styled-components';

export const StyledProgressBar = styled(CircularProgress)`
    &&{
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }: { theme?: any }) => theme?.colors?.[5]};
    }`;

