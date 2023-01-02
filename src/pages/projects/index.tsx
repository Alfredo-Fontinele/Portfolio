import { DATABASE_PROJECTS } from './database/database'
import { BsFillBarChartLineFill } from 'react-icons/bs'
import * as S from './style'

export const Projects = () => (
    <S.SectionProjects>
        <S.Projects>
            <S.ProjectsTitle>
                <BsFillBarChartLineFill/>
                Meus Projetos
            </S.ProjectsTitle>
            <S.ProjectsList>
                {DATABASE_PROJECTS.map(({name, image, url}) => 
                    <S.CardProject key={crypto.randomUUID()} href={url} target="_blank">
                        <S.CardTitle>{name}</S.CardTitle>
                        <S.CardImg src={image} alt={name} />
                    </S.CardProject>
                )}
            </S.ProjectsList>
        </S.Projects>
    </S.SectionProjects>
)
