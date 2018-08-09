import * as React from 'react';

import Style from 'style-it';

export class About extends React.Component {
  public render() {
    return Style.it(`
        html {
          color: #222;
        }
        header {
          font-size: 20px;
        }
        main {
          font-size: 16px;
        }
        footer {
          font-size: 10px;
        }
        p {
          line-height: 1.4;
        }
      `,
      <div>
        <header>
          <h1>Standalone Layout Example - Reactive Style</h1>
          <p>For usage without babel / webpack</p>
        </header>
        <main>
          <p>
            For layout styling, use an opening and closing Style tag (JSX) containing no other elements.
          </p>
        </main>
        <footer>
          Copyright &copy; Joshua Robinson 2016-present. MIT Licensed.
        </footer>
      </div>
    );
  }
}
