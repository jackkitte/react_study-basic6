import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={PageOne} exact={true} />
        <Route path="/pagetwo" component={PageTwo} />
      </div>
    )
  }
}

export default App;
