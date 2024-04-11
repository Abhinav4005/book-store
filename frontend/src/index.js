import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import {Toaster} from "react-hot-toast"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
    <Toaster/>
  </React.StrictMode>
);