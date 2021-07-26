import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Youtube from './service/youtube';

const youtube = new Youtube('asdf');
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);
