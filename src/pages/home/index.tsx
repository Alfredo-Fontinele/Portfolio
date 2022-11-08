import { AiFillProject } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import { DATABASE } from './database/index'
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
            <S.SectionPhoto photo="../../../src/assets/perfil.jpg"/>
        </S.HomeInitial>
        <S.Technologies>
            <S.Technologies__title>Tecnologias</S.Technologies__title>
            <S.Technologies__list>
                {DATABASE.map(({name, image}) => 
                    <S.Card__technology key={crypto.randomUUID()}>
                        <S.Card__title>{name}</S.Card__title>
                        <S.Card__img src={image} alt={name} />
                    </S.Card__technology>
                )}
            </S.Technologies__list>
        </S.Technologies>
    </S.Home>
)
