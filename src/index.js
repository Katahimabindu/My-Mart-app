import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./Components/CartSlice"
import { Provider } from 'react-redux';
import { getTotals } from './Components/CartSlice';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore({
reducer:{
  cart:cartReducer
}
});
store.dispatch(getTotals());
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}> <App/></Provider>
    
    </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
