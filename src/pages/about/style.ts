import styled from "styled-components"
import Bg from '../../../src/assets/BGextra.webp'
import { FadeInDown } from "../../animations"

export const SectionAbout = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Bg});
    background-size: cover;
`

export const About = styled.section`
    width: 100%;
    padding: 4rem 1rem;
    gap: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AboutTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
    color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    svg {
        font-size: 45px;
        color: #fff;
    }
`

export const AboutText = styled.ul`
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
`

export const AboutItem = styled.li`
    animation: 1s ${FadeInDown};
    font-size: 18px;
    font-weight: 600;
    padding: 2rem;
    border-radius: 10px;
    background: #141E30;
    background: -webkit-linear-gradient(to left, #243B55, #141E30);
    background: linear-gradient(to left, #243B55, #141E30); 
    color: #fff;
`
