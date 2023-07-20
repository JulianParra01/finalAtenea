import React, {useEffect, useState} from 'react';
import './App.css';
import LoginButton from './components/login';
import Perfil from './components/perfil'
import LogoutButton from './components/buttondeslogueo'
import Imagenes from './components/MostrarImg';
import { useAuth0 } from '@auth0/auth0-react';
import Characters from './components/Lista.js';

function App() {
  const {isAuthenticated} = useAuth0();

  const [characters, setCharacters] = useState([])
  const [user, setUser] = useState([])
const initialUrl = "https://rickandmortyapi.com/api/character";
  
  const fetchCharacters = (url) => {
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(data => setCharacters(data.results))
      .catch(err => console.log(err))  
};

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <div className="App">
    <h1>Bienvenido</h1>
    {
      isAuthenticated ? <LogoutButton/>
      : <LoginButton/>
    }
    
    <Perfil/>
    <Characters characters={characters} />
   
   </div>
  );
  
}

export default App;
