import { createGlobalStyle } from "styled-components";

interface Fonts {
  font: string;
}

const GlobalStyles = createGlobalStyle<Fonts>`
    * {
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
    }

    body{
        font-family: ${(props) => props.font};
    }


`;

export default GlobalStyles;
