import styled from "styled-components";

export const Footer = styled.footer`
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 2000px;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 670px) {
        flex-direction: column;
        justify-content: space-evenly;
    }
`

export const FooterSocial = styled.a`
    svg {
        border-radius: 30%;
        padding: 10px;
        font-size: 55px;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
    }
    svg:hover {
        transform: scale(1.07);
    }
    #instagram {
        color: mediumspringgreen;
    }
    #instagram:hover {
        box-shadow: 1px 1px 30px mediumspringgreen;
    }
    #youtube {
        color: red;
    }
    #youtube:hover {
        box-shadow: 1px 1px 30px red;
    }
    #github {
        color: rgb(78, 54, 231);
    }
    #github:hover {
        box-shadow: 1px 1px 30px rgb(78, 54, 231);
    }
    #linkedin {
        color: rgb(10, 148, 228);
    }
    #linkedin:hover {
        box-shadow: 1px 1px 30px rgb(10, 148, 228);
    }
`

export const FooterIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const FooterDeveloper = styled.div`
    animation: logo 7s infinite;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    text-align: center;
    gap: 10px;
    h3 {
        font-size: 22px;
        color: var(--grey-1);
    }
    @keyframes logo {
        0% {
            transform: translateY(-5px);
        }
        50% {
            transform: translateY(5px);
        }
        100% {
            transform: translateY(-5px);
        }
    }
    @media only screen and (max-width: 670px) {
        h3 {
            font-size: 18px;
        }
    }
`