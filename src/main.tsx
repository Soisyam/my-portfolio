// src/main.tsx or src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Or './App.jsx'
import './index.css'; // <--- This line is essential for the global styles!

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);