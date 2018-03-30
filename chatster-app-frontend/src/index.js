import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import {ActionCableProvider} from 'react-actioncable-provider';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(<ActionCableProvider url={'ws://localhost:3000/cable'}>
  <Provider store={store}>
    <App />
  </Provider>, </ActionCableProvider>, document.getElementById('root'));
registerServiceWorker();
