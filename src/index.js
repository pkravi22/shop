import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/Context';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root and render the app
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);
