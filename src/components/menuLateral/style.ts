import styled from "styled-components";
import { IoMdClose } from 'react-icons/io'

export const MenuLateral = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100% - 40%);
    max-width: 300px;
    min-height: 100vh;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 50px;
    background-color: rgba(20,30,50,0.97);

    nav ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 50px;
    }

    nav ul li svg {
        font-size: 32px;
        font-weight: bold;
        color: var(--grey-2);
    }

    nav ul li a {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        font-size: 18px;
        color: var(--grey-2);
        gap: 20px;
    }
`

export const BtnClose = styled(IoMdClose)`
    font-size: 35px;
    color: var(--grey-2);
    display: flex;
    justify-content: center;
    align-items: center;
`