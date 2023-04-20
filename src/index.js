import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {ContextoGlobalProvider} from './contexts/ContextoGlobal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextoGlobalProvider > 
    <App/>
    </ContextoGlobalProvider > 
  </React.StrictMode>
);


