import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaGoogle, FaYoutube } from 'react-icons/fa'
import * as S from './style'

export const Contact = () => (
    <S.SectionContact>
        <S.Contact>
            <S.ContactTitle>Contato</S.ContactTitle>
            <S.ContactList>
                <S.ContactItem target="_blank" href="https://www.linkedin.com/in/alfredopfneto/" bg="#3447f7">
                    <FaLinkedin/>
                    Linkedin
                </S.ContactItem>
                <S.ContactItem target="_blank" href="https://github.com/Alfredo-Fontinele" bg="#111">
                    <FaGithub/>
                    Github
                </S.ContactItem>
                <S.ContactItem target="_blank" href="https://mail.google.com/mail/u/0/#search/alfredofontinele08%40gmail.com?compose=GTvVlcSMVxdhgtxLcnnFdNfqXRzGxbxxRjcZfpfFTlQDPWVjfFXcnKltjFHGrNxcNHtrVlXzRxpdJ" bg="mediumslateblue">
                    <FaGoogle/>
                    Email
                </S.ContactItem>
                <S.ContactItem target="_blank" href="https://wa.me/+5591999683755?text=Olá Alfredo. Tudo bom?" bg="mediumspringgreen">
                    <FaWhatsapp/>
                    Telefone
                </S.ContactItem>
                <S.ContactItem target="_blank" href="https://www.instagram.com/alfredo_fontinele/" bg="#d428cc">
                    <FaInstagram/>
                    Instagram
                </S.ContactItem>
                <S.ContactItem target="_blank" href="https://www.youtube.com/channel/UCHGyhE14Wc_WqvPD3QjmywA" bg="#fc0800">
                    <FaYoutube/>
                    Youtube
                </S.ContactItem>
            </S.ContactList>
        </S.Contact>
    </S.SectionContact>
)
