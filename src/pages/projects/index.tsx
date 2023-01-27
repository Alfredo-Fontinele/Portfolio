import { DATABASE_PROJECTS, IProject } from './database/database'
import { BsFillBarChartLineFill } from 'react-icons/bs'
import { AiOutlineRightSquare } from 'react-icons/ai'
import { useMotion } from '../../context/motion'
import * as S from './style'

export const Projects = () => {
    const { listMotion, itemMotion } = useMotion()
    return (
        <S.SectionProjects>
            <S.Projects>
                <S.ProjectsTitle>
                    <BsFillBarChartLineFill/>
                    Meus Projetos
                </S.ProjectsTitle>
                <S.ProjectsList
                    variants={listMotion}
                    initial="hidden"
                    animate="show"
                >
                    {DATABASE_PROJECTS.map((project: IProject) => 
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
                        </S.CardProject>
                    )}
                </S.ProjectsList>
            </S.Projects>
        </S.SectionProjects>
    )
}
    
