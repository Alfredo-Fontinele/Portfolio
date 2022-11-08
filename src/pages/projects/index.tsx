import { DATABASE_PROJECTS } from './database/database'
import * as S from './style'

export const Projects = () => (
    <S.SectionProjects>
        <S.Projects>
            <S.Projects__title>Meus Projetos</S.Projects__title>
            <S.Projects__list>
                {DATABASE_PROJECTS.map(({name, image, url}) => 
                    <S.Card__project key={crypto.randomUUID()} href={url} target="_blank">
                        <S.Card__title>{name}</S.Card__title>
                        <S.Card__img src={image} alt={name} />
                    </S.Card__project>
                )}
            </S.Projects__list>
        </S.Projects>
    </S.SectionProjects>
)
