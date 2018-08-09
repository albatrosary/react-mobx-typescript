import * as React from 'react';

// import './Home.css';
import logo from './logo.svg';

import Style from 'style-it';

// export class Name extends React.Component<INamePropType> {
import { Name } from '../components/Name';
// export default class CountContainer extends React.Component {
// It is not necessary to use '{}' if defined with default
import CountContainer from '../containers/CountContainer'; 

export class Home extends React.Component {
  public render() {
    return Style.it(`
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
      height: 80px;
    }
    
    .App-header {
      background-color: #222;
      height: 150px;
      padding: 20px;
      color: white;
    }
    
    .App-title {
      font-size: 1.5em;
    }
    
    .App-intro {
      font-size: large;
    }
    
    @keyframes App-logo-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }    
      `,
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Name member="Fumio SAGAWA"/>
        <CountContainer />
      </div>
    );
  }
}
