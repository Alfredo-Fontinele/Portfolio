import styled from 'styled-components';
import logo from '../../../src/assets/KRATOS.jpg'
import HoverCard from '../../../src/assets/HoverCard.webp'
import BgHomeInitial from '../../../src/assets/KRATOS.jpg'
import BGHomeTechs from '../../../src/assets/BGHomeTechs.jpg'
import { Link } from 'react-router-dom'
import { FlipIny, FadeLeft } from '../../animations';

interface IPhoto {
    photo: string
}

export const Home = styled.main`
    background-image: linear-gradient(#0000009d, #0000009d, #0000009d), url(${logo});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
`

export const HomeInitial = styled.section`
    min-height: 700px;
    padding: 0 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 900px) {
        padding: 3rem 1rem;
        flex-direction: column;
        gap: 70px;
    }
`

export const SectionWelcome = styled.section`
    animation: 1s ${FadeLeft};
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    max-width: 500px;
`

export const BegginsWelcome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    h1 {
        color: var(--grey-2);
        font-weight: 700;
        font-size: 2.3em;
    }

    h2 {
        font-size: 2.3em;
        font-weight: 700;
        color: var(--grey-2);
    }
`

export const BiographyWelcome = styled.div`
    p {
        line-height: 30px;
        letter-spacing: .5px;
        color: var(--grey-4);
    }
`

export const BtnsWelcome = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 30px;

    @media only screen and (max-width: 460px) {
        a svg {
            display: none
        }
    }
`

export const BtnProjects = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 60px;
    width: 240px;
    border-radius: 8px;
    border: 3px solid transparent;
    background-color: var(--grey-2);
    font-weight: 600;
    color: var(--primary);

    &:hover {
        border: 3px solid var(--grey-2);
        color: var(--grey-2);
        background-color: transparent;
    }

    svg {
        font-size: 30px;
    }
`

export const BtnAbout = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 60px;
    width: 240px;
    border-radius: 8px;
    border: 3px solid var(--grey-2);
    font-weight: 600;
    color: var(--grey-2);

    &:hover {
        color: var(--primary);
        background-color: var(--grey-2);
    }

    svg {
        font-size: 30px;
    }
`

export const SectionPhoto = styled.section<IPhoto>`
    animation: 1s ${FlipIny};
    background-image: url(${({ photo }) => photo});
    background-size: cover;
    border-radius: 20%;
    min-height: 280px;
    width: 280px;
`

export const Technologies = styled.section`
    background-color: rgb(10,20,40);
    background-image: linear-gradient(#00000026,#00000044), url(${BGHomeTechs});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 170px 20px;
    gap: 100px;
`

export const TechnologiesTitle = styled.h1`
    font-size: 45px;
    font-weight: 500;
    color: var(--primary);
`

export const TechnologiesList = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    gap: 70px;
    @media only screen and (max-width: 800px) {
        width: 100%;
        height: 400px;
        display: flex;
        flex-wrap: nowrap;
        overflow-y: auto;
        justify-content: flex-start;
        align-items: center;
        padding: 40px 20px;
        gap: 50px;
        ::-webkit-scrollbar {
            display: none;
        }
    }
`

export const CardTechnology = styled.li`
    background-image: linear-gradient(#0c2ce498, #2c0be99c), url(${BgHomeInitial});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    border-radius: 10px;
    width: 100%;
    min-width: 200px;
    max-width: 220px;
    height: 100%;
    min-height: 270px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: all 1s;
    &:hover {
        background-image: linear-gradient(#470de698, #3511d321), url(${HoverCard});
        background-size: cover;
        background-repeat: no-repeat;
        transform: scale(1.03);
        box-shadow: 1px 1px 30px #470de6;
    }
`

export const CardTitle = styled.h2`
    text-align: center;
    background-color: #544aa377;
    border-radius: 10px;
    padding: 10px 20px;
    font-weight: bold;
    color: #fff;
    font-size: 22px;
`

export const CardImg = styled.img`
    width: auto;
    height: 110px;
`