import React from 'react';
import ReactDOM from 'react-dom';
import StateComponent from './READMEs/StateREADME.js';
import Tickler from './READMEs/EventsInReactREADME.js'
import Clicker from './READMEs/EventsInDetailREADME.js'
import Parent from './READMEs/form/ParentFormREADME.js'
import HelloWorld from './READMEs/presentationalComponents.js'
import TextField from './READMEs/textField.js'

ReactDOM.render(
  <React.StrictMode>
    <StateComponent />
    <Tickler />
    <Clicker />
    <Parent />
    <TextField limit='25'/>
    <HelloWorld message='jack'/>
  </React.StrictMode>,
  document.getElementById('root')
);