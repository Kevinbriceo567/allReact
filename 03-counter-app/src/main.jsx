import React from 'react'
import ReactDOM from 'react-dom/client'

import HelloWorldApp from './HelloWorldApp'
import { FirstApp } from './FirstApp'

import './styles.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title="TITLE" subTitle={123} />
    {/*<CounterApp value={3} />*/}
  </React.StrictMode>
);

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/