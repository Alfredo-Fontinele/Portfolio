import * as S from "./style"

export const PageNotFound = () => {
  return (
    <S.PageNotFound>
      <S.Text>Página Inexistente</S.Text>
      <S.Button to="/">Voltar pra Home</S.Button>
    </S.PageNotFound>
  )
}
