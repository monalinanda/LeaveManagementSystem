import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import appStore from "./utils/appStore.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain="dev-nl77vksqr5sm5mnu.us.auth0.com"
    clientId="kogvFK5OOhtS9S5otgNcfr7zY9lML3NG"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
     <Provider store={appStore}>
    <App />
    </Provider>
    </Auth0Provider>,
)
