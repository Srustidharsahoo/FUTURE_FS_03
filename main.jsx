import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Searchprovider } from './contex/searchContex.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Searchprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Searchprovider>
  </StrictMode>
);
