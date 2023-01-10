import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { IoShareSocialSharp } from 'react-icons/io5'
import { MdOutlineEmail } from "react-icons/md"
import { FiSend } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import { FormEvent } from 'react'
import { useRef } from 'react'
import * as S from './style'

const USER_ADMIN = {
    public_key: '21sqNXSXvyqja_de1',
    template_id: 'template_pz4yauc',
    service_id: 'service_bdmd21g'
}

export const Contact = () => {
    const inputName = useRef<HTMLInputElement | null>(null)
    const inputEmail = useRef<HTMLInputElement | null>(null)
    const inputMessage = useRef<HTMLTextAreaElement | null>(null)
    const form = useRef<any>()

    const clear = () => {
        inputEmail.current!.value = ''
        inputName.current!.value = ''
        inputMessage.current!.value = ''
    }

    const sendEmail = async (e:FormEvent) => {
        e.preventDefault()
        const email = inputEmail.current?.value
        const from_name = inputName.current?.value
        const message = inputMessage.current?.value
        if (!email || !from_name || !message) {
            toast.error('Preencha todos os campos')
            return
        }
        emailjs.sendForm(
            USER_ADMIN.service_id, 
            USER_ADMIN.template_id, 
            form.current,
            USER_ADMIN.public_key
        )
        .then(() => {
            toast.success("Email Enviado ✅")
            clear()
        })
        .catch((error) => {
            console.log(error.text)
        })
    }

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
                        Entre em Contato
                    </S.ContactTitle>
                </S.ContactTop>
                <S.FormContact ref={form} onSubmit={sendEmail}>
                    <S.Label htmlFor="name">
                        <S.Input 
                            type="text" 
                            ref={inputName} 
                            name="from_name" 
                            placeholder="Insira seu nome"  
                        />
                    </S.Label>
                    <S.Label htmlFor="email">
                        <S.Input 
                            type="text" 
                            ref={inputEmail} 
                            name="email" 
                            placeholder="Insira seu email"  
                        />
                    </S.Label>
                    <S.TextArea 
                        ref={inputMessage}
                        name="message" 
                        cols={30} 
                        rows={10}
                        placeholder="Insira sua mensagem"
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
