import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import 'tachyons';

const rootElement = document.getElementById('root');

// Replace ReactDOM.render with createRoot
const root = ReactDOM.createRoot(rootElement);

// Use root.render to render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
