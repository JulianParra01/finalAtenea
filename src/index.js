import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import conf_auth from './conf_auth';


const domain = process.env.REACT_AUTH0_DOMAIN
const clientId = process.env.REACT_AUTH0_CLIENT_ID


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider {...conf_auth}>
      <App />

    </Auth0Provider>
  </React.StrictMode>

);



reportWebVitals();
