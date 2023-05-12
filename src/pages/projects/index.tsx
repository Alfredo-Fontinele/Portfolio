import { DATABASE_PROJECTS, IProject } from "./database/database";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { useMotion } from "../../context/motion";
import * as S from "./style";

export const Projects = () => {
    const { listMotion, itemMotion } = useMotion();
    return (
        <S.SectionProjects>
            <S.Projects>
                <S.ProjectsTitle>
                    <BsFillBarChartLineFill />
                    Meus Projetos
                </S.ProjectsTitle>
                <S.ProjectsList
                    variants={listMotion}
                    initial="hidden"
                    animate="show"
                >
                    {DATABASE_PROJECTS.map((project: IProject) => (
                        <S.CardProject
                            variants={itemMotion}
                            key={crypto.randomUUID()}
                            href={project.url}
                            target="_blank"
                        >
                            <S.CardTitle>{project.name}</S.CardTitle>
                            <S.CardImg src={project.image} alt={project.name} />
                            <S.CardDescription>
                                {project.description}
                            </S.CardDescription>
                            <ul
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 25,
                                    width: "100%",
                                }}
                            >
                                {!!project.tecnologies?.length &&
                                    project.tecnologies.map((tech) => (
                                        <li
                                            style={{
                                                display: "flex",
                                                justifyContent: "flex-start",
                                                alignItems: "center",
                                                listStyle: "none",
                                                gap: 25,
                                            }}
                                        >
                                            <img
                                                src={tech.icon}
                                                height={25}
                                                width={25}
                                            />
                                            <p
                                                style={{
                                                    color: "#eaeaea",
                                                    fontSize: 20,
                                                }}
                                            >
                                                {tech.name}
                                            </p>
                                        </li>
                                    ))}
                            </ul>
                        </S.CardProject>
                    ))}
                </S.ProjectsList>
            </S.Projects>
        </S.SectionProjects>
    );
};
