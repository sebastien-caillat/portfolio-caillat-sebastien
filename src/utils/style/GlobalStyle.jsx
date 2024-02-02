import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'League Spartan', serif, sans-serif;
    }

    body {
        color: ${colors.primary};
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: auto;
    }

    h1 {
        font-size: 60px;
        @media(max-width: 768px) {
            font-size: 40px;
        }
    }

    h2 {
        font-size: 40px;
        @media(max-width: 768px) {
            font-size: 30px;
        }
    }

    h3 {
        font-size: 30px;
        margin-left: 3%;
        @media(max-width: 768px) {
            font-size: 22px;
        }
    }

    p {
        font-size: 22px;
        text-align: justify;
        @media(max-width: 768px) {
            font-size: 18px;
        }
    }

    li {
        font-size: 22px;
        @media(max-width: 768px) {
            font-size: 18px;
        }
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle