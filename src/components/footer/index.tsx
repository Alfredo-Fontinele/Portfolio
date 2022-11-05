import { FaInstagram, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import { ITitle } from '../../interfaces/title'
import * as S from './style'

export const Footer = ({ title }:ITitle) => (
    <S.Footer>
        <S.FooterContainer>
            <S.Footer__icons>
                <S.Footer__social href='https://www.instagram.com/alfredo_fontinele/' target="_blank">
                    <FaInstagram id="instagram"/>
                </S.Footer__social>
                <S.Footer__social href='https://www.youtube.com/channel/UCHGyhE14Wc_WqvPD3QjmywA' target="_blank">
                    <FaYoutube id="youtube"/>
                </S.Footer__social>
                <S.Footer__social href='https://github.com/Alfredo-Fontinele' target="_blank">
                    <FaGithub id="github"/>
                </S.Footer__social>
                <S.Footer__social href='https://www.linkedin.com/in/alfredopfneto/' target="_blank">
                    <FaLinkedin id="linkedin"/>
                </S.Footer__social>
            </S.Footer__icons>
            <S.Footer__developer>
                <h3>&copy;{title} 2022</h3>
            </S.Footer__developer>
        </S.FooterContainer>
    </S.Footer>
)