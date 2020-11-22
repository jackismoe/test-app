import React from 'react';
import ReactDOM from 'react-dom';
import StateComponent from './READMEs/StateREADME.js';
import Tickler from './READMEs/EventsInReactREADME.js'
import Clicker from './READMEs/EventsInDetailREADME.js'

ReactDOM.render(
  <React.StrictMode>
    <StateComponent />
    <Tickler />
    <Clicker />
  </React.StrictMode>,
  document.getElementById('root')
);