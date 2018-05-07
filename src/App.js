import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/news">Новости</Link>
            </li>
            <li>
              <Link to="/about">Про нас</Link>
            </li>
          </ul>
          <Route
            path="/"
            render={() => (
              <div>
                <h1>Главная</h1>
                <p>Это главная страница</p>
              </div>
            )}
          />
          <Route 
            path="/news"
            render={() => (
              <div>
                <h1>Новости</h1>
                <p>Позавчера: заблокировали гугл</p>
                <p>Вчера: заблокировали ютуб</p>
                <p>Сегодня: телеграм работает</p>
              </div>
            )}
          />
          <Route 
            path="/about"
            render={() => (
              <div>
                <h1>Про нас</h1>
                <p>Мы крутые</p>
              </div>
            )}
          />
          <Route 
            render={() => (
              <div>
                <h1>404</h1>
                <p>Not found</p>
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
