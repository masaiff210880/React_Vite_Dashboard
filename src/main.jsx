import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme/Theme.jsx';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { store } from './Redux/store.js';
// import store from './features/store.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ThemeProvider theme={theme}>
  <Provider store={store}>
    <App />
    </Provider>
  </ThemeProvider>,
  </BrowserRouter>
)
