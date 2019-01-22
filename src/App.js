import React, { Component } from 'react';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Header NavBrand={'Hokage'} />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </div>
    );
  }
}

export default App;