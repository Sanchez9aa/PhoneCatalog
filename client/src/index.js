import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {DarkProvider} from './contextApi'


ReactDOM.render(
  <React.StrictMode>
    <DarkProvider>
      <App />
    </DarkProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

