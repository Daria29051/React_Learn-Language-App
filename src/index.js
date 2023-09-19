import React from 'react';
import ReactDOM from 'react-dom/client';
import st from './assets/styles/index.scss';
import App from './App';
import ContextProvider from './context/ContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>

);


