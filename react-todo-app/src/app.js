import React from 'react';
import { render } from 'react-dom';
import { List, Map } from 'immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TodoList } from './containers';

import reducer from './reducer';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('app')
);