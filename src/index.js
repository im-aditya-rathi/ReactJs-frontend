import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./user/profile.css";
import "./login/login.css";
import "./signup/signup.css";
import "./user/application.css";
import "./user/test.css";
import "./forget/resetpass.css";
import "./forget/forgetpass.css";
import "./user/postjob.css";
import "./home/home.css";

window.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
    <BrowserRouter>
    <App />
  </BrowserRouter>,
    document.getElementById('root')
  );
});