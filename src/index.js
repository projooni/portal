/**
 * Created by projo on 2017-12-02.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import './index.scss';
// import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');
// ReactDOM.render(<App
//     headerTitle="Welcome!"
//     contentTitle="Stranger,"
//     contentBody="Welcome to Example App!"/>, rootElement);
ReactDOM.render(<Root/>, rootElement);
// registerServiceWorker();