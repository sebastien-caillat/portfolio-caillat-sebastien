import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const StyledGlobalStyle = createGlobalStyle`

    /* League Spartan Font */
    @font-face {
    font-family: 'League Spartan';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/leaguespartan/v11/kJEnBuEW6A0lliaV_m88ja5Twtx8BWhtkDVmjZvMfoTZA81d.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* Baskerville Font */

    @font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/librebaskerville/v14/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxM.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
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
        font-family: 'League Spartan', serif, sans-serif;
        @media(max-width: 768px) {
            font-size: 40px;
        }
    }

    h2 {
        font-size: 40px;
        font-family: 'League Spartan', serif, sans-serif;
        @media(max-width: 768px) {
            font-size: 30px;
        }
    }

    h3 {
        font-size: 30px;
        font-family: 'Libre Baskerville', serif;
        font-style: italic;
        @media(max-width: 768px) {
            font-size: 22px;
        }
    }

    p {
        font-size: 20px;
        text-align: justify;
        text-justify: inter-word;
        hyphens: auto;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        font-family: 'Libre Baskerville', serif;
        @media(max-width: 768px) {
            font-size: 18px;
        }
    }

    li {
        font-size: 22px;
        font-family: 'Libre Baskerville', serif;
        text-align: justify;
        text-justify: inter-word;
        hyphens: auto;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
        @media(max-width: 768px) {
            font-size: 18px;
        }
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle