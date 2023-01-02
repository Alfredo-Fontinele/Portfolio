import { MenuLateral } from "./components/menuLateral"
import { Container } from "./components/container"
import { StatesContext } from "./context/states"
import { RoutesGlobal } from "./routes/routes"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { useContext } from 'react'

export const App = () => {
  const { statusMenu } = useContext(StatesContext)
  return (
    <Container>
      {!!statusMenu && (
        <MenuLateral/>
      )}
      <Header title="DevFólio_"/>
      <RoutesGlobal/>
      <Footer title="Alfredo Neto"/>
    </Container>
  )
}
