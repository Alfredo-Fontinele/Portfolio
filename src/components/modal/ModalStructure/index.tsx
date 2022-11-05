import { IChildren } from '../../../interfaces/children'
import * as S from './style'

export const ModalStructure = ({ children }:IChildren) => (
    <S.ModalContainer>{ children }</S.ModalContainer>
)