import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorPage from './components/pages/ErrorPage';
import AboutUs from './components/pages/AboutUs';
import Categories from './components/pages/Categories';
import Contact from './components/pages/Contact'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={AboutUs} />
          <Route exact path='/categories' component={Categories} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path="*" component={ErrorPage}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
