import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
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
            <Link to="/">Главная</Link>
            <span> / </span>
            <Link to="/news">Новости</Link>
            <span> / </span>
            <Link to="/about">Про нас</Link>
          </header>
          <Route path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/about" component={About} />
          <Route component={NotFound404} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
