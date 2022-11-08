import styled from "styled-components";

interface IContactItem {
    bg: string
}

export const SectionContact = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Contact = styled.section`
    /* background-image: url("https://i.pinimg.com/originals/38/b2/d8/38b2d8bcac8b7b048b191645f3e6b816.png"); */
    width: 100%;
    padding: 2rem 0;
    gap: 2rem;
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
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    font-weight: bold;
    font-size: 22px;
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