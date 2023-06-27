import { Container } from "./components/container"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { MenuLateral } from "./components/menuLateral"
import { ToastProvider } from "./components/toast"
import { useMyStates } from "./context/states"
import { RoutesGlobal } from "./routes/routes"

export const App = () => {
  const { statusMenu } = useMyStates()
  return (
    <Container>
      <ToastProvider />
      {!!statusMenu && <MenuLateral />}
      <Header title="_Neto" />
      <RoutesGlobal />
      <Footer title="Alfredo Neto" />
    </Container>
  )
}
