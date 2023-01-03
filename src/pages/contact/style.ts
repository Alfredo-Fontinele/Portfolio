import styled from "styled-components"
import { FlipIny } from "../../animations"

interface INetworkSocialItem {
    bg: string
}

export const SectionNetworkSocial = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const NetworkSocial = styled.section`
    width: 100%;
    padding: 4rem 1rem;
    gap: 4rem;
    min-height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const NetworkSocialTitle = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    svg {
        color: #fff;
        font-size: 35px;
    }
`

export const NetworkSocialList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
`

export const NetworkSocialItem = styled.a<INetworkSocialItem>`
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

export const SectionContact = styled.section`
    width: 100%;
    padding: 4rem 1rem;
    gap: 4rem;
    min-height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContactTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const ContactTitle = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    svg {
        color: #fff;
        font-size: 50px;
    }
`

export const FormContact = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    width: 100%;
    max-width: 750px;
    border-radius: 8px;
`

export const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    padding: 1rem;
    font-size: 16px;
    color: #ddd;
    width: 100%;
    border-radius: 8px;
    transition: all 0.7s;
    background-color: #4444;
`

export const TextArea = styled.textarea`
    padding: 1rem;
    font-size: 16px;
    color: #ddd;
    border-radius: 8px;
    resize: none;
    transition: all 0.7s;
    background-color: #4444;
`

export const ButtonSubmit = styled.button`
    padding: .8rem 1rem;
    font-size: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 250px;
    font-weight: bold;
    font-size: 17px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid transparent;
    background-color: mediumslateblue;
    gap: 1rem;

    svg {
        font-size: 25px;
        color: #fff;
    }

    &:hover {
        color: #fff;
        border: 3px solid #fff;
        background-color: #4444;
    }
`
