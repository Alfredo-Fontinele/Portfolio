import { useMyStates } from '../../context/states'
import { ITitle } from '../../interfaces/title'
import * as S from './style'

export const Header = ({ title }:ITitle) => {
    const { setStatusMenu } = useMyStates()
    return (
        <S.Header>
            <S.HeaderTitle>{title}</S.HeaderTitle>
            <nav>
                <ul>
                    <li>
                        <S.LinkHeader to='/'>Início</S.LinkHeader>
                    </li>
                    <li>
                        <S.LinkHeader to='/projects'>Projetos</S.LinkHeader>
                    </li>
                    <li>
                        <S.LinkHeader to='/about'>Sobre</S.LinkHeader>
                    </li>
                    <li>
                        <S.LinkHeader to='/contact'>Contato</S.LinkHeader>
                    </li>
                </ul>
            </nav>
            <S.MenuMobile onClick={() => setStatusMenu(true)}/>
        </S.Header>
    )
}
