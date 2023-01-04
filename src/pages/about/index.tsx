import { MdPersonPinCircle } from 'react-icons/md'
import * as S from './style'

export const About = () => (
    <S.SectionAbout>
        <S.About>
            <S.AboutTitle>
                <MdPersonPinCircle/>
                Sobre
            </S.AboutTitle>
            <S.AboutText>
                <S.AboutItem>
                    Olá. Me chamo Alfredo (20 anos) e sou estudante na Kenzie Academy Brasil. 
                </S.AboutItem>
                <S.AboutItem>
                    Minha relação com a tecnologia começou quando tinha 18 anos enquanto vivenciava disciplinas na faculdade referentes à programação. 
                </S.AboutItem>
                <S.AboutItem>
                    A partir disso, na maior parte do tempo gosto de treinar e de me impor desafios relacionados a lógica de resolução de problemas. Gosto bastante da leitura e escrita de soluções, ainda que depois tenha que realizá-los em um computador a partir de feedbacks alheios.
                </S.AboutItem>
            </S.AboutText>
        </S.About>
    </S.SectionAbout>
)
