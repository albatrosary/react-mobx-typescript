import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import './App.css';

import * as scoped from 'css-scoper';

import { About, Friends, Home } from './containers';

/*
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
*/
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <style scoped={true}>
          h1 {
            color: pink;
          }
        </style>
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/friends'>Friends</Link></li>
            </ul>
            <Route path='/' exact={true} component={Home} />
            <Route path='/about' component={About} />
            <Route path='/friends' component={Friends} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
