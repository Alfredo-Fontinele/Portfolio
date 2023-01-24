import HoverCard from '../../../src/assets/background/HoverCard.webp'
import BgExtra from '../../../src/assets/background/BGextra.webp'
import styled from "styled-components"
import { motion } from 'framer-motion'

export const SectionProjects = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Projects = styled.section`
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 1rem;
    gap: 6rem;
`

export const ProjectsTitle = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    svg {
        font-size: 25px;
        color: #fff;
    }

    @media only screen and (max-width: 400px) {
        flex-direction: column-reverse;
    }
`

export const ProjectsList = styled(motion.ul)`
    width: 100%;
    max-width: 1500px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 70px;
    @media only screen and (max-width: 800px) {
        width: 100%;
        max-height: 500px;
        display: flex;
        flex-wrap: nowrap;
        overflow-y: auto;
        justify-content: flex-start;
        align-items: center;
        padding: 40px 0;
        gap: 50px;
        ::-webkit-scrollbar {
            display: none;
        }
    }
`

export const CardProject = styled(motion.a)`
    background-image: linear-gradient(#22292393, #135be29f), url(${BgExtra});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    min-width: 270px;
    max-width: 270px;
    min-height: 350px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 30px;
    transition: all 1s;
    &:hover {
        background-image: linear-gradient(#470de698, #3511d321), url(${HoverCard});
        background-size: cover;
        background-repeat: no-repeat;
        transform: scale(1.03);
        box-shadow: 1px 1px 30px #470de6;
    }
`

export const CardTitle = styled.h1`
    text-align: center;
    background-color: #544aa377;
    border-radius: 10px;
    padding: 10px 20px;
    font-weight: bold;
    color: #fff;
    font-size: 1.5rem;
`

export const CardImg = styled.img`
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
    height: 130px;
`