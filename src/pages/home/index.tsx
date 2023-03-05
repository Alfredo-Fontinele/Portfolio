import logo from "../../../src/assets/background/ALFREDO_NETO.jpeg";
import { useMotion } from "../../context/motion";
import { BsFillPlayFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { DATABASE, ITech } from "./database/index";
import { TbNotebook } from "react-icons/tb";
import * as S from "./style";

export const Home = () => {
    const { listMotion, itemMotion } = useMotion();
    return (
        <S.Home>
            <S.HomeInitial>
                <S.SectionFirst>
                    <S.SectionWelcome>
                        <S.BegginsWelcome>
                            <h1>I'm Full Stack Developer</h1>
                            <h2>Alfredo F. Neto</h2>
                        </S.BegginsWelcome>
                        <S.BiographyWelcome>
                            <p>
                                Desenvolvedor Full Stack pela Kenzie Academy
                                Brasil.
                            </p>
                        </S.BiographyWelcome>
                        <S.BtnsWelcome>
                            <S.BtnProjects to="/projects">
                                Projetos
                                <AiFillProject />
                            </S.BtnProjects>
                            <S.BtnAbout to="/about">
                                Sobre
                                <BsFillPlayFill />
                            </S.BtnAbout>
                        </S.BtnsWelcome>
                    </S.SectionWelcome>
                    <S.SectionPhoto photo={logo} />
                </S.SectionFirst>
                <S.ArrowSet />
            </S.HomeInitial>
            <S.Technologies>
                <S.TechnologiesTitle>
                    <TbNotebook />
                    Tecnologias
                </S.TechnologiesTitle>
                <S.TechnologiesList
                    variants={listMotion}
                    initial="hidden"
                    animate="show"
                    whileInView={{ opacity: 1 }}
                >
                    {DATABASE.map(
                        (tech: ITech) =>
                            !!(tech.name && tech.image) && (
                                <S.CardTechnology
                                    variants={itemMotion}
                                    key={crypto.randomUUID()}
                                >
                                    <S.CardTitle>{tech.name}</S.CardTitle>
                                    <S.CardImg
                                        src={tech.image}
                                        alt={tech.name}
                                    />
                                </S.CardTechnology>
                            )
                    )}
                </S.TechnologiesList>
            </S.Technologies>
        </S.Home>
    );
};
