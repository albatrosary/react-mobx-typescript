import * as React from 'react';

import * as CSSModules  from 'react-css-modules';

import * as styles from './Home.css';
import logo from './logo.svg';

// export class Name extends React.Component<INamePropType> {
import { Name } from '../components/Name';
// export default class CountContainer extends React.Component {
// It is not necessary to use '{}' if defined with default
import CountContainer from '../containers/CountContainer'; 

@CSSModules(styles)
export class Home extends React.Component {
  public render() {
    return (
      <div>
        <header styleName="header">
          <img src={logo} styleName="logo" alt="logo" />
          <h1 styleName="title">Welcome to React</h1>
        </header>
        <p styleName="intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Name member="Fumio SAGAWA"/>
        <CountContainer />
      </div>
    );
  }
}
