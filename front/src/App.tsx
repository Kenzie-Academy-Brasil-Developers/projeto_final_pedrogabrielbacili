import  Router  from "./routes"
import { Footer } from './components/Footer'
import { HeaderLage } from './components/Headers/HeaderLage'
import { ListComentario } from './components/ListComentario'
import { Page } from './components/Page'
import GlobalStyle from './styles/GlobalStyle'

function App() {
  return (
    <>
    <GlobalStyle/>
    <Router/>
    </>
  )
}

export default App
