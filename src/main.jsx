import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Store from "./redux/Store.js"




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={Store}>
    <App />
  </Provider>
  </StrictMode>,
)
