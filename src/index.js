import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all';
// import SimpleHabbit from './components/simpleHabbit';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <SimpleHabbit /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
