import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors';

export const StyledLink = styled(Link)`
    font-size: 80px;
    font-weight: bold;
    line-height: 2;
    text-decoration: none;
    color: ${colors.secondary};
    @media(max-width: 1280px) {
        font-size: 50px;
    }
    @media(max-width: 768px) {
        font-size: 40px;
    }
    &:visited {
        color: ${colors.secondary};
    }
    &:hover {
        text-decoration: underline;
        text-decoration-thickness: 3px;
    }
`