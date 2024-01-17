import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
    font-size: 22px;
    line-height: 3.5;
    display: flex;
    align-items: flex-end;
    text-decoration: none;
    margin-left: 57px;
    margin-right: 10px;
    @media(max-width: 768px) {
        margin-bottom: 10%;
        font-weight: bold;
        margin-left: 80px;
        margin-right: 24px;
    }
    &:hover{
        text-decoration-line: underline;
    }
`