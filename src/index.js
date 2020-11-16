import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Footer from "./components/footer";
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.Fragment>
    <Navbar />
    <Footer />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
