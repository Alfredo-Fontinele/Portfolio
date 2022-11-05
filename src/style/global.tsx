import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #fff;
        --grey-1: mediumspringgreen;
        --grey-2: mediumslateblue;
        --grey-3: rgb(0, 125, 255);
        --grey-4: #CCC;
        --grey-5: #333;
        --grey-6: #222;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        list-style: none;
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
    }

    body {
        min-height: 100vh;
        background: #141E30;
        background: -webkit-linear-gradient(to left, #243B55, #141E30);
        background: linear-gradient(to left, #243B55, #141E30); 
    }

    body::-webkit-scrollbar {
        background-color: #243B55;
        width: 10px;
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--grey-2);
    }

    button, svg, a {
        transition: all 0.3s;
        cursor: pointer;
    }
`