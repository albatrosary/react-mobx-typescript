import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

// import './App.css';

import Style from 'style-it';

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
    return Style.it(`
      .App {
        text-align: center;
      }
      .App-header {
        background-color: #2ff;
        height: 150px;
        padding: 20px;
        color: white;
      }
      header {
        color: #ff0000;
      }
      `,
      <div className="App">
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
