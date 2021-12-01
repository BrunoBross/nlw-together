import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext'
import { AdminRoom } from './pages/AdminRoom';
import { useAuth } from './hooks/useAuth';

function App() {
  const {user, signInWithGoogle} = useAuth();

  return (
    <BrowserRouter>
      <AuthContextProvider>
        
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
