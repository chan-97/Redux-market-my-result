import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers/"

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
