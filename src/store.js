import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension())

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducer', () => {
    const nextRootReducer = require('./reducer').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store
