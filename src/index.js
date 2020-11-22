import React from 'react';
import ReactDOM from 'react-dom';
import StateComponent from './READMEs/StateREADME.js';
import Tickler from './READMEs/EventsInReactREADME.js'

ReactDOM.render(
  <React.StrictMode>
    <StateComponent />
    <Tickler />
  </React.StrictMode>,
  document.getElementById('root')
);