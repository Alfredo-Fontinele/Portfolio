import emailjs from "@emailjs/browser"
import { FormEvent, useRef } from "react"
import { FaGithub, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { FiSend } from "react-icons/fi"
import { IoShareSocialSharp } from "react-icons/io5"
import { MdOutlineEmail } from "react-icons/md"
import { toast } from "react-toastify"
import { USER_ADMIN_CONSTRAINT } from "../../constraints"
import { ArrowSet } from "./../home/style"
import * as S from "./style"

export const Contact = () => {
  const inputName = useRef<HTMLInputElement | null>(null)
  const inputEmail = useRef<HTMLInputElement | null>(null)
  const inputMessage = useRef<HTMLTextAreaElement | null>(null)
  const form = useRef<any>()

  const clear = () => {
    inputEmail.current!.value = ""
    inputName.current!.value = ""
    inputMessage.current!.value = ""
  }

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault()
    const email = inputEmail.current?.value
    const from_name = inputName.current?.value
    const message = inputMessage.current?.value
    if (!email || !from_name || !message) {
      toast.error("Preencha todos os campos")
      return
    }
    return await emailjs
      .sendForm(
        USER_ADMIN_CONSTRAINT.service_id,
        USER_ADMIN_CONSTRAINT.template_id,
        form.current,
        USER_ADMIN_CONSTRAINT.public_key
      )
      .then(() => {
        toast.success("Email Enviado")
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
          <IoShareSocialSharp />
          Redes Sociais
        </S.NetworkSocialTitle>
        <S.NetworkSocialList>
          <S.NetworkSocialItem
            target="_blank"
            href="https://www.linkedin.com/in/alfredopfneto/"
            bg="#3447f7"
          >
            <FaLinkedin />
            Linkedin
          </S.NetworkSocialItem>
          <S.NetworkSocialItem
            target="_blank"
            href="https://github.com/Alfredo-Fontinele"
            bg="#111"
          >
            <FaGithub />
            Github
          </S.NetworkSocialItem>
          <S.NetworkSocialItem
            target="_blank"
            href="https://wa.me/+5591999683755?text=Olá Alfredo. Tudo bom?"
            bg="mediumspringgreen"
          >
            <FaWhatsapp />
            Telefone
          </S.NetworkSocialItem>
          <S.NetworkSocialItem
            target="_blank"
            href="https://www.youtube.com/channel/UCHGyhE14Wc_WqvPD3QjmywA"
            bg="#fc0800"
          >
            <FaYoutube />
            Youtube
          </S.NetworkSocialItem>
        </S.NetworkSocialList>
        <ArrowSet />
      </S.NetworkSocial>
      <S.SectionContact>
        <S.ContactTop>
          <S.ContactTitle>
            <MdOutlineEmail />
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
            <FiSend />
            Enviar
          </S.ButtonSubmit>
        </S.FormContact>
      </S.SectionContact>
    </S.SectionNetworkSocial>
  )
}
