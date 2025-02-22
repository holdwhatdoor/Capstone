import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store.js';
import './index.css';
import App from './App.js';
import LandingPage from './components/landing-page.js';
import UserLoginPage from './components/user-login-page.js';
import CreateAccountPage from './components/create-account-page.js';
import UserPage from './components/user-page.js';
import SearchFoodPage from './components/search-food-page.js';
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <BrowserRouter >
      <Routes >
        <Route path="/" Component={LandingPage} />
        <Route path="/user-login/" Component={UserLoginPage} />
        <Route path="/create-account/" Component={CreateAccountPage} />
        <Route path="/users/:user" Component={UserPage} />
        <Route path="/users/:user/search" Component={SearchFoodPage} />
        <Route path="/search" Component={SearchFoodPage} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
