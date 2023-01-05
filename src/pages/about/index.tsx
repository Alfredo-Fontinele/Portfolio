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
                    Olá!! Seja Bem-Vindo. Me chamo Alfredo e sou estudante na Kenzie Academy Brasil.
                    Atualmente já sou formado pela Kenzie Academy Brasil como Desenvolvedor Front-End e quase Desenvolvedor Back-End.
                </S.AboutItem>
                <S.AboutItem>
                    A kenzie é uma escola de programação voltada para a Web que conta com o curso completo de Full Stack.
                </S.AboutItem>
                <S.AboutItem>
                    Já a minha relação com a tecnologia começou quando tinha 18 anos enquanto vivenciava disciplinas na faculdade referentes à programação. 
                </S.AboutItem>
                <S.AboutItem>
                    A partir disso, na maior parte do tempo gosto de treinar e de me impor desafios relacionados a lógica de resolução de problemas. Gosto bastante da leitura e escrita de soluções, ainda que depois tenha que realizá-los em um computador a partir de feedbacks alheios.
                </S.AboutItem>
            </S.AboutText>
        </S.About>
    </S.SectionAbout>
)
