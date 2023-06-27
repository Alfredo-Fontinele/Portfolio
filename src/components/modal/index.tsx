import { IChildren } from "../../interfaces/children"
import * as S from "./style"

export const ModalStructure = ({ children }: IChildren) => (
  <S.Modal>{children}</S.Modal>
)
