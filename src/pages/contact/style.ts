import styled from "styled-components";
import { FlipIny } from "../../animations";

interface IContactItem {
    bg: string
}

export const SectionContact = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Contact = styled.section`
    width: 100%;
    padding: 4rem 1rem;
    gap: 4rem;
    min-height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContactTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
    color: var(--primary);
`

export const ContactList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
`

export const ContactItem = styled.a<IContactItem>`
    animation: 1s ${FlipIny};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    font-weight: 600;
    font-size: 18px;
    width: 100%;
    max-width: 400px;
    padding: 1rem 2rem;
    color: var(--primary);
    border-radius: 10px;
    cursor: pointer;
    background-color: ${({ bg }) => bg};
    transition: all 0.5s;

    svg {
        font-size: 27px;
    }

    &:hover {
        box-shadow: 1px 1px 30px ${({ bg }) => bg};
        transform: scale(1.01);
    }
`