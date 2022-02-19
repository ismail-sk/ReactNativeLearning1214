import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import 'tachyons';


import Car from './Car';
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Car />
  </React.StrictMode>, document.getElementById('root')
);
reportWebVitals();
