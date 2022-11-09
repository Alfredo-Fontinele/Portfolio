import { AiFillProject } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import { DATABASE } from './database/index'
import logo from '../../../src/assets/perfil.jpg'
import * as S from './style'

export const Home = () => (
    <S.Home>
        <S.HomeInitial>
            <S.SectionWelcome>
                <S.BegginsWelcome>
                        <h1>I'm Front-end Developer</h1>
                        <h2>Alfredo F. Neto</h2>
                </S.BegginsWelcome>
                <S.BiographyWelcome>
                    <p>Atualmente tenho 20 anos e sou estudante na Kenzie Academy Brasil no curso de Desenvolvimento Full Stack</p>
                </S.BiographyWelcome>
                <S.BtnsWelcome>
                    <S.BtnProjects to="/projects">
                        Projetos
                        <AiFillProject/>
                    </S.BtnProjects>
                    <S.BtnAbout to="/about">
                        Sobre
                        <BsFillPlayFill/>
                    </S.BtnAbout>
                </S.BtnsWelcome>
            </S.SectionWelcome>
            <S.SectionPhoto photo={logo}/>
        </S.HomeInitial>
        <S.Technologies>
            <S.TechnologiesTitle>Tecnologias</S.TechnologiesTitle>
            <S.TechnologiesList>
                {DATABASE.map(({name, image}) => 
                    <S.CardTechnology key={crypto.randomUUID()}>
                        <S.CardTitle>{name}</S.CardTitle>
                        <S.CardImg src={image} alt={name} />
                    </S.CardTechnology>
                )}
            </S.TechnologiesList>
        </S.Technologies>
    </S.Home>
)
