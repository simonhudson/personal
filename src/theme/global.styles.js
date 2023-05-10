import { createGlobalStyle } from 'styled-components';
import { font, palette } from 'src/theme';

const GlobalStyles = createGlobalStyle`

    html,
    body,
    fieldset {
        box-sizing: border-box;
        font-family: ${font.sansSerif};
        font-size: ${font.size};
        font-weight: ${font.weight};
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
    }
    html, body {
        border-top: 3px solid ${palette.primary.brand};
        background: #fff;
        height: 100%;
    }

    ul, ol, dl {
        padding: 0;
    }

    .no-scroll {
        overflow: hidden;
    }

    p {
        line-height: 1.8rem;
        margin-bottom: 2rem;
    }

    span, strong, em {
        font-family: inherit;
        font-size: inherit;
    }

    strong {
        font-weight: 600;
    }

    .no-js-alert {
        display: block;
    }

    fieldset {
        border: 0;
        padding: 0;
    }

    details summary::marker {
        display: none;
    }

    a {
        color: ${palette.primary.bodyText};
        text-decoration: none;
    }
    
`;

export { GlobalStyles };
