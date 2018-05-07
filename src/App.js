import React, { Component } from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import './App.css';

const Home = () => (
  <div>
    <h1>Главная</h1>
    <p>Это главная страница</p>
  </div>
);

const News = () => (
  <div>
    <h1>Новости</h1>
    <p>Позавчера: заблокировали гугл</p>
    <p>Вчера: заблокировали ютуб</p>
    <p>Сегодня: телеграм работает</p>
  </div>
);

const About = () => (
  <div>
    <h1>Про нас</h1>
    <p>Мы крутые</p>
  </div>
);

const NotFound404 = () => (
  <div>
    <h1>404</h1>
    <p>Страница не найдена</p>
  </div>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <NavLink
              exact
              activeStyle={{
                color: '#000',
                textDecoration: 'none',
                cursor: 'default'
              }}
              to="/"
            >
              Главная
            </NavLink>
            <span> / </span>
            <NavLink
              activeStyle={{
                color: '#000',
                textDecoration: 'none',
                cursor: 'default'
              }}
              to="/news"
            >
              Новости
            </NavLink>
            <span> / </span>
            <NavLink
              activeStyle={{
                color: '#000',
                textDecoration: 'none',
                cursor: 'default'
              }}
              to="/about"
            >
              Про нас
            </NavLink>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/about" component={About} />
            <Route component={NotFound404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
