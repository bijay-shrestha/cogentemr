import React, {Component} from 'react';
import ReactLogo from './ReactLogo.svg';
import YarnCat from './YarnCat.svg';
import './App.css';
import {CButton, CInputText} from '@cogentemr/ui-components';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <div>
              <img
                  src={ReactLogo}
                  className="React-logo"
                  alt="React Logo"
              />
              <img
                  src={YarnCat}
                  className="Yarn-cat"
                  alt="Yarn Workspaces Cat"
              />
            </div>
            <h1>
              <a
                  className="App-link"
                  href="https://github.com/bijay-shrestha/cogentemr"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <strong>CogentEMR</strong> @ Github
              </a>
            </h1>
            <h2>Hot Reload Your Workspaces</h2>
            <p className="body">
              <code className="file">
                packages/apps/admin/src/App.js
              </code>
              <code className="file">
                packages/ui-components/src/CButton/CButton.js
              </code>
              <code className="file">
                packages/ui-components/src/CInputText/CInputText.js
              </code>
            </p>
            <div className="components">
              <CButton />
              <CInputText />
            </div>
          </header>
        </div>
    );
  }
}

export default App;