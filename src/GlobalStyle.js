import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html,body {
    overflow-y:hidden;
    font-family: "Montserrat", sans-serif;
    // scroll-snap-type: x mandatory;
}
`;
