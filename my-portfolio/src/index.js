import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore as createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import mainReducer from '../src/Redux/Reducers/mainReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './Styles/index.css';
import App from './App';


const reduxStore = createStore({ reducer: mainReducer })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
