import { CircularProgress } from '@mui/material';
import { styled } from 'styled-components';

export const StyledProgressBar = styled(CircularProgress)`
    &&{
        color: ${({ theme }: { theme?: any }) => theme?.colors?.[5]};
    }`;

