import './App.css';
import LoginButton from './components/login';
import Perfil from './components/perfil'
import LogoutButton from './components/buttondeslogueo'

import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const {isAuthenticated} = useAuth0();
  return (
    <div className="App">
    <h1>Bienvenido</h1>
    {
      isAuthenticated ? <LogoutButton/>
      : <LoginButton/>
    }
    
    <Perfil/>
    
   </div>
  );
  
}

export default App;
