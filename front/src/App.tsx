import { AuthProvider } from "./providers/AuthProvider"
import  Router  from "./routes/routes"
import GlobalStyle from './styles/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle/>
      <AuthProvider>
        <Router/>
      </AuthProvider>
    </>
  )
}

export default App
