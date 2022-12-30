import { Container } from "./components/container"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { RoutesGlobal } from "./routes/routes"
import { useContext } from 'react'
import { StatesContext } from "./context/states"
import { MenuLateral } from "./components/menuLateral"

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
