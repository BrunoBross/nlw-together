import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext'
import { useAuth } from './hooks/useAuth';
import { Rotas } from './components/Rotas';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Rotas/>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
