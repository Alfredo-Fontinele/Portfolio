import * as S from './style'
import { useContext } from 'react'
import { StatesContext } from '../../context/states'
import { ITitle } from '../../interfaces/title'

export const Header = ({ title }:ITitle) => {
    const { setStatusMenu } = useContext(StatesContext)
    return (
        <S.Header>
            <S.HeaderTitle>{title}</S.HeaderTitle>
            <nav>
                <ul>
                    <li>
                        <S.LinkHeader to="/">Home</S.LinkHeader>
                    </li>
                    <li>
                        <S.LinkHeader to="/projects">Projects</S.LinkHeader>
                    </li>
                    <li>
                        <S.LinkHeader to="/about">About</S.LinkHeader>
                    </li>
                    <li>
                        <S.LinkHeader to="/contact">Contact</S.LinkHeader>
                    </li>
                </ul>
            </nav>
            <S.MenuMobile onClick={() => setStatusMenu(true)}/>
        </S.Header>
    )
}
