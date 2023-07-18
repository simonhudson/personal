import { createGlobalStyle } from 'styled-components';
import theme from 'src/theme';

const GlobalStyles = createGlobalStyle`

    html,
    body,
    fieldset {
        box-sizing: border-box;
        font-family: ${theme.font.sansSerif};
        font-size: ${theme.font.size}px;
        font-weight: ${theme.font.weight};
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
    }
    html, body {
        border-top: 3px solid ${theme.palette.primary.brand};
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
        color: ${theme.palette.primary.bodyText};
    }
    
`;

export { GlobalStyles };
