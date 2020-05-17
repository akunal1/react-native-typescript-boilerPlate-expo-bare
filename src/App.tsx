/**
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import RootContainer from './containers/RootContainer';
import { createStore } from './store';
import { Provider } from 'react-redux';

// create our Redux store
export const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;
