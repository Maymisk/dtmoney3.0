import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
    }

    body, textarea, input, button {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;

        border: 0;
    } 

    body {
        background: ${props => props.theme['gray-800']};

    }

    button {
        cursor: pointer;
    }


    @media (max-width: 1440px) {
        html {
            font-size: 93.75%;
        }   
    }

    @media (max-width: 768px) {
        html {
            font-size: 87.5%;
        }   
    }
`;
