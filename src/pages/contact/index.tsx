import { FormEvent } from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaGoogle, FaYoutube } from 'react-icons/fa'
import { IoShareSocialSharp } from 'react-icons/io5'
import { MdOutlineEmail } from "react-icons/md"
import { FiSend } from 'react-icons/fi'
import * as S from './style'

export const Contact = () => {
    // const submitFormEmail = (e:FormEvent) => {
    //     e.preventDefault()
    //     alert("OI")
    // }
    return (
        <S.SectionNetworkSocial>
            <S.NetworkSocial>
                <S.NetworkSocialTitle>
                    <IoShareSocialSharp/>
                    Redes Sociais
                </S.NetworkSocialTitle>
                <S.NetworkSocialList>
                    <S.NetworkSocialItem target="_blank" href="https://www.linkedin.com/in/alfredopfneto/" bg="#3447f7">
                        <FaLinkedin/>
                        Linkedin
                    </S.NetworkSocialItem>
                    <S.NetworkSocialItem target="_blank" href="https://github.com/Alfredo-Fontinele" bg="#111">
                        <FaGithub/>
                        Github
                    </S.NetworkSocialItem>
                    {/* <S.NetworkSocialItem target="_blank" href="https://mail.google.com/mail/u/0/#search/alfredofontinele08%40gmail.com?compose=GTvVlcSMVxdhgtxLcnnFdNfqXRzGxbxxRjcZfpfFTlQDPWVjfFXcnKltjFHGrNxcNHtrVlXzRxpdJ" bg="mediumslateblue">
                        <FaGoogle/>
                        Email
                    </S.NetworkSocialItem> */}
                    <S.NetworkSocialItem target="_blank" href="https://wa.me/+5591999683755?text=Olá Alfredo. Tudo bom?" bg="mediumspringgreen">
                        <FaWhatsapp/>
                        Telefone
                    </S.NetworkSocialItem>
                    <S.NetworkSocialItem target="_blank" href="https://www.instagram.com/alfredo_fontinele/" bg="#d428cc">
                        <FaInstagram/>
                        Instagram
                    </S.NetworkSocialItem>
                    <S.NetworkSocialItem target="_blank" href="https://www.youtube.com/channel/UCHGyhE14Wc_WqvPD3QjmywA" bg="#fc0800">
                        <FaYoutube/>
                        Youtube
                    </S.NetworkSocialItem>
                </S.NetworkSocialList>
            </S.NetworkSocial>
            <S.SectionContact>
                <S.ContactTop>
                    <S.ContactTitle>
                        <MdOutlineEmail/>
                        Contato
                    </S.ContactTitle>
                </S.ContactTop>
                <S.FormContact>
                    <S.Label htmlFor="name">
                        <S.Input type="text" name="name" placeholder="Insira seu nome" required />
                    </S.Label>
                    <S.Label htmlFor="email">
                        <S.Input type="text" name="email" placeholder="Insira seu email" required />
                    </S.Label>
                    <S.TextArea 
                        name="text" 
                        cols={30} 
                        rows={10}
                        placeholder="Insira sua mensagem"
                        required
                    ></S.TextArea>
                    <S.ButtonSubmit type="submit">
                        <FiSend/>
                        Enviar
                    </S.ButtonSubmit>
                </S.FormContact>
            </S.SectionContact>
        </S.SectionNetworkSocial>
    )
}
