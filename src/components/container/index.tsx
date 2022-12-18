import { IChildren } from '../../interfaces/children'
import * as S from './style'

export const Container = ({ children }:IChildren) => {
    return (
        <S.Container>{children}</S.Container>
    )
}
