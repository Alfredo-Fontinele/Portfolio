import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"
import { ITitle } from "../../interfaces/title"

export const Footer = ({ title }: ITitle) => {
  const getCurrentYear = () => new Date().getFullYear()
  
  return (
    <S.Footers>
      <S.FooterContainer>
        <S.FooterIcons>
          <S.FooterSocial
            href="https://www.youtube.com/channel/UCHGyhE14Wc_WqvPD3QjmywA"
            target="_blank"
          >
            <FaYoutube id="youtube" />
          </S.FooterSocial>
          <S.FooterSocial
            href="https://github.com/Alfredo-Fontinele"
            target="_blank"
          >
            <FaGithub id="github" />
          </S.FooterSocial>
          <S.FooterSocial
            href="https://www.linkedin.com/in/alfredopfneto/"
            target="_blank"
          >
            <FaLinkedin id="linkedin" />
          </S.FooterSocial>
        </S.FooterIcons>
        <S.FooterDeveloper>
          <h3>&copy;{title} {getCurrentYear}</h3>
        </S.FooterDeveloper>
      </S.FooterContainer>
    </S.Footer>
  )
}
