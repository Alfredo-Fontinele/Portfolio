import { DATABASE_PROJECTS } from './database/database'
import { BsFillBarChartLineFill } from 'react-icons/bs'
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
                    {DATABASE_PROJECTS.map(({name, image, url}) => 
                        <S.CardProject variants={itemMotion} key={crypto.randomUUID()} href={url} target="_blank">
                            <S.CardTitle>{name}</S.CardTitle>
                            <S.CardImg src={image} alt={name} />
                        </S.CardProject>
                    )}
                </S.ProjectsList>
            </S.Projects>
        </S.SectionProjects>
    )
}
    
