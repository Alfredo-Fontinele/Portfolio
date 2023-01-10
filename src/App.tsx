import { MenuLateral } from './components/menuLateral'
import { ToastProvider } from './components/toast'
import { Container } from './components/container'
import { useMyStates } from './context/states'
import { RoutesGlobal } from './routes/routes'
import { Footer } from './components/footer'
import { Header } from './components/header'

export const App = () => {
  const { statusMenu } = useMyStates()
  return (
    <Container>
      <ToastProvider/>
      {!!statusMenu && (
        <MenuLateral/>
      )}
      <Header title='DevFólio_'/>
      <RoutesGlobal/>
      <Footer title='Alfredo Neto'/>
    </Container>
  )
}
