import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename="/Rick-and-Morty-API">
        <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
  </React.StrictMode>
);
